import React, { Component } from 'React';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPosts } from '../actions';
import { connect } from 'react-redux';


class PostsNew extends Component{
	renderField(field){
		const { meta: {touched, error} } = field;

		const className = `form-group ${touched && error ? 'has-danger' : ''}`;
		
		return (
			<div className={className}> 
				<label>{field.label}</label>

				<input key={field.label} type="text" className="form-control" {...field.input} />
				
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values){
		this.props.createPosts(values, () => {
		this.props.history.push('/posts');
	});

	}

	render(){
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<Field label="Title for Post" name="title" component={this.renderField} />
					<Field label="Tags" name="categories" component={this.renderField} />
					<Field label="Post Content" name="content" component={this.renderField} />
					<button type="submit" className="btn btn-primary" >Save</button>
					<Link to="/posts">Cancel</Link>			
				</form>
			</div>
		);
	}
}

function validate(values){
	const error = {};
	if(!values.title || values.title.length < 3){
		error.title = "Enter a title that is at least 3 chars";
	}
	if(!values.categories){
		error.categories = "Enter some categories";
	}
	if(!values.content){
		error.content = "Enter some content please";
	}
	return error;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, { createPosts })(PostsNew)
);




