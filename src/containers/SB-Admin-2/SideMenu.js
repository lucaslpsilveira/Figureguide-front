import React, { Component } from "react";
//import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown , Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Container, Button, Form, Input } from "reactstrap";
//import Logo from "../../assets/logo.svg";
//import api from "../../services/api";
//import { login } from "../../services/auth";

class SideMenu extends Component {       

  render() {
    return (                
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>
          
        <hr className="sidebar-divider my-0"/>
  
        <li className="nav-item active">
          <a className="nav-link" href="/admin">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
        </li>
          
        <hr className="sidebar-divider"/>          
          
        <div className="sidebar-heading">
          Blog
        </div>                  
          
        <li className="nav-item">
          <a className="nav-link" href="/admin/posts">
            <i className="fas fa-fw fa-table"></i>
            <span>Posts</span></a>
        </li>
          
        <hr className="sidebar-divider d-none d-md-block"/>
  
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
  
    </ul>
    );
  }
}

export default SideMenu;
