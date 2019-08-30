import React, { Component } from "react";
import { Row, Col, Card, CardBody } from 'reactstrap';
//import { Link } from "react-router-dom";
//import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown , Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container, Button, Form, Input } from "reactstrap";
//import Logo from "../../assets/logo.svg";
import api from "../../services/api";
//import { login } from "../../services/auth";
import Post from './post';

class Home extends Component {

  state = {
    posts: null,
    error: null,
    loading: false    
  }

  async getPosts(){        
    try {
      this.setState({ loading: true });
      const { data } = await api.get("/posts");
      this.setState({ posts: data });
    } catch (err) {
      console.log(err);
      this.setState({
        error:
          "Houve um problema"
      });
    } finally {
      this.setState({ loading: false });
    }   
  }

  componentDidMount(){
    this.getPosts();
  }

  render() {
    return (          
      <Row>
        <Col md='8'>                
            <h1 className="my-4">Page Heading
                <small>Secondary Text</small>
            </h1>
            { this.state.posts !== null 
              ? Object.keys(this.state.posts).map((key) =>{
                return <Post key={key} data={this.state.posts[key]}/>;
              })
              : null }            
            <ul className="pagination justify-content-center mb-4">
                <li className="page-item">
                    <a className="page-link" href="#/">&larr; Older</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#/">Newer &rarr;</a>
                </li>
            </ul>                
        </Col>
        <Col md="4">
            <Card className="my-4">
                <h5 className="card-header">Search</h5>
                <CardBody>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </CardBody>
            </Card>                
            <Card className="my-4">
                <h5 className="card-header">Categories</h5>
                <CardBody>
                <Row>
                    <Col lg="6">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#/">Web Design</a>
                            </li>
                            <li>
                                <a href="#/">HTML</a>
                            </li>
                            <li>
                                <a href="#/">Freebies</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg="6">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#/">JavaScript</a>
                            </li>
                            <li>
                                <a href="#/">CSS</a>
                            </li>
                            <li>
                                <a href="#/">Tutorials</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </CardBody>
        </Card>                                                        
        <Card className="my-4">
            <h5 className="card-header">Side Widget</h5>
            <CardBody>
                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
            </CardBody>
        </Card>
      </Col>
    </Row>                   
    );
  }
}

export default Home;
 