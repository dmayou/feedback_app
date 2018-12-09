import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class AdminView extends Component {
    componentDidMount() {
        Axios.get('/fb')
            .then((response) => {
                console.log('GET success');
                this.props.dispatch({ type: 'STORE_FB_LIST', payload: response.data });
            }).catch((err) => {
                console.log('GET error:', err);
            }
        );
    }
    render() {
        return (
            <div>
                <p>welcome to admin view</p>
                <p>{JSON.stringify(this.props.store.feedbackList)}</p>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {store};
}

export default connect(mapStoreToProps)(AdminView);