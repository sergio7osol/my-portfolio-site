import $ from 'jquery';
require('jquery.easing');
require('popper.js/dist/umd/popper');
import bootstrap from 'bootstrap';

import style from '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import Skills from './Components/skills-container.jsx';
// import SwitchFontSize from './Components/switch-font-size.jsx';
import WrExampleComp from './Components/wr-example-comp.jsx';


// render(<SwitchFontSize initSize={16} increase={true} />, document.querySelector(".page-wrapper"));
render(<Skills />, document.querySelector(".skills-container-Placeholder"));
render(<WrExampleComp />, document.querySelector("#here"));