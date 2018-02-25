import React from 'react';
import PropTypes from 'prop-types';

class InputBlock extends React.Component {
    render() {
        return (
            <div className="input-wrapper">
                <input props type="text" />
            </div>
        );
    }
};

InputBlock.propTypes = {
    initValue: string
};

export default InputBlock;