import React, { Component } from 'react';
import { connect } from "react-redux";
import { addReminder, deleteReminder } from "../actions";

class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
         text: ''
     }
  }

  addThisReminder() {
      this.props.addReminder(this.state.text);
  }

  deleteReminder(id) {
      console.log(id);
      this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
        <ul className="list-group col-sm-4">
            {
                reminders.map(reminder => {
                    return (
                        <li className="list-group-item" key={reminder.id}>
                            <div className="list-item">{reminder.text}</div>
                            <div className="list-item delete-button"
                                onClick={() => this.deleteReminder(reminder.id)}
                            >&#x2715;</div>
                        </li>
                    )
                })
            }
        </ul>
    )
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div className="App">
        <div className="title">
            Todo Reminder
        </div>
        <div className="form-inline reminder-form">
            <div className="form-group">
                <input type="text" className="form-control"
                    placeholder="I wanna"
                    onChange={e => this.setState({ text: e.target.value })}
                />
                <button className="btn btn-success"
                    onClick={() => this.addThisReminder()}
                >
                    Add Reminder
                </button>
            </div>
        </div>
        {this.renderReminders()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        reminders: state
    }
};

export default connect(mapStateToProps, {addReminder, deleteReminder})(App);
