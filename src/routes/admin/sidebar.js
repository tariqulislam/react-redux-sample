import React from 'react'
import {withTranslation} from "react-i18next";
import {
    Link,
} from "react-router-dom"

import './admin.css';


export class SideBar extends React.Component {
   

    render() {
        const {t} = this.props
        return (
            <div style={{width: "15%", height: "70em"}} class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/candidate/list">{t("side-menu.candidate-list")}</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/campaign/list">{t("side-menu.campaign-list")}</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/admin/company/list">{t("side-menu.company-list")}</Link>
            </div>
        </div>
        );
    }
}

export default withTranslation()(SideBar)

