import React, {Component} from 'react'; //assings React variable retrieved from react lib
import ReactDOM from 'react-dom'; // library that renders the HTML
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


import SearchBar from './components/search_bar'; // when importing code, must give file reference

const API_KEY = 'AIzaSyAGifs7f6wj3lObS5hRz-FzrE4hFKZfFhY';


//Create a new component.
//This component should produce HTML

//ES6 function() { } === () => { }

//refactor class
class App extends Component {
	constructor(props) {
		super(props);


		this.state = { 
			videos: [],
			selectedVideo: null

		 };

		YTSearch({key: API_KEY, term: 'airplanes'}, (videos) =>{

			this.setState({
				videos: videos,
				selectedVideo: videos[0]

			}); // es6 shortened syntax
		
		});

	}
	//passing data from parent to child (App to Video)
	// define propertry in JSX tag videos={this.state.videos}
	 // thisis called passing props

	 //Pass another fucntion to 
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
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
