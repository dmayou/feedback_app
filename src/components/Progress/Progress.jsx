import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import './Progress.css';

class Progress extends Component {
    render() {
        return (
            <div className="progressHdr">
                <h3>Page 2 of 4</h3>
                <ProgressBar
                    style={ { width: '80%', margin: 'auto' }}
                    now={50}
                    />
                <p> </p>
            </div>
        );
    }
}

export default Progress;