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
        <div className="input-group mb-3">
            <input type='text' className="form-control"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
                autoFocus
                onKeyDown={handleKeyPress}
            />
            <button className="btn btn-success"
                onClick={addHandle}>add</button>
        </div>
    )
}

export default AddTaskBar