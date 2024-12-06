import { HR, Vertical } from "./components";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import UpdateTodo from "./UpdateTodo";

export default function App() {
  return (<>
    <div className="w-full flex flex-row justify-center">
      <div className="w-full max-w-7xl p-6 flex flex-col gap-4">
        <CreateTodo />
        <HR />
        <div className="w-full h-full flex flex-row gap-4">
          <div className="w-2/3"><TodoList /></div>
          <Vertical/>
          <div className="w-1/3 "><UpdateTodo/></div>
        </div>

      </div>
    </div>
  </>
  )
}
