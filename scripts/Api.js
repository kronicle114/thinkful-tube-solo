'use strict';
/*eslint-env jquery*/

const Api = (function(){
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = 'PLEASE ENTER YOUR API KEY HERE';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      // you get the query key/values from YouTube API's parameters
      q: searchTerm,
      key: API_KEY,
      part: 'snippet' //this is actually specified on YouTube API website
    };

    $.getJSON(BASE_URL, query, callback);
    //console.log('test ran');
  };

  return {
    fetchVideos
  };

}());
