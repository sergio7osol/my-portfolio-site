import React from 'react';
import PropTypes from 'prop-types';

const InputHeader = (props) => {
    return (
        <div>
            <input onChange={props.cb_fn} type="text" />
        </div>
    )
}

InputHeader.propTypes = {
    cb_fn: PropTypes.func
};

export default InputHeader;