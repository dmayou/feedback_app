import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './SummarySubmit.css';
import SwAlert from '../SweetAlert/SweetAlert';
import axios from 'axios';

class SummarySubmit extends Component {
    state = {
        showSaveConf: false
    }
    allInputsEntered() {
        const data = this.props.state.feedbackSubmission;
        return (data.feeling > 0
            && data.understanding > 0
            && data.support > 0
            && data.comments !== '' 
            && data.comments !== undefined
        );
    }
    handleClick = () => {
        console.log('clicked');
        axios.post('/fb', this.props.state.feedbackSubmission)
            .then( (response) => {
                console.log('POST success');
                this.setState({ showSaveConf: true});
                this.props.dispatch({type: 'RESET_INPUT'});
            }).catch( (err) => {
                console.log('POST error:', err);
            }
        );
    }
    hideSaveConf = () => {
        this.setState({ showSaveConf: false });
    }
    render() {
        const data = this.props.state.feedbackSubmission;
        console.log('data:', data);
        console.log('all inputs entered', this.allInputsEntered());
        return(
            <div>
                {this.allInputsEntered() && <h5 className="Notification"
                    >You've answered all the questions! Click Submit to save.
                </h5>}
                <Button
                    variant='outlined'
                    onClick={this.handleClick}
                    style={{
                        margin: 'auto',
                        marginBottom: '20px',
                        marginTop: '40px',
                        fontSize: 16,
                        color: 'gray'
                    }}
                    size="large"
                    disabled={!this.allInputsEntered()}
                >Submit
                </Button>
                <h3>Your Feedback is:</h3>
                <p>Feelings: {data.feeling}</p>
                <p>Understanding: {data.understanding}</p>
                <p>Support: {data.support}</p>
                <p>Comments: {data.comments}</p>
                <SwAlert 
                    show={this.state.showSaveConf}
                    hideSaveConf={this.hideSaveConf}
                />
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {state};
}

export default connect(mapStoreToProps)(SummarySubmit);