import React from 'react';
import './CompanyList.css';
import environment from '../../../environment';
import axios from 'axios';

class CompanyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let {base_url, api_path} = environment.company;
        let {service_name} = environment.company.controllers;
        let {register_company} = environment.company.controllers.api;

        let url = `${base_url}/${api_path}/${service_name}/${register_company}`;
        console.log(url)

    }

    render() {
        return (
            <div>
                I am a div
            </div>
        );
    }
}

export {
    CompanyList as default
}


