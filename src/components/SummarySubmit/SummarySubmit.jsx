import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './SummarySubmit.css';

class SummarySubmit extends Component {
    render() {
        const data = this.props.state.feedbackSubmission;
        return(
            <div>
                <Button
                    variant='outlined'
                    style={{
                        margin: 'auto',
                        marginBottom: '20px',
                        marginTop: '40px',
                        fontSize: 16,
                        color: 'gray'
                    }}
                    size="large"
                    disabled
                >Incomplete
                </Button>
                <h3>Your Feedback is:</h3>
                <p>Feelings: {data.feeling}</p>
                <p>Understanding: {data.understanding}</p>
                <p>Support: {data.support}</p>
                <p>Comments: Everything's wonderful!</p>
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {state};
}

export default connect(mapStoreToProps)(SummarySubmit);