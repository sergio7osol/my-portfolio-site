import $ from 'jquery';
require('jquery.easing');
require('popper.js/dist/umd/popper');
import bootstrap from 'bootstrap';

import style from '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import Skills from './Components/skills-container.jsx';
// import SwitchFontSize from './Components/switch-font-size.jsx';
// import WrExampleComp from './Components/wr-example-comp.jsx';
// import InputBlock from './Components/input-block.jsx';

const mathReducer = (state =  {  
    result: null,
    lastValues: [],
    userName: "Sergio"
}, action) => {
    switch (action.type) {
        case "ADD": 
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT": 
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};
const userReducer = (state =  {  
    name: "Sergio",
    age: 36
}, action) => {
    switch (action.type) {
        case "SET_NAME": 
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE": 
            state = {
                ...state,
                age: action.payload
            }
            break;
    }
    return state;
};

// const myLogger = (store) => { 
//     return (next) => { 
//         return (action) => {
//             console.log("Logged action: ", action);
//             next(action);
//         };
//     }
// } // middleware structure

const store = createStore(combineReducers({ mathReducer, userReducer }), {}, applyMiddleware(logger));

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
