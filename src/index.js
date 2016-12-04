import React, {Component} from 'react'; //assings React variable retrieved from react lib
import ReactDOM from 'react-dom'; // library that renders the HTML
import YTSearch from 'youtube-api-search';


import SearchBar from './components/search_bar'; // when importing code, must give file reference

const API_KEY = 'AIzaSyAGifs7f6wj3lObS5hRz-FzrE4hFKZfFhY';


//Create a new component.
//This component should produce HTML

//ES6 function() { } === () => { }

//refactor class
class App extends Component {
	constructor(props) {
		super(props);


		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
			this.setState({videos}); // es6 shortened syntax
		
		});

	}
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

//
//Take component's generated HTML and put in the DOM
//instantiate component before rendering to the DOM

//need to pass an instance of APP and pass to React.render
//React Dom takes second argument container for our html (will be in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
