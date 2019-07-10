import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            comments: null
        }
    }

    renderComments(dish){
        if(dish.comments != null){
            return dish.comments.map((comment) => {
                let date = new Date(comment.date)
                return (
                  <div key={comment.id}>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {date.toDateString()}</li>
                    </ul>                  
                </div>              
                );
            });
        }else{
            return(
                <div></div>
            )
        }
    }
    
    render(){
        const dish = this.props.dish;        
        return (           
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments:</h4>
                    {this.renderComments(dish)}
                </div>
            </div>            
          );
    };
}

export default DishdetailComponent;