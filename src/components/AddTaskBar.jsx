import React, { useState } from 'react'

const AddTaskBar = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div>
            <input type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => {
                addTask(inputValue);
            }}>add</button>
        </div>
    )
}

export default AddTaskBar