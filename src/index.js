import _ from 'lodash';
import './style.css';

function component() {
  // create a div and initialize it to a variable
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash is now imported using top script.
  element.innerHTML = _.join(['Hello', 'Webpack'], ', ');

  // Add class to this element
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());