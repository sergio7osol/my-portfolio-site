import React from 'react';
import PropTypes from 'prop-types';
import InputHeader from './input-header.jsx';

class WrExampleComp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            header: props.initState
        }
    }
    watchInput(event) {
        this.setState({
            header: event.target.value
        });
    }
    render(){
        return (
            <article>
                <h3>{this.state.header}</h3>
                <InputHeader cb_fn={this.watchInput.bind(this)} />
            </article>
        );
    }
};

WrExampleComp.propTypes = {
    initState: PropTypes.string
};

export default WrExampleComp;