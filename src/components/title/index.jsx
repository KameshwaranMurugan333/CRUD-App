import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <span>{this.props.subTitle}</span>
            </>
        );
    }
}

Title.defaultProps = {
    subTitle: "Please fill the below form"
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
};

export { Title };