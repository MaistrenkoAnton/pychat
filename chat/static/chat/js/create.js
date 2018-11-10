function create_message(message) {
    let template = null;
    if (message.user_id == $('.user').data('user-id')) {
        template = `<div class="text-right">
        <div class="message my-message text-left">
            <div class="message-header">
               <img class="chat-message-delete" onclick="onDeleteMessage(event)" data-message-id="${message.id}"
               src="/static/chat/images/delete.png" alt="">
            </div>
            <div>${message.message}</div>
            <div class="user">${message.username}</div>
        </div>
    </div>`
    } else {
        template = `<div class="message">
            <div class="friend-message" data-message-id="${message.id}">${message.message}
                <div class="user">${message.username}</div>
            </div>
        </div>`
    }
    $('.chat-box').append(template)
    updateScroll();
}