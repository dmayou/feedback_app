import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './CommentCard.css';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
    },
    title: {
        fontSize: 26,
    },
    pos: {
        marginBottom: 12,
    },
};
class RatingCard extends Component {
    state = {
        comment: ''
    }
    handleChange = event => {
        this.setState({ comment: event.target.value });
    };
    handleClick = () => {
        // Save comment in reducer
        this.props.dispatch({
            type: 'NEW_INPUT',
            payload: {
                key: 'comments',
                value: this.state.comment
            }
        });
        // Clear client input
        this.setState({ comment: '' });
        // Update reducer used for progress bar
        this.props.dispatch({ type: 'NEXT_PAGE' });
        // Route back to first page
        this.props.history.push('/');
    }
    componentDidMount() {
        // display current comment in textarea
        this.setState({ comment: this.props.store.feedbackSubmission.comments });
    }
    render() {
        return (
            <Card className={this.props.card}>
                <CardContent>
                    <Typography 
                        className={this.props.classes.title} 
                        color="textSecondary" 
                        gutterBottom>
                        Any Comments you want to leave?
                    </Typography>
                    <div>
                        <textarea 
                            onChange={this.handleChange}
                            value={this.state.comment} 
                            className="commentInput" 
                            type="text">
                        </textarea>  
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={this.handleClick}
                        style={{
                            margin: 'auto',
                            marginBottom: '40px',
                            fontSize: 16,
                            color: 'dimgray'
                        }}
                        size="large"
                    >Next
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

RatingCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapPropsToState = (store) => {
    return {store};
}

export default connect(mapPropsToState)(withStyles(styles)(RatingCard));