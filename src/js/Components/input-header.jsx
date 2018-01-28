import React from 'react';

const InputHeader = (props) => {
    return (
        <div>
            <input onChange={props.cb_fn} type="text" />
        </div>
    )
}

export default InputHeader;