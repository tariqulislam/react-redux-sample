import React from 'react'
import {connect} from 'react-redux'
import {saveCampaign} from '../../../../reducers/Campaign/campain.reducer'

export class Campaign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            details: ''
        }
    }

    onInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmitCampainForm = (e) => {
        debugger
        const {onSubmitCampainFormMain} = this.props
        onSubmitCampainFormMain(this.state);
        e.preventDefault()

    }

    render() {
        const {successMsg} = this.props
        console.log('this is success msg', successMsg)
        return (
            <div className="container">
                <form onSubmit={this.onSubmitCampainForm}>
                   <div className="form-group">
                       <label>Name</label>
                       <input type="text" onChange={this.onInputChange} name="name" className="form-control" />
                   </div>
                   <div className="form-group">
                       <label>Details</label>
                       <input type="text" onChange={this.onInputChange} name="details" className="form-control" />
                   </div>
                   <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-success" />
                   </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   successMsg: state.campaign.successMsg
})

const mapDispatchToProps = dispatch => {
    return {
        onSubmitCampainFormMain: (formData) => dispatch(saveCampaign(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campaign)