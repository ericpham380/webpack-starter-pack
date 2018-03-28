import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import webpack_icon from './components/homepage/webpack-icon.svg';
import data from './components/homepage/data.xml';

// function to create component and append to body
function component() {
  // create a div and initialize it to a variable
  var element = document.createElement('div');
  var button = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is now imported using top script.
  element.innerHTML = _.join(['Hello', 'Webpack'], ', ');

  // Add class to this existing div element
  element.classList.add('hello');

  // Adding image to this existing div element
  var icon = new Image();
  icon.src = webpack_icon;
  element.appendChild(icon);

  // Adding data and console.log
  console.log(data);

  // Configure the button and call printMe function when clicked.
  button.innerHTML = "Click me and check the console for result!";
  button.onclick = printMe;
  element.appendChild(button)

  return element;
}

// Append the component to body
document.body.appendChild(component());