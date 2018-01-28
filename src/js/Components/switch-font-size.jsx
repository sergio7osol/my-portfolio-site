import React from 'react';
import PropTypes from 'prop-types';

class SwitchFontSize extends React.Component {
    constructor(props) {
        super();
        this.increase = props.increase || false;
        this.state = {
            size: props.initSize
        }
    }
    increaseSize(){
        this.setState({
            size: this.state.size + 3
        });
        console.log("size: ", this.state.size);
    }
    decreaseSize(){
        this.setState({
            size: this.state.size - 3
        });
        console.log("size: ", this.size);
    }

    render(){
        return (
            <div className="change-font-size" style={{position: "absolute", top: "100px", right: "0"}}>
                <h3>Increase/Decrease font size</h3>
                <button onClick={ this.increase ? this.increaseSize.bind(this) : this.decreaseSize.bind(this) } className="btn btn-default" style={{fontSize: this.state.size + "px"}}>Increase</button>
            </div>
        );
    }
}

SwitchFontSize.propTypes = {
    name: PropTypes.number,
    increase: PropTypes.bool,
};

export default SwitchFontSize;