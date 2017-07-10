import React from 'react';
//used to create and manage compenents
import ReactDOM from 'react-dom';
//helps you interact with DOM
//find that library and assign it to the variable

// Create new compenent. This compenent should
//produce some HTML
const App = () => {
  return <div>Hi!</div>;
}
//const is a ES6 syntax
//() => is function now in ES6 - This is a fat arrow
//const is declaring a variable - this is the final value for this variable
// because it's never going to change



//Take this compenent's generated HTML and put it on the page (in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));
//render compenent App amd then render it to this element that already exists.
