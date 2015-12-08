var app = {}

$(document).ready(function() {
  var url = window.location.href;
  var users = [];
  var number = url.indexOf('username') + 9;
  var user = url.slice(number, url.length);
  var userObj; 
  
  if(users.indexOf(user) === -1){
    userObj = {name: user, friends: []}
    users.push(userObj)
  }

  $( ".submit" ).click(function() {
    app.send({username: userObj.name, text: $('#newMessage').val()})
    this.form.reset()
  });

  $(document).on('click','.userName',function(){
    app.addFriend(userObj, $(this).text())
  });
  // $(".userName").click(function (){
    // _.filter()
    // app.clearMessages()

  // })
  var room = "lobby";
  var friends = {};

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
        $('#chats').html("")
        _.each(data.results, function (val){
          app.addMessage(val)
        })
        console.log('chatterbox: Message sent');
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

  app.addMessage = function (message, whoIam){
    var escape = ['<', '>', '(', ')'] 

    for (var i = 0; i < escape.length; i++) {
      if(message.text.indexOf(escape[i]) !== -1){
        return false;
      }
    }

    if(whoIam === "me"){
        $('#chats').prepend('<div> <span class = "time">' +message.createdAt+' </span> <span class = "userName">'+message.username+'</span>'+": "+'<span class = "message">'+message.text+'</span> </div>');    
    } else{
    $('#chats').append('<div> <span class = "time">' +message.createdAt+' </span> <span class = "userName">'+message.username+'</span>'+": "+'<span class = "message">'+message.text+'</span> </div>');
    }

  };

  app.addRoom = function (roomName){
    $('#roomSelect').append('<option>'+ roomName + '</option>');
  };

  app.addFriend = function(user, newFriend) {
    user.friends.push(newFriend);
    // friends[user] = user;
    // $('#chats').find('.' + user).addClass('friend')
  }

  setInterval(app.fetch, 500);
})
