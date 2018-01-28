import React from 'react';
import InputHeader from './input-header.jsx';

class WrExampleComp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            header: "First title"
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

export default WrExampleComp;