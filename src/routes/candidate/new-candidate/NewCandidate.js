import React, {Component} from 'react';
import {Table, Button, NavLink, Accordion, Card} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const NewCandidate = (props) => {
    let {
        candidateWorkExperiences,
        desiredJobs,
        languages,
        acceptTermsAndCondition,
        birthMonth,
        birthYear,
        birthday,
        candidate,
        chronicDisease,
        country,
        currentLocation,
        currentSituation,
        currentSituationOption,
        eyeSight,
        facebookUrl,
        footSize,
        footSizeUnit,
        gender,
        hearing,
        height,
        heightUnit,
        japaneseLanguageSkill,
        maritalStatus,
        nationality,
        nickName,
        phoneNumber,
        religion,
        retypedPassword,
        romajiName,
        selectedStatus,
        specificSkill,
        specificSkillOption,
        status,
        weight,
        weightUnit
    } = props.location.state;

    return (
        <div style={{padding: '5%'}}>
            <Table striped bordered hover responsive="sm" size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {
                    romajiName &&
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>{romajiName}</td>
                    </tr>
                }
                {
                    birthday && birthMonth && birthYear &&
                    <tr>
                        <td>#</td>
                        <td>Date of birth</td>
                        <td>{birthday}/{birthMonth}/{birthYear}</td>
                    </tr>
                }
                {
                    candidate &&
                    <tr>
                        <td>#</td>
                        <td>Chronic Disease</td>
                        <td>{chronicDisease}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Country</td>
                        <td>{country}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Current Location</td>
                        <td>{currentLocation}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Current Situation</td>
                        <td>{currentSituation}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Current Situation</td>
                        <td>{currentSituationOption}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Eye Sight</td>
                        <td>{eyeSight}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Facebook URL</td>
                        <td>
                            <NavLink href={facebookUrl} style={{paddingLeft: '0px'}}>
                                {facebookUrl}
                            </NavLink>
                        </td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Foot Size</td>
                        <td>{footSize} {footSizeUnit}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Height</td>
                        <td>{height} {heightUnit}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Marital Status</td>
                        <td>{maritalStatus}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Nationality</td>
                        <td>{nationality}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Nickname</td>
                        <td>{nickName}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Phone Number</td>
                        <td>{phoneNumber}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Religion</td>
                        <td>{religion}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Status</td>
                        <td>{status ? 'True' : 'False'}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Hearing</td>
                        <td>{hearing}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Japanese Language Skill</td>
                        <td>{japaneseLanguageSkill}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Selected Status</td>
                        <td>{selectedStatus}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Specific Skill</td>
                        <td>{specificSkill}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Specific Skill Option</td>
                        <td>{specificSkillOption}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Weight</td>
                        <td>{weight} {weightUnit}</td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td>Terms and Conditions</td>
                        <td>{acceptTermsAndCondition ? 'Accepted' : 'Rejected'}</td>
                    </tr>
                }
                {
                    /*
                    *
                    * Commenting out this password value.
                    * I think it's unnecessary to show it. User just got redirected from the registration page.
                    *
                    * - Shamin Asfaq
                    * */
                    // <tr>
                    //     <td>#</td>
                    //     <td>Retyped Password</td>
                    //     <td>{retypedPassword}</td>
                    // </tr>
                }

                {
                    candidateWorkExperiences.length &&
                    <tr>
                        <td>#</td>
                        <td>Candidate Work Experience</td>
                        <td>
                            {candidateWorkExperiences.map((exp) => {
                                return (
                                    <Accordion key={uuidv4()}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                                {exp.companyName}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>{exp.name}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                );
                            })}
                        </td>
                    </tr>
                }

                {
                    desiredJobs.length &&
                    <tr>
                        <td>#</td>
                        <td>Desired Jobs</td>
                        <td>{
                            desiredJobs.map((job) => {
                                return (
                                    <Accordion key={uuidv4()}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                                {job.description}
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    {job.name}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                );
                            })
                        }
                        </td>
                    </tr>
                }
                {
                    languages.length &&
                    <tr>
                        <td>#</td>
                        <td>Languages</td>
                        <td>{
                            languages.map((item) => {
                                return (
                                    <Accordion key={uuidv4()}>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                {item.name}
                                            </Accordion.Toggle>
                                        </Card>
                                    </Accordion>
                                );
                            })
                        }
                        </td>
                    </tr>
                }
                {
                    <tr>
                        <td>#</td>
                        <td></td>
                        <td>
                            <Button
                                variant="primary" size="lg" block
                                onClick={() => {
                                    window.location.href = '/candidate/login'
                                }}
                            >
                                Proceed
                            </Button>
                        </td>
                    </tr>
                }
                </tbody>
            </Table>
        </div>
    );
};

export {
    NewCandidate as default,
}



