import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id}
        task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <div className="active">
                <h1>Lista zadań</h1>
                {tasks}
            </div>
            <hr />
            <div className="done">
                <h3>Lista zadań wykonanych(0)</h3>

            </div>
        </>
    );
}

export default TaskList;