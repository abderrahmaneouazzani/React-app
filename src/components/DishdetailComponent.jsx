import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {
	renderDish(dish) {
		if (dish == null) {
			return(<div></div>);
		}

		else {
			return(
				<div className = "col-12 col-md-5 m-1">
					<Card>
						<CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
			);
		}
	}

	renderComments(comments) {
		if (comments == null) {
			return(<div></div>);
		}

		const comnts = comments.map((cmnt) => {
			return(
				<li key = {cmnt.id}>
					<p>{cmnt.comment}</p>
					<p>-- {cmnt.author},
					&nbsp;
					{new Intl.DateTimeFormat('en-US', {
						year: 'numeric',
						month: 'long',
						day: '2-digit'
					}).format(new Date(cmnt.date))}
					</p>
				</li>
			);
		});

		return (
			<div className = "col-12 col-md-5 m-1">
				<h4>Comments</h4>
				<ul className = "list-unstyled">
					{comnts}
				</ul>
			</div>
		);
	}

	render() {
		const dish = this.props.dish;
		if (dish == null) {
			return(<div></div>);
		}

		const dishDesc = this.renderDish(dish);
		const cmnts = this.renderComments(dish.comments);
		
		return(
			<div className = "row">
				{dishDesc}
				{cmnts}
			</div>
		);
	}

}

export default Dishdetail;