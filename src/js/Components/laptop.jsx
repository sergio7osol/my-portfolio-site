import React from 'react';

class Laptop extends React.Component {
    render() {
        return (
            <div className="ico-short-long-desc ico-short-long-desc--laptop">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading"></h4>
                <p className="text-muted">
                     Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                </p>
            </div>
        )
    }
}

export default Laptop;
