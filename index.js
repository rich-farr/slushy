import React from 'react'
import reactDom from 'react-dom'
import App from './components/app'

class Greeter extends React.Component {
	constructor(props) {
		super(props)
	}
}

reactDom.render(<App name="this freakin'app" />, document.querySelector('main'))
console.log("welcome to this freakin' app")
