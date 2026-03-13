import React, { useState } from 'react'

const App = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    // Add Task
    const addTask = (e) => {
        e.preventDefault();
        
        if (task.trim() === "") return;
        setTodos([...todos, task]);
        setTask("");
    };

    // Delete Task
    const deleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };
    return (
        <div className="min-h-screen bg-amber-200 flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-10">To-Do List</h1>

            <form onSubmit={addTask} className="mt-10 flex gap-2">
                <input
                    type="text"
                    placeholder="Add Task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="p-2 border rounded"
                />
                <button className="bg-black text-white px-4 rounded">
                    Add
                </button>
            </form>

            <ul className="mt-10 w-80">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center bg-white p-2 mb-2 rounded"
                    > 
                        {todo} 
                        <button
                            onClick={() => deleteTask(index)}
                            className="text-red-500 font-bold"
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default App;
