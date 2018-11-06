'use strict';
/*eslint-env jquery*/

const Api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'AIzaSyDpD8nlDRtD461IUxVopKpm7eEd-utJ6qw';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      // you get the query key/values from YouTube API's parameters
      q: searchTerm,
      key: API_KEY,
      part: 'snippet' //this is actually specified on YouTube API website
      //per_page: 5
    };

    $.getJSON(BASE_URL, query, callback);
    //console.log('test ran');
  };

  // return something
  return {
    fetchVideos
  };

}());
