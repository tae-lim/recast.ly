class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: null,
      videoList : window.exampleVideoData
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.clicked? this.state.clicked : this.state.videoList[0]} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onListItemClick={this.onListItemClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

  handleSearch (q) {
    var options = {
      part: 'snippet',
      type: 'video',
      key: window.YOUTUBE_API_KEY,
      q: q,
      videoEmbeddable: 'true',
      maxResults: '5'
    };

      this.props.searchYouTube(options, (rawSearchResults) => {
      this.setState({videoList: rawSearchResults.items, clicked: rawSearchResults.items[0]});
    })
  }

  onListItemClick (clickedVideo) {
    this.setState({
      clicked: clickedVideo
    });
  }


}


// {this.state.clicked? <VideoPlayer video={this.state.clicked}/> : <VideoPlayer video={window.exampleVideoData[0]}/>}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
