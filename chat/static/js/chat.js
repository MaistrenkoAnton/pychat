$( document ).ready(function() {
    chatSocket.onmessage = function(e) {
        const data = JSON.parse(e.data);
        const message = data['message'];
        let template = null;
        if (message.user_id == $('.user').data('id')) {
            template = `<div class="text-right">
            <div class="my-message text-left">
                <div class="message-header">
                   <img class="delete" src="/static/images/delete.png" alt="">
                </div>
                <div>${message.message}</div>
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
        updateScroll();
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
