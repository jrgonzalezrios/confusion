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
                        <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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

    renderDetails(dish){
        if(dish){
            return(
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
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
                    {this.renderComments(dish)}
                </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    
    render(){
        const dish = this.props.dish;        
        return ( 
            <div className="container">
                {this.renderDetails(dish)} 
            </div>            
          );
    };
}

export default DishdetailComponent;