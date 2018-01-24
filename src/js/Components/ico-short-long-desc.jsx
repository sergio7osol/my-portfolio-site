import React from 'react';

class IcoShortLongDescription extends React.Component {
    render() {
        return (
            <div className="ico-short-long-desc ico-short-long-desc--shopping-cart">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Interactive Web-based UI 1</h4>
                <p className="text-muted">Like dashboards and the likes.</p>
            </div>
        )
    }
}

export default IcoShortLongDescription;
