import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val)=> !(val) || (val.length <= len);
const minLength = (len) => (val)=> (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}><i class="fa fa-pencil"></i>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select model=".rating" id="rating" name="rating"
                                placeholder="Rating"
                                className="form-control"
                                >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>                           
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="author" md={2}>Your name</Label>
                        <Col md={10}>
                            <Control.text model=".author" id="author" name="author"
                            placeholder="Author name"
                            className="form-control"
                            validators={{
                                required, minLength:minLength(3),
                                maxLength: maxLength(15)
                            }}
                            />
                            <Errors 
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required ',
                                    minLength: "Should at least be three characters long. ",
                                    maxLength: "Should be less than or equal to 15 characters. "                                    
                                }}
                            />
                        </Col>
                    </Row>                    
                    <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control"
                                    />
                                </Col>
                            </Row>
                </LocalForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;