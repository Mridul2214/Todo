import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

function Home() {
    const [task, setTask] = useState('');
    const [data, setData] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);

    const handleAdd = async () => {
        try {
            const response = await axios.post('http://localhost:3000/', { task });
            console.log(response.data);
            fetchData();
            setTask('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const handleUpdate = async (id) => {
        try {
            const response = await axios.put(`http://localhost:3000/${id}`, { task });
            console.log(response.data);
            fetchData();
            setTask('');
            setEditTaskId(null); 
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/${id}`);
            console.log(response.data);
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []);

return (
    <div className="container"> 
    <h1>TODO LIST</h1>
        <div className="input-container"> 
            <input type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button type="button" onClick={editTaskId ? () => handleUpdate(editTaskId) : handleAdd}>
                {editTaskId ? 'Update' : 'Add'}
            </button>
        </div>

        <h2>Task List</h2>
        {data.length === 0 ? (
            <div>No records</div>
        ) : (
            data.map((item) => (
                <div className="task-item" key={item._id}>
                    <p>{item.task}</p>
                    <div>
                        <button onClick={() => { setTask(item.task); setEditTaskId(item._id); }}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                </div>
            ))
        )}
    </div>
);

}

export default Home;
