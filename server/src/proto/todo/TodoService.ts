// Original file: ../proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodo as _todo_CreateTodo, CreateTodo__Output as _todo_CreateTodo__Output } from '../todo/CreateTodo';
import type { Empty as _todo_Empty, Empty__Output as _todo_Empty__Output } from '../todo/Empty';
import type { Priority as _todo_Priority, Priority__Output as _todo_Priority__Output } from '../todo/Priority';
import type { StatusUpdate as _todo_StatusUpdate, StatusUpdate__Output as _todo_StatusUpdate__Output } from '../todo/StatusUpdate';
import type { Todo as _todo_Todo, Todo__Output as _todo_Todo__Output } from '../todo/Todo';
import type { TodoId as _todo_TodoId, TodoId__Output as _todo_TodoId__Output } from '../todo/TodoId';
import type { UpdateTodo as _todo_UpdateTodo, UpdateTodo__Output as _todo_UpdateTodo__Output } from '../todo/UpdateTodo';

export interface TodoServiceClient extends grpc.Client {
  createTodo(argument: _todo_CreateTodo, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodo, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodo, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodo, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  
  getTodo(argument: _todo_TodoId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  getTodo(argument: _todo_TodoId, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  getTodo(argument: _todo_TodoId, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  getTodo(argument: _todo_TodoId, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  
  getTodos(argument: _todo_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_todo_Todo__Output>;
  getTodos(argument: _todo_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_todo_Todo__Output>;
  
  getTodosByPriority(argument: _todo_Priority, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_todo_Todo__Output>;
  getTodosByPriority(argument: _todo_Priority, options?: grpc.CallOptions): grpc.ClientReadableStream<_todo_Todo__Output>;
  
  updateTodo(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientWritableStream<_todo_UpdateTodo>;
  updateTodo(metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientWritableStream<_todo_UpdateTodo>;
  updateTodo(options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientWritableStream<_todo_UpdateTodo>;
  updateTodo(callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientWritableStream<_todo_UpdateTodo>;
  
  updateTodoStatus(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_todo_StatusUpdate, _todo_Todo__Output>;
  updateTodoStatus(options?: grpc.CallOptions): grpc.ClientDuplexStream<_todo_StatusUpdate, _todo_Todo__Output>;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  createTodo: grpc.handleUnaryCall<_todo_CreateTodo__Output, _todo_Todo>;
  
  getTodo: grpc.handleUnaryCall<_todo_TodoId__Output, _todo_Todo>;
  
  getTodos: grpc.handleServerStreamingCall<_todo_Empty__Output, _todo_Todo>;
  
  getTodosByPriority: grpc.handleServerStreamingCall<_todo_Priority__Output, _todo_Todo>;
  
  updateTodo: grpc.handleClientStreamingCall<_todo_UpdateTodo__Output, _todo_Todo>;
  
  updateTodoStatus: grpc.handleBidiStreamingCall<_todo_StatusUpdate__Output, _todo_Todo>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  createTodo: MethodDefinition<_todo_CreateTodo, _todo_Todo, _todo_CreateTodo__Output, _todo_Todo__Output>
  getTodo: MethodDefinition<_todo_TodoId, _todo_Todo, _todo_TodoId__Output, _todo_Todo__Output>
  getTodos: MethodDefinition<_todo_Empty, _todo_Todo, _todo_Empty__Output, _todo_Todo__Output>
  getTodosByPriority: MethodDefinition<_todo_Priority, _todo_Todo, _todo_Priority__Output, _todo_Todo__Output>
  updateTodo: MethodDefinition<_todo_UpdateTodo, _todo_Todo, _todo_UpdateTodo__Output, _todo_Todo__Output>
  updateTodoStatus: MethodDefinition<_todo_StatusUpdate, _todo_Todo, _todo_StatusUpdate__Output, _todo_Todo__Output>
}
