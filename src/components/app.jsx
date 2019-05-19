import React, { Component } from 'react';

class App extends Component {
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
                />
                <button className="btn btn-success">
                    Add Reminder
                </button>
            </div>
        </div>
      </div>
    )
  }
};

export default App;
