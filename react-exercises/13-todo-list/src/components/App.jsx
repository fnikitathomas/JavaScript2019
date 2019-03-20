/**
 * Complete this Todo List app.
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state and submitting the form should not refresh the page.
 * When the user clicks on the "Add" button, the text in the textbox should be placed in the Todo List.
 * You will need to pass the text down to the list "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the Todo list.
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {typedText : "", clicked : false}

  set = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.setState({clicked : true, value : this.state.typedText})
  }

  //addList = e => this.setState({clicked : true})

  render() {
    const {clicked, typedText, ...captured} = this.state
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                name="typedText"
                onChange={this.set}
                placeholder="Enter text"
                aria-label="Enter text"
                aria-describedby="button-add"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="button-add"
                  //onClick={this.addList}
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">
          {/* Put ListItems in here */}
          {this.state.clicked && Object.entries(captured).map(([k,v]) => <ListItem key={(Math.random() * 1)}reset={()=> this.setState({clicked :false})}>{v}</ListItem>)}
        </ul>
      </div>
    );
  }
}

export default App;
