import React from 'react'; //assings React variable retrieved from react lib
import ReactDOM from 'react-dom' // library that renders the HTML

//Create a new component.
//This component should produce HTML
const App = function() {
  return <div>Hi</div>
} // this is a class not an instance

//Take component's generated HTML and put in the DOM
//instantiate component before rendering to the DOM

//need to pass an instance of APP and pass to React.render
//React Dom takes second argument container for our html (will be in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
