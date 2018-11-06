'use strict';
/*eslint-env jquery*/


const Store = (function(){

  const videos = {
    videos: []
  };

//set Store.videos =
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

  // return something
  return {
    videos,
    setVideos
  };

}());
