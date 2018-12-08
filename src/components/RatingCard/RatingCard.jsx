import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioRating from '../RadioRating/RadioRating';

import './RatingCard.css';

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
    handleClick = () => {
        const input = this.props.store.ratingInput;
        console.log('input:', input);
        if (input !== 0) {
            this.props.dispatch({ 
                type: 'NEW_INPUT', 
                payload: {
                    key: this.props.text.dataKey, 
                    value: input
                }
            });
            this.props.dispatch({ type: 'NEXT_PAGE' });
            this.props.history.push(this.props.text.nextPage);
        } else {
            alert('Please make a selection first.');
        }
    }
    render() {
        const { classes } = this.props;
        console.log('RatingCard props', this.props)
        return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {this.props.text.question}
                </Typography>
                <div>
                    <p className="pInline">{this.props.text.lowRange}</p>
                    <RadioRating />
                    <p className="pInline">{this.props.text.highRange}</p>
                </div>
            </CardContent>
            <CardActions>
                <Button
                    onClick={this.handleClick}
                    variant="outlined"
                    style={ {
                        margin: 'auto',
                        marginBottom: '40px',
                        fontSize: 16,
                        color: 'dimgray'
                        } }
                    size="large"
                    >Next
                </Button>
            </CardActions>
        </Card>
    );}
}

RatingCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStoreToProps = (store) => {
    return {store};
}

export default connect(mapStoreToProps)(withStyles(styles)(RatingCard));