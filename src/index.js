import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAX-BBg9D4Zz5iDgjGuviEIMcsShqVgFmQ';

//Create a new component.  This component should produce
//some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = { videos: [] }

    YTSearch({key: API_KEY, term: 'soulchef'}, (videos) => {
      this.setState({ videos });
      //same as this.state({videos: videos});
    });

  }
  render() {
    return (
      <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]}/>
      <VideoList  videos={this.state.videos}/>
    </div>
  );
  }
}

//take this component's generate html and put it
//on thie page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
