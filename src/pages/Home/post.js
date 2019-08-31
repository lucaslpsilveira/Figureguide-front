import React, { Component } from "react";
import { Card, CardBody, CardFooter } from 'reactstrap';

class Post extends Component {

  convertDate(date){
    var event = new Date(date);

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return event.toLocaleDateString('pt-BR', options);
  }

  render() {
    return (          
        <Card className="mb-4">
            <img className="card-img-top" src={this.props.data.images.length > 0 ? this.props.data.images[0].url : "http://placehold.it/750x300"} alt="Card"/>
            <CardBody>
                <h2 className="card-title">{this.props.data.title}</h2>
                <p className="card-text">{this.props.data.body}</p>
                <a href="#/" className="btn btn-primary">Read More &rarr;</a>
            </CardBody>
            <CardFooter className="text-muted">
                {this.props.data.created_at ? this.convertDate(this.props.data.created_at) : null } by
                <a href="#/">Start Bootstrap</a>
            </CardFooter>
        </Card>                           
    );
  }
}

export default Post;
 