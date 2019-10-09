import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import themeObj from './themeObj';

const theme = createMuiTheme(themeObj);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// UGLY!! This is to enable modifying the url without refreshing the page

// window.history.pushState({
//   "html": document.getElementById("root").innerHTML,
//   "pageTitle": document.title
// },"", "/");

// window.onpopstate = function(e){
//   if(e.state){
//       document.getElementById("root").innerHTML = e.state.html;
//       document.title = e.state.pageTitle;
//   }
// };