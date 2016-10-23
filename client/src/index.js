var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');

window.onload = function(){
  ReactDOM.render(
    <Game title="Guess Who" rules="Select from the dropdown menu and click to elimate characters from the board" depositAmount={0.5} />,
    document.getElementById('app')
  );
}
