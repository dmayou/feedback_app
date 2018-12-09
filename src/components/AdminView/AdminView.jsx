import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flag, Delete } from '@material-ui/icons';
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
        const rows = this.props.store.feedbackList.map( (fb, i) => {
            return (
                <tr key={i}>
                    <td><input type="checkbox" /></td>
                    <td>{fb.feeling}</td>
                    <td>{fb.understanding}</td>
                    <td>{fb.support}</td>
                    <td>{fb.comments}</td>
                    <td><Delete /></td>
                </tr>
            );
        })
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr><td><Flag /></td><td>Feelings</td><td>Understanding</td><td>Support</td><td>Comments</td><td>Delete</td></tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStoreToProps = (store) => {
    return {store};
}

export default connect(mapStoreToProps)(AdminView);