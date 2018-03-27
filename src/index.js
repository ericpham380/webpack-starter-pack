import _ from 'lodash';
import printMe from './print.js';

function component() {
  // create a div and initialize it to a variable
  var element = document.createElement('div');
  var button = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is now imported using top script.
  element.innerHTML = _.join(['Hello', 'Webpack'], ', ');

  // Configure the button and call printMe function when clicked.
  button.innerHTML = "Click me and check the console!";
  button.onclick = printMe;
  element.appendChild(button)

  return element;
}

document.body.appendChild(component());