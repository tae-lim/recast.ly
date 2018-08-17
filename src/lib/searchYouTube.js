var searchYouTube = (options, callback) => {
  // TODO
  // var options =

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    //contentType: 'application/json',
    success: function(data) {
      callback(data);
    },
    failure: function() {
    }
  })
};

window.searchYouTube = searchYouTube;
