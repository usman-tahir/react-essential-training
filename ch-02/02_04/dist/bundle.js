'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
};

render(React.createElement(
  'h1',
  { id: 'title', className: 'header', style: style },
  'hello world'
), document.getElementById('react-container'));
