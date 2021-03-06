import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import Search from '/compiled/src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideoList: this.props.exampleVideoData,
      currentVideo: this.props.exampleVideoData[0]
    };
    this.setVideo = this.setVideo.bind(this);
  }

  setVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideoList} setVideo={this.setVideo}/>
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
