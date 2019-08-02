import React, { Component } from 'react';
import './AddTask.css'
class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);
    state = {
        text: '',
        checked: false,
        date: this.minDate
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.value
        })
    }
    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleClickButton = () => {
        const { text, date, checked } = this.state;
        const add = this.props.add(text, date, checked)
        if (add) {
            this.setState({
                text: "",
                checked: false,
                date: this.minDate
            })
        }

    }
    render() {
        return (
            <>
                <div>
                    <input type="text" placeholder="dodaj zadanie" value={this.state.text} onChange={this.handleText}></input>
                    <input type='checkbox' checked={this.state.checked} onChange={this.handleCheckbox}></input>
                    <label htmlFor='important'>zadanie priorytetowe</label><br></br>
                    <label htmlFor='date'>termin wykonania:</label>
                    <input type='date' value={this.state.date} min="2019-01-01" max="2022-01-01" onChange={this.handleDate}></input>
                    <button onClick={this.handleClickButton}>DODAJ</button>

                </div>

            </>
        );
    }
}

export default AddTask;