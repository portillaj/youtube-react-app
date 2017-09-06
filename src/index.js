import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

//Create a new component.  This component should produce
//some HTML
const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
);
}

//take this component's generate html and put it
//on thie page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
