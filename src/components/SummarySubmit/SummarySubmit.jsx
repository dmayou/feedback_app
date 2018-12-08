import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './SummarySubmit.css';

class SummarySubmit extends Component {
    render() {
        return(
            <div>
                <h3>Your Feedback is:</h3>
                <p>First question: 2</p>
                <p>Second question: 3</p>
                <p>Third question: 2</p>
                <p>Last question: Everything's wonderful!</p>
                <Button
                    variant='outlined'
                    style={{ margin: 'auto',
                        marginBottom: '40px', 
                        fontSize: 16, 
                        color: 'gray' }} 
                        size="large" 
                    disabled
                    >Incomplete
                </Button>
            </div>
        );
    }
}

export default SummarySubmit;