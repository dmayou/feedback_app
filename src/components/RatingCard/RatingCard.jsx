import React from 'react';
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

function RatingCard(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    How Are You Feeling Today?
                </Typography>
                <div>
                    <p className="pInline">Text to left</p>
                    <RadioRating />
                    <p className="pInline">Text to right</p>
                </div>
            </CardContent>
            <CardActions>
                <Button
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
    );
}

RatingCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RatingCard);