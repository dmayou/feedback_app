import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};

class RadioRating extends Component {
    state = {
        selectedValue: '',
    };
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
        this.props.dispatch({ type: 'RATING_CHANGE', payload: event.target.value });
    };
    render() {
        return (
            <div style={ { display: 'inline' } }>
                <Radio
                    checked={this.state.selectedValue === '1'}
                    onChange={this.handleChange}
                    value="1"
                    name="radio-button"
                    aria-label="1"
                    color="default"
                />
                <Radio
                    checked={this.state.selectedValue === '2'}
                    onChange={this.handleChange}
                    value="2"
                    name="radio-button"
                    aria-label="2"
                    color="default"
                />
                <Radio
                    checked={this.state.selectedValue === '3'}
                    onChange={this.handleChange}
                    value="3"
                    name="radio-button"
                    aria-label="3"
                    color="default"
                />
                <Radio
                    checked={this.state.selectedValue === '4'}
                    onChange={this.handleChange}
                    value="4"
                    color="default"
                    name="radio-button"
                    aria-label="4"
                />
                <Radio
                    checked={this.state.selectedValue === '5'}
                    onChange={this.handleChange}
                    value="5"
                    color="default"
                    name="radio-button"
                    aria-label="5"
                />
            </div>
        );
    }
}

RadioRating.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(RadioRating));