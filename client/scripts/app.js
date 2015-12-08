// // YOUR CODE HERE:ne
var room = "lobby";
var friends = {};
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
  var escape = ['<', '>']
  for (var i = 0; i < escape.length; i++) {
    if(message.text.indexOf(escape[i]) !== -1){
      return false;
    }
  }
  $('#chats').append('<div> <span class = "userName">'+message.username+'</span>'+": "+'<span class = "message">'+message.text+'</span> </div>');
};

app.addRoom = function (roomName){
  $('#roomSelect').append('<option>'+ roomName + '</option>');
};

app.addFriend = function(user, newFriend) {
  friends[user] = user;
  $('#chats').find('.' + user).addClass('friend')
}

$(document).ready(function() {
  var url = window.location.href;
  var users = url.indexOf('username') + 9;
  var sl = url.slice(users, url.length);
  
  $('#submit').click(function (){
    app.addMessage({username: "hi", text: $('#newMessage').val()})
      // console.log(())
  });
  $(document).on('click','.userName',function(){
    app.addFriend(sl, $(this).text())
    // console.log($(this).text())
    // code here
});
  // $(".userName").click(function (){
    // _.filter()
    // app.clearMessages()

  // })
})
