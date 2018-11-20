import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';

class App extends Component {
	ulStyle = {
		listStyleType: 'none',
		padding: 0
	};

	state = {
		repos: null,
		user: '',
		reponames: []
	};

	getUser = async (e) => {
		e.preventDefault();
		const user = e.target.elements.username.value;
		this.setState({ user: user });
		await axios.get(`https://api.github.com/users/${user}`).then((res) => {
			this.setState({ repos: res.data.public_repos, avatar: res.data.avatar_url });
		});
		await axios.get(`https://api.github.com/users/${user}/repos`).then((res) => {
			const data = res.data;
			console.log(data);
			this.setState({ reponames: data.map((i) => i.name) });
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">
						{this.state.user ? (
							<a href={`https://github.com/${this.state.user}`} target="_blank">
								<img src={this.state.avatar} width={'100px'} style={{ paddingRight: '20px' }} />
							</a>
						) : null}
						{!this.state.user ? (
							'HTTP Calls in React'
						) : (
							`${this.state.user} has ${this.state.repos} repos 
							`
						)}
					</h1>
				</header>
				<UserForm getUser={this.getUser} />
				<ul style={this.ulStyle}>
					{this.state.reponames.map((i, index) => (
						<div className="ui items header divider">
							<li key={index}>
								<a href={`https://github.com/${this.state.user}/${i}`} target="_blank">
									{i}
								</a>
							</li>
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
