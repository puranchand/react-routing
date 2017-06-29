import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Home from './components/Home.js'
import App from './components/App.js'
import About from './components/About.js'
import Contact from './components/Contact.js'


ReactDOM.render((
	<MuiThemeProvider>
    
  
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	</MuiThemeProvider>
), document.getElementById('app'))