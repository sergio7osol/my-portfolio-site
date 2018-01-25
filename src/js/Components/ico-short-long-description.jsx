import React from 'react';

export class Ico_short_long_description extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className={`ico-short-long-desc ico-short-long-desc--${props.name}`}>
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fa fa-${props.name} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="service-heading">{props.heading}</h4>
                <p className="text-muted">{props.text}</p>
            </div>
        )
    }
}

