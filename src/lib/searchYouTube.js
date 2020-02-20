var searchYouTube = (options, callback) => {
  // send an AJAX GET request to Youtube.
  // Things we need to tell Youtube:
  // query
  // max
  // key
  // embeddable only
  // callback
  // call the callback
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      part: 'snippet',
      maxResults: options.max || 5,
      type: 'video',
      videoEmbeddable: true,
    },
    success: (data) => {
      callback(data);
    },
    error: (errorMsg) => {
      console.log(`ERROR: ${errorMsg}`);
    }
  });

};

export default searchYouTube;
