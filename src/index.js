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
  button.innerHTML = "Click me and check the console for result!!";
  button.onclick = printMe;
  element.appendChild(button)

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
    document.body.removeChild(element);
    element = component(); // Re-render the 'component' to update the click handler
    document.body.appendChild(element);
  })
}