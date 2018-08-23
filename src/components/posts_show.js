import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';


class PostsShow extends Component{
	constructor(props){
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	componentDidMount(){
		const {id} = this.props.match.params;
		this.props.fetchPost(this.props.match.params.id);
	}
	onDeleteClick(){
		const {id} = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/posts');
		});
	}
	
	render(){
		const { post } = this.props;
		console.log(post, '-------');
		if(!post){
			return <div> Loading </div>;
		}
		// console.log(posts[this.props.match.params.id]);
		// console.log(this.props.post);
		return (
			<div> 
				<Link to="/posts">Back to Index </Link>
				{post.title}
				<button onClick={this.onDeleteClick} className="btn pull-xs-right">Delete</button>
			</div>
		);
	}
}

function mapStateToProps ({ posts }, ownProps) {
	// body...
	return { post:posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);


