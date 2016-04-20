import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


export default class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);

		console.log(pressure);

		return (
			<tr key={name}>
				<td>{name}</td>
				<Chart data={temps} color="orange" />
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

// function mapStateToProps(state) {	
// 	return { weather: state.weather };
// }

//assigned WeatherReducer to weather key - using state.weather
//the argument being passed in has a property called weather
//return an object where weather key value is equal to weather.

function mapStateToProps({weather}) {	
	return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);