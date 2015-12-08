// // YOUR CODE HERE:ne
var room = "lobby";
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
}
app.init = function () {
}
app.send = function (message){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
}
app.fetch = function (message){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {

      console.log('chatterbox: Message Recieved');
    },
    error: function (data) {
    console.error('chatterbox: Failed to send message');
    }
  });
};

app.clearMessages = function (){
  $('#chats').html("");
  $('#chats').children = [];
};

app.addMessage = function (message){
  console.log(window.location.href)
  var escape = ['<', '>']
  for (var i = 0; i < escape.length; i++) {
    if(message.text.indexOf(escape[i]) === -1){
      $('#chats').append('<div> <span class = "userName">'+message.username+': </span>'+'<span class = "message">'+message.text+'</span> </div>');
    }
  }
};

app.addRoom = function (roomName){
  $('#roomSelect').append('<option>'+ roomName + '</option>');
};
$(document).ready(function() {

  $('#submit').click(function (){
    app.addMessage({username: "hi", text: $('#newMessage').val()})
      // console.log(())
  });
})
// app.