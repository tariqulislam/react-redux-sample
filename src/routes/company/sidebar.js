import React from 'react'
import {withTranslation} from "react-i18next"
import {
    Link,
} from "react-router-dom"


export class SideBar extends React.Component {
   

    render() {
        const {t} = this.props
        return (
            <div style={{width: "15%", height: "70em"}} class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-light" to="/company/campaign/list">{t("side-menu.campaign-list")}</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/company/campaign/create">{t("side-menu.create-campaign")}</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/company/campaign/applied/list">{t("side-menu.applied_campaign")}</Link>
                <Link className="list-group-item list-group-item-action bg-light" to="/company/campaign/applied/list">{t("side-menu.company_profile")}</Link>
            </div>
        </div>
        );
    }
}

export default withTranslation()(SideBar)

