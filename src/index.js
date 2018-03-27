import _ from 'lodash';
import './style.css';
import webpack_icon from './webpack-icon.svg';

function component() {
  // create a div and initialize it to a variable
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is now imported using top script.
  element.innerHTML = _.join(['Hello', 'Webpack'], ', ');

  // Add class to this existing div element
  element.classList.add('hello');

  // Adding image to this existing div element
  var icon = new Image();
  icon.src = webpack_icon;
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());