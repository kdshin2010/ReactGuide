import React, {Component} from 'react'; //React creates each element so we need to import React
//{Component} creates variable component from React Class

/* Refactor from functional component (below)
const SearchBar = () => {
  return <input /> //generate input
};

to
*/
class SearchBar extends Component { //enables our searchbar to access React.Component Class
  render() {
    return <input />;
  }
}

//export files to allow index.js to access this file
export default SearchBar;
