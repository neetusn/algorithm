import React, { Component } from 'react';

export default class ProductTable extends Component{

	render(){
		const prod = this.props.products[0].name; 
		return (
			<div>
				{prod}
			</div>
		);
	}
}