import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

class SwAlert extends Component {
    render() {
        return (
            <div>
                <SweetAlert
                    show={this.props.show}
                    title="Feedback Saved"
                    text="Thank you for your feedback!"
                    onConfirm={this.props.hideSaveConf}
                />
            </div>
        );
    }
}

export default SwAlert;