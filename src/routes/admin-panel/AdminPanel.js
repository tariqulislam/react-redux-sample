// AdminPanel.js

import React, { Component } from "react";
import { Nav } from "react-bootstrap";

import "./assets/css/ion.rangeSlider.css";
import "./assets/css/bootstrap-slider.css";
import "./assets/css/adminlte.css";
import "./assets/css/google-fonts.css";
import "./assets/css/fontawesome-all.css";
import "./assets/css/ionicons.css";
import { Redirect } from "react-router";

export default class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  loadComponent = (data) => {
    this.setState({ component: data })
  }

  componentDidMount = () => {
    this.setState({ username: JSON.parse(localStorage.getItem('username')) })
  }

  render() {

    let role = JSON.parse(localStorage.getItem('role'));
    let authinticated = false;

    if(JSON.parse(localStorage.getItem('loggedIn')) === true) {
      if(this.props.history === undefined) {
        authinticated = true;
      } else if(this.props.history.location.pathname.startsWith(`/${role}`)) {
        authinticated = true;
      }
    }

    return (
      authinticated === true ? (
        <div className="sidebar-mini">
          <div className="wrapper">
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

              <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <label
                    className="nav-link"
                    data-widget="control-sidebar"
                    data-slide="true"
                    onClick={ () => {
                      localStorage.removeItem('loggedIn');
                      localStorage.removeItem('role');
                      localStorage.removeItem('username');
                      
                      this.props.history.push(`/${role}/login`);
                    } }
                    role="button"
                    style={{ cursor: 'pointer' }}
                  >
                    Log Out <i className="fa fa-sign-out-alt"></i>
                  </label>
                </li>
              </ul>
            </nav>

            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="info">
                    <a className="d-block" style={{ cursor: 'pointer' }}>
                      { this.state.username }
                    </a>
                  </div>
                </div>

                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                    style={{ height: "-webkit-fill-available" }}
                  >
                    <li className="nav-header">EXAMPLES</li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="nav-icon far fa-calendar-alt"></i>
                        <p>
                          Calendar
                          <span className="badge badge-info right">2</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-header">LABELS</li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="nav-icon far fa-circle text-danger"></i>
                        <p className="text">Important</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="nav-icon far fa-circle text-warning"></i>
                        <p>Warning</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="nav-icon far fa-circle text-info"></i>
                        <p>Informational</p>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Footer */}
            <Nav.Item as="footer" className="main-footer">
              <Nav.Item className="float-right d-none d-sm-block">
                <Nav.Item as="b">Stay </Nav.Item>
                Home,
                <Nav.Item as="b"> Stay </Nav.Item>
                Safe
              </Nav.Item>

              <Nav.Item as="strong">
                Fighting COVID-19 from home.
              </Nav.Item>
            </Nav.Item>

            <aside className="control-sidebar control-sidebar-dark"></aside>
          </div>
        </div>
      ) : (
        <Redirect to={`/${role}/dashboard`}/>
      )
    );
  }
}
