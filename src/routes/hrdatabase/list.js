
import React, { Component } from "react";
import { Media } from "react-bootstrap"
import { withTranslation } from "react-i18next";
import manImg from "./man.png"
import environment from "../../environment.json"
import axios from "axios"
import { connect } from "react-redux"

class HrdatabaseView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            genders: []
        }
    }

    componentDidMount() {
        let url = `http://${environment.api_url}/api/candidates`;

        axios.get(url).then((response) => {
            this.setState({
                data: response.data.data
            });
        });

    }

    render() {
        const { t } = this.props
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-8">
                        {
                            this.state.data &&
                            this.state.data.map((item, index) => {
                                return (
                                    <Media className="border p-3 mt-2">
                                        <img
                                            width={64}
                                            height={64}
                                            className="mr-3"
                                            src={manImg}
                                            alt="no image"
                                        />
                                        <Media.Body>
                                            <h5>{item.candidate && item.candidate.name}<img src={environment.host_url + (item.country && item.country.flag_url && item.country.flag_url)} width={40} height={30} className="mr-3 ml-3" alt="country image" /></h5>
                                            <div className="d-flex float-right">
                                                <a href="/company/login" className="btn btn-warning btn-sm mr-1">{t("hr-database.button.applicant_info")}</a>
                                                <a href="/about-us" className="btn btn-success btn-sm">{t("hr-database.button.company_info")}</a>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div className="row pt-3">
                                                <div className="col-sm">{t("hr-database.weight")}: {item.weight}{item.weightUnit}</div>
                                                <div className="col-sm">{t("hr-database.height")}: {item.height}{item.heightUnit}</div>
                                                <div className="col-sm">{t("hr-database.date_of_birth")}: {item.birthYear}/{item.birthMonth}/{item.birthday}</div>
                                                <div className="col-sm">{t("hr-database.expert_in")} {item.specificSkills}: {item.specificSkillsOption}</div>
                                            </div>
                                            <div className="row pt-4 pl-3">
                                                <h6>{t("hr-database.language_proficency")}:</h6>
                                            </div>
                                            <div className="row pt-2">
                                                <div className="col-sm">{t("hr-database.japanese_language")}: {item.japaneseLanguageSkill}</div>
                                                <div className="col-sm">{t("hr-database.english_language")}: {item.englishLanguageSkill}</div>
                                            </div>
                                        </Media.Body>
                                    </Media>

                                )
                            })
                        }

                    </div>
                    <div className="col-4 border">
                        <div className="row">
                            <div className="col-12  bg-light border"><h4 className="m-1">{t("hr-database.search.title")}</h4></div>
                            <div className="col-12">
                                <h6 className="pt-2">{t("hr-database.search.search_by_country")}</h6>
                                <div className="mt-2">
                                    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                                        {this.props.filteredCountries &&
                                            this.props.filteredCountries.map((item, index) => {
                                                return (
                                                    <li><input value={item.value} type="checkbox" />&nbsp;{item.text}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    filteredCountries: state.candidate.filteredCountries,
    countries: state.candidate.countries
});

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(HrdatabaseView))