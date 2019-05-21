import React, { Component } from 'react';
import { connect } from "react-redux";
import addReminder from "../actions";

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

  render() {
    return (
      <div className="App">
        <div className="title">
            Todo Reminder
        </div>
        <div className="form-inline">
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
      </div>
    )
  }
};

export default connect(null, {addReminder})(App);
