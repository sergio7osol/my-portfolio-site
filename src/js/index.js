import $ from 'jquery';
require('jquery.easing');
require('popper.js/dist/umd/popper');
import bootstrap from 'bootstrap';
import siteBase from './partials/site-base';

import style from '../scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { Skills } from './Components/skills-container.jsx';


render(<Skills/>, document.querySelector(".skills-container-Placeholder"));