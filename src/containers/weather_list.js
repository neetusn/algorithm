import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/googl_map';

 class WheatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;

		const temps = cityData.list.map(weather => {
			return weather.main.temp;
		});
		const pressures = cityData.list.map(weather => {
			return weather.main.pressure;
		});
		const humidities = cityData.list.map(weather => {
			return weather.main.humidity;
		});

		const {lon, lat} = cityData.city.coord;
		
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td> <Chart data={temps} color="red" /> </td>
				<td> <Chart data={pressures} color="green" /> </td>
				<td> <Chart data={humidities} color="black" /> </td>
			</tr>
		);
	}
	render(){
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (K)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		weather:state.weather
	};
}

export default connect(mapStateToProps)(WheatherList);