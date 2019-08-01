import React from 'react';

const Task = (props) => {
    const style = {
        color: 'red',
        fontWeight: 'bold',
    }
    const { text, date, id, active, important, finishDate } = props.task;
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - termin: <span>{date}</span>
                    <button onClick={() => props.change(id)}>Zadanie wykonane</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        );
    } else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong style={important ? null : null}>{text}</strong> - zrobione: <span>{finish}</span>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </div>
        )
    }
}

export default Task;