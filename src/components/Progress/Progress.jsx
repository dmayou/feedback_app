import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import './Progress.css';

class Progress extends Component {
    render() {
        const maxPages = 4; // app has 4 revolving pages
        const {step} = this.props;
        return (
            <div className="progressHdr">
                <h3>Page {step} of {maxPages}</h3>
                <ProgressBar
                    style={ { width: '80%', margin: 'auto' }}
                    now={step * 100 / maxPages}
                    />
                <p> </p>
            </div>
        );
    }
}

export default Progress;