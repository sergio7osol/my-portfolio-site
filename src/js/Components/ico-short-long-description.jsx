import React from 'react';
import PropTypes from 'prop-types';

class Ico_short_long_description extends React.Component {
    render() {
        return (
            <div className={`ico-short-long-desc ico-short-long-desc--${this.props.name}`}>
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fa fa-${this.props.name} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="service-heading">{this.props.heading}</h4>
                <p className="text-muted">{this.props.text}</p>
            </div>
        )
    }
}

Ico_short_long_description.propTypes = {
    name: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
};

export default Ico_short_long_description;