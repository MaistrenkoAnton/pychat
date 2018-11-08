var roomName = 'test'
var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
var chatSocket = new WebSocket(ws_scheme + '://' + window.location.host + '/ws/chat/' + roomName + '/');

chatSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);
    const messages = data['messages'];
    let template = null;
    for(const message of messages) {
        if (message.user_id == $('.user').data('id')) {
        template = `<div class="text-right">
            <div class="my-message text-left">${message.message}
                <div class="user">${message.username}</div>
            </div>
        </div>`
        } else {
        template = `<div>
            <div class="message">${message.message}
                <div class="user">${message.username}</div>
            </div>
        </div>`
        }
        $('.chat-box').append(template)
    }
    updateScroll();
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').focus();
document.querySelector('#chat-message-input').onkeyup = function(e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#chat-message-submit').click();
    }
};

document.querySelector('#chat-message-submit').onclick = function(e) {
    var messageInputDom = document.querySelector('#chat-message-input');
    var message = messageInputDom.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));

    messageInputDom.value = '';
};

function updateScroll() {
    var element = $('.chat-box');
    element.scrollTop(element[0].scrollHeight);
}