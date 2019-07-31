import React from 'react';

const Task = (props) => {
    const { text, date, id } = props.task;
    return (
        <div>
            <p>
                <strong>{text}</strong> - termin: <span>{date}</span>
                <button onClick={() => props.change(id)}>Zadanie wykonane</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    );
}

export default Task;