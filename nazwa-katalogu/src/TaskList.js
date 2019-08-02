import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    const activeTasks = active.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <hr />
            <div className="active">
                <h2>Do zrobienia({active.length})</h2>
                {activeTasks.length > 0 ? activeTasks : <p>BRAK ZADAŃ</p>}
            </div>
            <hr />
            <div className="done">
                <h2>Zadania wykonane({done.length})</h2>
                {doneTasks.length > 0 ? doneTasks : <p>BRAK ZADAŃ</p>}
            </div>
        </>
    );
}

export default TaskList;