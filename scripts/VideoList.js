'use strict';
/*eslint-env jquery*/
/* global Api, Store*/

// eslint-disable-next-line no-unused-vars
const VideoList = (function(){

  const generateListItem = function(video) {
    return `
      <li data-video-id="${video.id}">
        <h3>${video.title}</h3>
        <img class="img-thumbnail" src="${video.thumbnail}" />
      </li>`;
  };
  const render = function() {
    //console.log(store);
    const html = Store.videos.map(video => {
      return generateListItem(video);
    });
    //console.log(html);
    $('.results').html(html);
  };

  const handleFormSubmit = function() {
    console.log('handleFormSubmit fired');
    $('form').submit(event => {
      event.preventDefault();
      const queryTarget = $(event.currentTarget).find('#search-term');
      const query = queryTarget.val();
      // console.log('this is query',query);
      queryTarget.val('');
      //console.log('this is queryTarget', queryTarget);
      Api.fetchVideos(query, response => {
        Store.setVideos(response);
        //console.log('this is addVideos',addVideos);
        render();
      });
    });
  };

  const bindEventListeners = function() {
    handleFormSubmit();
  };

  return {
    generateListItem,
    bindEventListeners,
  };

}());
