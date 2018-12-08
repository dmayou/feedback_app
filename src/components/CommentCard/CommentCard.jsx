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
import commentInput from '../../reducers/commentReducer';

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
        this.setState({comment: event.target.value});
    };
    handleClick = () => {
        this.props.dispatch({ type: 'COMMENT_CHANGE', payload: this.state.comment });
        this.setState( { comment: ''});
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

export default connect()(withStyles(styles)(RatingCard));