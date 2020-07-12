import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function RenderDish({dish}) {
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

function RenderComments({comments}) {
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

const  Dishdetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
        return(<div></div>);
    }

    return(
        <div className = "container">
            <div className = "row">
                <RenderDish dish = {dish} />
                <RenderComments comments = {dish.comments} />
            </div>
        </div>
    );
};

export default Dishdetail;