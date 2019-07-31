import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: 'iść do fryzjera',
        date: '2018-02-14',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'zakupy',
        date: '2018-02-11',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'lekarz',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      }

    ]
  }

  deleteTask = (id) => {
    // console.log("delete" + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })

    this.setState({
      tasks
    })
  }
  render() {
    return (
      <div className="App">
        <p>TEST TEST TEST </p>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
