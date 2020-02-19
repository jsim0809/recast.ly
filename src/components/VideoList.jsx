import VideoListEntry from '/compiled/src/components/VideoListEntry.js';

// var VideoList = (props) => (

//   <div className="video-list">
//     <VideoListEntry video={props.videos[0]} />
//     <VideoListEntry video={props.videos[1]} />
//     <VideoListEntry video={props.videos[2]} />
//     <VideoListEntry video={props.videos[3]} />
//     <VideoListEntry video={props.videos[4]} />
//   </div>
// );

var VideoList(props) {
  const videos = props.videos;
  const listItems = videos.map((video) =>
    <VideoListEntry video={video} />
  );

  return (
    <div className="video-list">
      {listItems}
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
