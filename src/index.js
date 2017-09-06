import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component.  This component should produce
//some HTML
const App = () => { return <div>Hi!</div> };

//take this component's generate html and put it
//on thie page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
