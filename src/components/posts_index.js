import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return _.map(this.props.posts, (post) => {
			return (
				<li key={post.id} className="list-group-item">
					<Link to={`/posts/${post.id}`}>{post.title} </Link>| 
					{post.id}
					
				</li>
			);
		});
	}
	render(){
		console.log(this.props.posts);
		return(
			<div> 
				<Link to="/posts/new" className="btn">Add new post</Link>
				<h3>posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}
// mapdispatch action creator skiped
function mapStateToProps(state){
	return {posts: state.posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);