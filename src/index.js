function component() {
  // create a div and initialize it to a variable
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Webpack'], ', ');

  return element;
}

document.body.appendChild(component());