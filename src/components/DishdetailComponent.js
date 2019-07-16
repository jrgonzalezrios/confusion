import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({ comments }) {
    if (comments != null) {
        return comments.map((comment) => {
            let date = new Date(comment.date)
            return (
                <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            );
        });
    } else {
        return (
            <div></div>
        )
    }
}

function RenderDetails({ dish, comments }) {
    if (dish) {
        return (
            <div className="container">
                <div class="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                            <CardText>{dish.description}</CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments:</h4>
                        <RenderComments comments={comments} />
                    </div>
                </div>
            </div>            
        )
    } else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    return (        
        <RenderDetails dish={props.dish} comments={props.comments}/>
    );
};

export default DishDetail;