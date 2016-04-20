import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
				<td> 
					<Sparklines height={120} width={180} data={temps}>
						<SparklinesLine color="red" />
					</Sparklines>
				</td>
				<td> 
					<Sparklines height={120} width={180} data={pressure}>
						<SparklinesLine color="green" />
					</Sparklines>
				</td>
				<td> 
					<Sparklines height={120} width={180} data={humidity}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
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