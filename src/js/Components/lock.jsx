import React from 'react';

class Lock extends React.Component {
    render() {
        return (
            <div className="ico-short-long-desc ico-short-long-desc--lock">
                <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="service-heading">Web Security</h4>
                <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni,
                    dicta impedit.
                </p>
            </div>
        )
    }
}

export default Lock;
