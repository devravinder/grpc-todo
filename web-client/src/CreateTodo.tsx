import { FormEventHandler, useState } from "react"
import { HR } from "./components"

export default function CreateTodo() {

    const [name, setName] = useState('')
    const [priority, setPriority] = useState(1)

    const onSubmit:FormEventHandler<HTMLFormElement>=(e)=>{
        e.preventDefault()
        console.log({name, priority})
    }


    return <>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col gap-2">
                <h1 >Create Todo</h1>
                <HR/>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                        onChange={(e) => setName(e.currentTarget.value)}
                        required
                        value={name}
                        name="name"
                        className="p-1 rounded-md focus:outline-gray-500 border border-gray-400" />
                </div>
                <div className="flex flex-col gap-2">
                    <label>Priority</label>
                    <input
                        value={priority}
                        required
                        onChange={(e) => {
                            setPriority(e.currentTarget.valueAsNumber)
                        }}
                        min={1}
                        max={5}
                        type="number"
                        name="priority"
                        className="p-1 rounded-md focus:outline-gray-500 border border-gray-400" />
                </div>
                <div className="flex flex-row">
                    <button className="w-full rounded-md bg-green-500 px-2 py-1">Save</button>
                </div>

            </form>
        </div>
    </>
}
