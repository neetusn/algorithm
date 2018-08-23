import React from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from 'selector/selected_posts';

const SelectedPostList = (props) => {
	return (
		<ul className = "list-group">
		{
			props.posts.map((props) => {
				return (
					<li> {post.title} </li>
				);
			});
		}
		</ul>
	);
}

const mapStoreToProps();