import $ from 'jquery';
require('jquery.easing');
require('popper.js/dist/umd/popper');
import bootstrap from 'bootstrap';

import style from '../scss/main.scss';

import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';

import Skills from './Components/skills-container.jsx';
// import SwitchFontSize from './Components/switch-font-size.jsx';
// import WrExampleComp from './Components/wr-example-comp.jsx';
// import InputBlock from './Components/input-block.jsx';


const initState = {  
    result: null,
    allValues: [],
    userName: "Sergio"
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD": 
            state = {
                ...state,
                result: state.result + action.payload,
                allValues: [...state.allValues, action.payload]
            }
            break;
        case "SUBTRACT": 
            state = {
                ...state,
                result: state.result - action.payload,
                allValues: [...state.allValues, action.payload]
            }
            break;
    }
    return state;
};

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated: ", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 90
});
store.dispatch({
    type: "SUBTRACT",
    payload: 15
});

// render(<SwitchFontSize initSize={16} increase={true} />, document.querySelector(".page-wrapper"));
render(<Skills />, document.querySelector(".skills-container-Placeholder"));
// render(<InputBlock initValue="" />, document.querySelector("#here"));

function ran(num){  
    var d = new Date().getTime();
    console.log("d: ", d);
    var res = d%num + 1;
    return res;
}
