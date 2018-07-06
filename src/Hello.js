import React, { Component } from 'react';

class Hello extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			friendname: "another friend 1"
		};
		this.updateFriendName = this.updateFriendName.bind(this)
	}

	updateFriendName() {
		this.setState({
			friendname: "yet another friend from changed state"
		})
	}

	render() {
		return (
			<div>
				<h1>Hello {this.state.friendname}!</h1>
				<button onClick={this.updateFriendName}>Click me</button>
			</div>
		)
	}
}

export default Hello;