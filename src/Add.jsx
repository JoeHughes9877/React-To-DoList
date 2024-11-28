// Import necessary React modules
import React, { useState } from "react";
import Card from './Card';

function Form({ addTask }) {

    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask("");   
        }
    };

    return (
        <form className="InputForm" onSubmit={handleSubmit}>
            <input 
                placeholder="Task: (Max 80 characters)" 
                type="text" 
                value={newTask} 
                onChange={(e) => {
                if (e.target.value.length <= 80) {
                    setNewTask(e.target.value);
                }
            }} 
            maxLength={80}
        />

            <button type="submit">Add</button>
        </form>
    );
}

export default Form;
