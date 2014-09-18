 
// After the API loads, call a function to enable the video rating
function handleAPILoaded() {
  enableForm();
}

function enableForm() {
   
}
 
function likeDislike( rating) {
 var video_id = $('#video_id').val();
  var request = gapi.client.youtube.videos.rate({
    part: 'snippet',
    id: video_id,
    rating: rating    
  });
  request.execute(function(response) {
    $('#status').html('<pre>' + JSON.stringify(response) + '</pre>');
  });
}
