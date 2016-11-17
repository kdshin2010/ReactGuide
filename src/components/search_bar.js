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
    return <input onChange = {event => console.log(event.target.value)} />;
  }

}

//delcare event handler
//pass event handler to element you want to monitor event
export default SearchBar;
