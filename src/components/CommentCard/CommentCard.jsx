import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
const handleChange = name => event => {
    this.setState({
        [name]: event.target.value,
    });
};
// function RatingCard(props) {
class RatingCard extends Component {
    render() {
        return (
            <Card className={this.props.card}>
                <CardContent>
                    <Typography className={this.props.classes.title} color="textSecondary" gutterBottom>
                        How Are You Feeling Today?
                    </Typography>
                    <div>
                    <textarea className="commentInput" type="text"></textarea>  
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
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

export default withStyles(styles)(RatingCard);