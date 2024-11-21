import React, { useState } from 'react'

const AddTaskBar = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    function addHandle() {
        if(inputValue == '')
            return;
        addTask(inputValue);
        setInputValue = '';
    }

    return (
        <div class="input-group mb-3">
            <input type='text' class="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button class="btn btn-success"
                onClick={addHandle}>add</button>
        </div>
    )
}

export default AddTaskBar