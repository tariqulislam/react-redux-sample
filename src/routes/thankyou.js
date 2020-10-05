import React from 'react'
import { withTranslation } from "react-i18next";


export class ThankYouPage extends React.Component {


    render() {
        const { t } = this.props
        return (
            <div class="jumbotron text-center">
                <h1 class="display-3">{t("thank-you-page.title")}</h1>
                <p class="lead">{t("thank-you-page.subtitle")}</p>
                <hr />
                    <p>
                    {t("thank-you-page.contact_link.title")}? <a href="/about-us"> {t("thank-you-page.contact_link.link")}</a>
                    </p>
                    <p class="lead">
                        <a class="btn btn-primary btn-sm" href="/"> {t("thank-you-page.button")}</a>
                    </p>
          </div>
        );
    }
}

export default withTranslation()(ThankYouPage)






