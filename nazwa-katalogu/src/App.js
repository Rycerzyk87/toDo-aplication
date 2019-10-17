import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

import './App.css';

class App extends Component {
  counter = 3
  state = {
    tasks: [
      {
        id: 0,
        text: 'iść do fryzjera',
        date: '2019-09-14',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'zakupy',
        date: '2019-08-29',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'lekarz',
        date: '2043-02-15',
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
  addTask = (text, date, important) => {
    const task = {

      id: this.conuter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render() {
    return (
      <div className="App">
        <h1>LISTA ZADAŃ DO ZROBIENIA</h1>
        <AddTask add={this.addTask} />
        <div className="line"></div>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
