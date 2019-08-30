import React, { Component } from "react";
//import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown , Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container, Button, Form, Input } from "reactstrap";
//import Logo from "../../assets/logo.svg";
//import api from "../../services/api";
//import { login } from "../../services/auth";

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

  render() {
    return (                
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#/">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#/">Home
                    <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>            
    );
  }
}

export default Home;
