class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    }
    // this.options = {
    //   part: 'snippet',
    //   type: 'video',
    //   key: window.YOUTUBE_API_KEY,
    //   q: $('.form-control').val(),
    //   videoEmbeddable: 'true',
    //   maxResults: '5'
    // };
  }
  setQuery(query) {
    this.setState({
      query
    })
  }
  render () {
    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange= {(e) => this.setQuery(e.target.value)}/>
        <button className="btn hidden-sm-down" onClick= {() => this.props.handleSearch(this.state.query)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
