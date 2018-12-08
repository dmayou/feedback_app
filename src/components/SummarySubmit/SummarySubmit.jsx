import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './SummarySubmit.css';

class SummarySubmit extends Component {
    render() {
        return(
            <div>
                <h3>Your Feedback is:</h3>
                <p>Feelings: 2</p>
                <p>Understanding: 3</p>
                <p>Support: 2</p>
                <p>Comments: Everything's wonderful!</p>
                <Button
                    variant='outlined'
                    style={{ margin: 'auto',
                        marginBottom: '40px',
                        marginTop: '20px', 
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