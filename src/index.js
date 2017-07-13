import _ from 'lodash'
import React, { Component } from 'react';
//used to create and manage compenents
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

onst API_KEY = '[add api key here]';

//helps you interact with DOM
//find that library and assign it to the variable

// Create new compenent. This compenent should
//produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state =  {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }



  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>  {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]});
      // this.setState({ videos: videos });
    });
    }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//const is a ES6 syntax
//() => is function now in ES6 - This is a fat arrow
//const is declaring a variable - this is the final value for this variable
// because it's never going to change

//Take this compenent's generated HTML and put it on the page (in the DOM )
ReactDOM.render(<App />, document.querySelector('.container'));
//render compenent App amd then render it to this element that already exists.
