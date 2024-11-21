import React, { useState } from 'react'

const AddTaskBar = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div class="input-group mb-3">
            <input type='text' class="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button class="btn btn-success"
            onClick={() => {
                addTask(inputValue);
            }}>add</button>
        </div>
    )
}

export default AddTaskBar