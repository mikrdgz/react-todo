import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./firstComponent.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: []
    };
  }

  // toggle = () => {
  //   this.setState({ isOn: !this.state.isOn });
  // };

  inputUpdate = (event) =>{
this.setState({input: event.target.value})
  }

  formSubmit = event =>{
    console.log(this.state.items)
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
    input: ""
    })
  }

  render() {
    console.log("**this is state**", this.state.isOn);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit = {this.formSubmit}>
            <input value = {this.state.input} onChange={this.inputUpdate} />
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
