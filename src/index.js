import React from 'react'
import ReactDom from 'react-dom'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.styl';
ReactDom.render(<Router><App /></Router>, document.getElementById("root"))