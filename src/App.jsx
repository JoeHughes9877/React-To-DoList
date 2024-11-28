import React, { useState } from "react";
import Form from "./Add";
import Card from "./Card";

function App() {
    const [content, setContent] = useState([
    ]);

    const addTask = (taskContent) => {
      const newTask = { title: `Task ${content.length + 1}`, content: taskContent };
      setContent([...content, newTask]);
    };

    const handleDelete = (index) => {
        const updatedTasks = content.filter((_, i) => i !== index);
        setContent(updatedTasks);
    };

    return (
        <div className="app-container">
            <h1>ToDo List</h1>
            <Form addTask={addTask} />
            <div className="card-container">
                {content.map((task, index) => (
                    <Card
                        key={index} 
                        title={task.title}
                        content={task.content}
                        onDelete={() => handleDelete(index)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
