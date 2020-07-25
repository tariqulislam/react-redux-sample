import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Button, Container, ListGroupItem, Navbar, Row} from 'react-bootstrap'

import CampaignAdmin from '../campaign/Campaign';
import CandidateList from '../admin/candidate/component/candidateList';
import CampaignList from '../admin/campaign/CampaignList';

import './admin.css';
import Alert from "react-bootstrap/Alert";


export class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.sideBarRef = React.createRef();
        this.mainRef = React.createRef();

        this.state = {};
    }

    componentDidMount() {
        this.setState({
            viewable: <CandidateList callBackToParentElement={this.callBackToParentElement}/>
        })
    }

    closeNav = () => {
        // this.sideBarRef.current.transform = "translateX(200px)";
        console.log(this.sideBarRef.current.transform);


        // this.sideBarRef.current.style.minWidth = "0 !important";
        this.sideBarRef.current.style.width = "0";
        // this.mainRef.current.style.marginLeft = "0px";

    };

    openNav = () => {
        console.log(this.sideBarRef)
        // this.sideBarRef.current.style.minWidth = "15% !important";
        // this.sideBarRef.current.style.width = "";
        // this.mainRef.current.style.marginLeft = "250px";
    };

    getLeftItem = (name, stateAttrib) => {
        return (
            <Alert
                variant='dark'
                className='left-item'
            >
                <Alert.Link
                    href="#"
                    onClick={() => {
                        this.setState({
                            viewable: stateAttrib
                        })
                    }}
                >
                    {name}
                </Alert.Link>
            </Alert>
        );
    };

    callBackToParentElement = (comp) => {
        this.setState({
            viewable: comp
        })
    };

    render() {
        // return (
        //     <div id="wrapper" className="active">
        //         {/*Sidebar*/}
        //         {/*Sidebar*/}
        //         <div id="sidebar-wrapper">
        //             <ul id="sidebar_menu" className="sidebar-nav">
        //                 <li className="sidebar-brand"><a id="menu-toggle" href="#">Options<span id="main_icon"
        //                                                                                      className="glyphicon glyphicon-align-justify"></span></a>
        //                 </li>
        //             </ul>
        //             <ul className="sidebar-nav" id="sidebar">
        //                 <li><a>Hi<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
        //                 <li><a>Link1<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
        //                 <li><a>link2<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
        //             </ul>
        //         </div>
        //
        //         {/*Page content*/}
        //         <div id="page-content-wrapper">
        //             {/*Keep all page content within the page-content inset div!*/}
        //             <div className="page-content inset">
        //                 <div className="row">
        //                     <div className="col-md-12">
        //                         <CampaignAdmin/>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //
        //     </div>
        // );

        /*-------------------------------------------------------*/
        /* Inspiration: http://jsbin.com/qusudim/edit?css,output */
        /*-------------------------------------------------------*/

        return (
            <div className='admin-view'>
                <div className='admin-view-bottom'>
                    <div ref={this.sideBarRef} id="left" className="column-left">
                        {/*<div className="top-left">Top Left</div>*/}
                        <div className="bottom">
                            {this.getLeftItem('Candidate List', <CandidateList callBackToParentElement={this.callBackToParentElement}/>)}
                            {this.getLeftItem('Campaign List', <CampaignList callBackToParentElement={this.callBackToParentElement}/>)}
                        </div>
                    </div>
                    <div id="right" className="column-right">
                        <div className="bottom">

                            <div className='content'>
                                {this.state.viewable}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboard