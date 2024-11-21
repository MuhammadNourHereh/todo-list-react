import React, { useRef, useState } from 'react'

const AddTaskBar = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);


    function addHandle() {
        setInputValue(inputValue.trim());
        if (inputValue == '')
            return;
        addTask(inputValue);
        setInputValue('');
        inputRef.current.focus()
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            addHandle()

    }
    return (
        <div class="input-group mb-3">
            <input type='text' class="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
                autoFocus
                onKeyDown={handleKeyPress}
            />
            <button class="btn btn-success"
                onClick={addHandle}>add</button>
        </div>
    )
}

export default AddTaskBar