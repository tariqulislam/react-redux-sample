import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';


class NewCandidate extends Component {

    constructor(props) {
        super(props);
        state: {}
    }


    singlePair = (pair) => {
        return (
            <tr>
                <td>{ pair[0].replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase() }:</td>
                {
                    (typeof pair[1]) === 'object' ? 
                    <>
                        {
                            pair[1].length === undefined ? 
                                <>{
                                    Object.entries(pair[1]).map(attrib => {
                                        return (
                                            <>
                                                <td>
                                                    { attrib[0].replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase() }:
                                                </td>
                                                <td>
                                                    { attrib[1] }
                                                </td>
                                            </>
                                        )
                                    })
                                }
                                </> :
                                <>
                                {
                                    pair[1].map(attrib => {
                                        attrib = Object.entries(attrib);
                                        let key = attrib[0].toString().split(',')
                                        return (
                                            <>
                                                <td>
                                                    { key[0].replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase() }:
                                                </td>
                                                <td>
                                                    { key[1] }
                                                </td>
                                            </>
                                        )
                                    })
                                }
                                </>
                        }
                    </>  :
                    <td>
                        { pair[1].toString() }
                    </td>
                }
            </tr>
        )
    }

    keyValuePair = () => {
        let object = Object.entries(this.props.history.location.state.payload);
        let list = object.map(item => {
            return this.singlePair(item);
        })
        return (list);
    }

    render() {
        console.log(this.props)
        this.keyValuePair();
        return (
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>New Candidate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.keyValuePair()
                    }
                    <tr>
                        <td></td>
                        <td>
                        <Button onClick={() => {
                            this.props.history.push('/candidate/login')
                        }} variant="primary">
                            Proceed
                        </Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export {
    NewCandidate as default
}



