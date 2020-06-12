import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
}

  state = {
    text: "wpisz datę",
    error: ""
  }

  handleDateChange = (e) => {
    const value = e.target.value;
    console.log(value);
    fetch(`http://numbersapi.com/${value}/year?json`)
      //jakieś głupoty z Response
      .then(res => {
        if (res.ok) {
          console.log(res);
          console.log(res.body);
          this.setState({
            text: "W tym roku: " + res.body.getReader().read().then()
          })
          return res.body;
        }
        throw Error(res.status);
        // console.log(res);
      })
      // .then(reader => this.setState({
      //   text: "W tym roku: " + reader.read()
      // }))
      .catch(err => {
        this.setState({ text: "Jest problem :( " + err })
      })
  }

  render() {
    return (
      <div>
        {/* <input onChange={this.handleDateChange} type="text" ref="number" /> */}
        <input onChange={this.handleDateChange} type="text" />
        <p>W tym roku: {this.state.text} </p>
      </div>
    );
  }
}

export default App;
