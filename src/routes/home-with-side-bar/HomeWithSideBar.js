import React, { Component } from 'react';
import SideBar from '../side-bar/SideBar';

class HomeWithSideBar extends Component {
    render() {
        return (
            <div>
                <SideBar/>
            </div>
        );
    }
}

export {
    HomeWithSideBar as default
}
