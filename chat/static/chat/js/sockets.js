$( document ).ready(function() {
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const message = data['message'];
        window[data['type']](data['message'])
    };

    $('.chat-message-input').keyup((e) => {
        if (e.keyCode === 13) {
            $('.chat-message-submit').click();
        }
    });

    $('.chat-message-submit').click(() => {
        var message = $('.chat-message-input');
        const text = message.val()
        if (text) {
            chatSocket.send(JSON.stringify(['create_message', text]));
            message.val('');
        }
    });

    chatSocket.onclose = function(e) {
        console.error('Chat socket closed unexpectedly');
    };

});
function onDeleteMessage(event) {
    chatSocket.send(JSON.stringify(['delete_message', $(event.target).data('message-id')]));
}