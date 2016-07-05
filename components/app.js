import React, { Component } from 'react'

class Greeter extends React.Component {
	constructor(props) {
		super(props)
	}

  render () {
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
	    </div>
	  )
  }
}

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
	    	<Greeter name="Rich"/>
	    	<Greeter name="Kristy"/>
	    	<Counter />
	    </div>
	  )
  }
}

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {count: 0}
		this.showFail = false
	}

	increaseCounter() {
		this.setState({count: this.state.count + 1})
	}

	decreaseCounter() {
		if (this.state.count > 0) {
			this.setState({count: this.state.count - 1})
		} else if (this.state.count === 0)
		{
			this.setState({showFail: true})
		}
	}

	render() {
		return (
			<div>
				<h2>The count is: {this.state.count}</h2>
				<button onClick={this.increaseCounter.bind(this)}>OMFG MOAR PLZ</button>
				<button onClick={this.decreaseCounter.bind(this)}>LESS THAN MOAR</button>
			</div>
		)
	}
}

export default App
