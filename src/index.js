import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyDGSHj-Y1RNjm9sW8Pn3PnnZHIA9jEsvJ0';



const App= () => {

  return (
    <div>
  <SearchBar />
  </div>
);
}


ReactDOM.render(<App />, document.querySelector('.container'));
