'use strict';
/*eslint-env jquery*/

// eslint-disable-next-line no-unused-vars
const Store = (function(){

  const videos = {
    videos: []
  };

  const setVideos = function(response){
    const results = response.items.map(item => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
    // we are setting the value of Store.videos equal to results!!
    this.videos = results;
  };


  return {
    videos,
    setVideos
  };

}());
