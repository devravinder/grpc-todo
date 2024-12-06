import { HR } from "./components"

const TodoList = () => {
    const fetchTodos = async() => {
        console.log("============whs")

    }
    return <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center">
            <div className="flex flex-row gap-2">
                <h1>Todos</h1>
                <button onClick={fetchTodos} className="rounded-md px-2 bg-blue-500 text-white">⟳</button>
            </div>
            <HR />
        </div>
        <div className="w-full flex flex-col gap-2">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    </div>
}

const TodoItem = () => {
    return (
        <div className="w-full flex flex-row gap-8">
            <div className="flex flex-row flex-grow ">
                Hello
            </div>
            <div className="flex flex-row gap-2">
                <div className="rounded-lg bg-purple-400 px-2 text-white">1</div>
                <button className="rounded-md px-2 border border-gray-500">PENDING</button>
            </div>
            <div className="flex flex-row gap-2">
                <button className="rounded-md border px-2 text-blue-500">🖉</button>
                <button className="rounded-md border px-2 ">⛔</button>
            </div>
        </div>
    )
}

export default TodoList
