import React from 'react'
import { withTranslation } from "react-i18next";


export class SideBar extends React.Component {


    render() {
        const { t } = this.props
        return (
            <div class="jumbotron text-center">
                <h1 class="display-3">Thank You For Applying!</h1>
                <p class="lead"><strong>We will  email for</strong> for further instructions on how to complete your procedure.</p>
                <hr />
                    <p>
                        Having trouble? <a href="">Contact us</a>
                    </p>
                    <p class="lead">
                        <a class="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                    </p>
          </div>
        );
    }
}

export default withTranslation()(SideBar)






