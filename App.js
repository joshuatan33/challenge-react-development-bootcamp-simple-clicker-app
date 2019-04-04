import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    console.log('I am rendering!')
    if (this.state.count === 0) {
      return (
        <div>
          <h1>Press the button, it's fun!</h1>
          <button onClick={this.handleClick}>PRESS ME</button>
        </div>
      )
    }else if (this.state.count > 1) {
      return (
        <div>
          <h1>You have pressed the button {this.state.count} times!</h1>
          <button onClick={this.handleClick}>PRESS ME</button>
        </div>
      )  
    }
    return (
      <div>
        <h1>You have pressed the button {this.state.count} time!</h1>
        <button onClick={this.handleClick}>PRESS ME</button>
      </div>
    )
  }
}

export default App