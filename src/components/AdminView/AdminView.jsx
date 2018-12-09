import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flag, Delete } from '@material-ui/icons';
import Axios from 'axios';

class AdminView extends Component {
    componentDidMount() {
        this.getFeedback();
    }
    getFeedback() {
        Axios.get('/fb')
            .then((response) => {
                console.log('GET success');
                this.props.dispatch({ type: 'STORE_FB_LIST', payload: response.data });
            }).catch((err) => {
                console.log('GET error:', err);
            }
        );
    }
    handleCheckChange = (id, flagged) => {
        const newFlag = (flagged === false) ? 'TRUE' : 'FALSE';
        Axios.put(`/fb/flag/${id}`, {flagged: newFlag})
            .then((response) => {
                console.log('PUT success');
                this.getFeedback();
            }).catch((err) => {
                console.log('PUT error:', err);
            }
        );
    }
    handleDeleteClick = (id) => {
        Axios.delete(`/fb/${id}`)
            .then((response) => {
                console.log('DELETE success');
                this.getFeedback();
            }).catch((err) => {
                console.log('DELETE error:', err);
            }
        );
    }
    render() {
        const rows = this.props.store.feedbackList.map( (fb) => {
            return (
                <tr key={fb.id}>
                    <td><input 
                            type="checkbox"
                            checked={fb.flagged}
                            onChange={()=>this.handleCheckChange(fb.id, fb.flagged)} 
                        />
                    </td>
                    <td>{fb.feeling}</td>
                    <td>{fb.understanding}</td>
                    <td>{fb.support}</td>
                    <td>{fb.comments}</td>
                    <td><Delete onClick={()=>this.handleDeleteClick(fb.id)}/></td>
                </tr>
            );
        });
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