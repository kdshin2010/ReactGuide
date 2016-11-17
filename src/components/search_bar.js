import React, {Component} from 'react'; //React creates each element so we need to import React
//{Component} creates variable component from React Class


//only class based compnents have state!

class SearchBar extends Component {
  constructor(props) {
  	super(props);

  	this.state = { term: '' };

  }

  render() {
  	//always manipulate state with this.setState
    return  (
    	<div>
    		<input onChange = {event => this.setState({term: event.target.value})} />
    		Value of the input is {this.state.term}
    	</div>
  	);
  }

}

//state JS objects used to record user events
//each class based object has state object
export default SearchBar;
