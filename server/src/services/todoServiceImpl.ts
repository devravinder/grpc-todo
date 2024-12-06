import { sendUnaryData, ServerDuplexStream, ServerReadableStream, ServerUnaryCall, ServerWritableStream } from "@grpc/grpc-js";
import { Todo } from "../proto/todo/Todo";
import { UpdateTodo } from "../proto/todo/UpdateTodo";
import { Empty } from "../proto/todo/Empty";
import { StatusUpdate } from "../proto/todo/StatusUpdate";
import { CreateTodo } from "../proto/todo/CreateTodo";
import { TodoId } from "../proto/todo/TodoId";
import { TodoServiceDefinition } from "../proto/todo/TodoService";
import { HandleCall } from "@grpc/grpc-js/build/src/server-call";
import { Priority } from "../proto/todo/Priority";

const todos: Todo[] = [];

// Unary RPC - Create Todo
const createTodo = (call: ServerUnaryCall<CreateTodo, Todo>, callback: sendUnaryData<Todo>) => {
  const todo = { id: String(todos.length), ...call.request };
  todos.push(todo);
  callback(null, todo); // null means no error
};

const getTodo = (call: ServerUnaryCall<TodoId, Todo>, callback: sendUnaryData<Todo>) => {
  const { id } = call.request
  const index = todos.findIndex(t => t.id === id);

  if (index !== -1) {
    callback(null, todos[index]);
  } else {
    callback(new Error('Todo not found'), null);
  }
};

// Client Streaming RPC - Update Todo Fields
/* 
 in client streaming - on initial request & only connect will get establish, but no data transfer will happen
*/
const updateTodo = (call: ServerReadableStream<UpdateTodo, Todo>, callback: sendUnaryData<Todo>) => {
  const todoUpdates: Partial<Todo> = {};

  call.on('data', (request: UpdateTodo) => {
    todoUpdates.id = request.id;

    if (request.name) {
      todoUpdates.name = request.name
    }
    if (request.priority) {
      todoUpdates.priority = request.priority
    }
    if (request.status) {
      todoUpdates.status = request.status
    }
  });

  call.on('end', () => {
    const index = todos.findIndex(t => t.id === todoUpdates.id);

    if (index !== -1) {
      todos[index] = { ...todos[index], ...todoUpdates };
      callback(null, todos[index]);
    } else {
      callback(new Error('Todo not found'), null);
    }
  });
};

// Server Streaming RPC - Get Todos by Date Range
const getTodos = (call: ServerWritableStream<Empty, Todo>) => {

  todos.forEach(todo => {
    call.write(todo)
  });
  call.end();
};
const getTodosByPriority = (call: ServerWritableStream<Priority, Todo>) => {

  const priority = call.request.priority!

  const filteredTodos = todos.filter(todo => todo.priority===priority);

  filteredTodos.forEach(todo => {
    call.write(todo)
  });
  call.end();
}


// Bidirectional Streaming RPC - Update Todo Status
/* 
 in Bidirectional streaming  ( same like clinet streaming )- on initial request & only connect will get establish, but no data transfer will happen
*/
const updateTodoStatus = (call: ServerDuplexStream<StatusUpdate, Todo>) => {
  call.on('data', (request: StatusUpdate) => {
    const { id, status } = request


    const index = todos.findIndex(t => t.id === id);

    if (index !== -1) {
      todos[index].status = status;

      call.write(todos[index]);
    }
    else {
      console.log("============no todo found ")
      //callback(new Error('Todo not found'), null);
    }
  });

  call.on('end', () => {
    call.end();
  });
}

// this is not required, we added for type safe
type ServiceDefinitionImpl = { [key in keyof TodoServiceDefinition]: HandleCall<any, any> }


const todoServiceImpl: ServiceDefinitionImpl = {
  createTodo,
  getTodo,
  updateTodo,
  getTodos,
  getTodosByPriority,
  updateTodoStatus

}

export default todoServiceImpl