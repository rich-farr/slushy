import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
	    	<Counter />
	    </div>
	  )
  }
}

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {count: 0}
	}

	increaseCounter() {
		this.setState({count: this.state.count + 1})
	}

	decreaseCounter() {
		this.setState({count: this.state.count - 1})
	}

	render() {
		return (
			<div>
				<h2>The count is: {this.state.count}</h2>
				<div>
					<button onClick={this.increaseCounter.bind(this)}>OMFG MOAR</button>
				</div>
				<div>
					<button onClick={this.decreaseCounter.bind(this)}>LESS THAN MOAR</button>
				</div>
			</div>
		)
	}
}

export default App
