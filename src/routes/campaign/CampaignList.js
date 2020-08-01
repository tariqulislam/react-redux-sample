import React from 'react';
import Table from "react-bootstrap/Table";
import axios from "axios"
import {useHistory} from "react-router-dom"
class CampaignList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            campaigns: [],
            viewable: null,
        }
    }

    componentDidMount() {
        let url = "http://localhost:4000/api/campaigns"
        axios.get(url).then(result => {
            this.setState({campaigns: result.data.data})
        })
    }


    render() {
        return (
            <div className='main'>
            
                {
                    this.state.campaigns &&
                    this.state.campaigns.map((item, idx) => {
                        return (
                            <div style={{ background: "wheat", border: "1px solid"}} key={idx} class="media p-3 mb-2">
                              <span style={{width:"60px", padding: "10px"}} >
                              <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-newspaper" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 2A1.5 1.5 0 0 1 1.5.5h11A1.5 1.5 0 0 1 14 2v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 14V2zm1.5-.5A.5.5 0 0 0 1 2v12a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.5-.5h-11z"/>
  <path fill-rule="evenodd" d="M15.5 3a.5.5 0 0 1 .5.5V14a1.5 1.5 0 0 1-1.5 1.5h-3v-1h3a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/>
</svg>
                              </span>
                             
                               
                        
                            <div className="media-body">
                                <h5 className="mt-0">{item.recruiter}</h5>
                                <p>Position: {item.positionLevel}</p>
                                <p>Japanese Level: {item.japaneseLevel}</p>
                                <p>Salary Range: {item.startSalary} ~ {item.endSalary}</p>

                            </div>
                            <div><button className="btn btn-success" onClick={(e) => {
                                    this.props.history.push("/campaign/details", { campaign: item } );
                             
                                }}>Details</button></div>
                          </div>
                        )
                    })
                }
        </div>
        );
    }
}

export {
    CampaignList as default
}







