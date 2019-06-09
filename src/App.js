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
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
    input: ""
    })
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="App">
        <header className="App-header">
<h1>To do App</h1>          
<form onSubmit = {this.formSubmit}>
            <input value = {this.state.input} onChange={this.inputUpdate} />
            <button>Submit</button>
          </form>
          <ul>{this.state.items.map(function(item,index){
            return <li key={index}>{item}</li>
          })}</ul>
        </header>
      </div>
    );
  }
}

export default App;
