import React, { Component} from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';
import SearchBar from '../containers/search_bar';
import WheatherList from '../containers/weather_list';

export default class App extends Component{
	render(){
		return(
			<div>
				<BookList />
				<div className="grey_line"></div>
				
				<BookDetail />
				<SearchBar />
				<WheatherList />
				<div className="grey_line"></div>
			</div>
		);
	}
}
