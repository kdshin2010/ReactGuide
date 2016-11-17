import React, {Component} from 'react'; //React creates each element so we need to import React
//{Component} creates variable component from React Class


//only class based compnents have state!

class SearchBar extends Component {
  constructor(props) {
  	super(props);

  	this.state = { term: '' };

  }

  render() {
    return <input onChange = {event => console.log(event.target.value)} />;
  }

}

//state JS objects used to record user events
//each class based object has state object
export default SearchBar;
