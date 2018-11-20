import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';
import nutrient_names from './NutrientNames';

class App extends Component {
	state = {
		repos: null,
		query: '',
		reponames: [],
		full_nutrients: []
	};

	nutrient_names = nutrient_names;

	getUser = async (e) => {
		e.preventDefault();

		const query = e.target.elements.username.value;
		this.setState({ query: query });
		await axios({
			method: 'POST',
			url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
			headers: {
				'Content-Type': 'application/json',
				'x-app-id': '0abc5e58',
				'x-app-key': '035a654f2099fdc3b6c2b3a779b38fe0',
				'x-remote-user-id': '0'
			},
			data: {
				query: `${query}`
			}
		}).then((res) => {
			let nutrients = res.data.foods[0];
			this.setState({ calories: nutrients.nf_calories });
			this.setState({ unit: nutrients.serving_unit });

			const full_nutrients = res.data.foods[0].full_nutrients.map((i) => ({
				name: this.nutrient_names[i.attr_id],
				value: [ i.value ]
			}));

			this.setState({ full_nutrients: full_nutrients });
		});
	};

	render() {
		const ulStyle = {
			listStyleType: 'none',
			padding: 0
		};

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">
						{!this.state.query ? (
							'HTTP Calls in React'
						) : (
							`1 ${this.state.unit} ${this.state.query} has ${this.state.calories} calories 
							`
						)}
					</h1>
				</header>
				<UserForm getUser={this.getUser} />
				<ul style={ulStyle}>
					{this.state.full_nutrients.map((i, index) => (
						<div className="ui items header divider">
							<li key={index}>
								{i.name.name}: {i.value} {i.name.unit}
								<p />
							</li>
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default App;
