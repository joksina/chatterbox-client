// // YOUR CODE HERE:
var room = "lobby";
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
}
app.init = function () {
}
app.send = function (message){
  $.ajax({
//   // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
}
app.fetch = function (message){
    // This is the url you should use to communicate with the parse API server.
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {

        console.log('chatterbox: Message Recieved');
      },
      error: function (data) {
    // Sees: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

  }

  app.clearMessages = function (){
    $('#chats').html("");
    $('#chats').children = [];
  }
  // children.prototype.push = function(array){
  //   array[array.length] = th
  // }
  app.addMessage = function (message){
    $('#chats').append('<div>'+message+'</div>');
  }
  app.addRoom = function (roomName){
    $('#roomSelect').append('<option>'+ roomName + '</option>');
  }
// var message = {
//   username: 'anonlife',
//   text: 'omg',
//   roomname: 'myroom'
// };
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent', data);
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'GET',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {

//     console.log('chatterbox: Message Recieved', data);
//   },
//   error: function (data) {
//     // Sees: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });

