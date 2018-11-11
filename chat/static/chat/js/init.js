$( document ).ready(function() {
    updateScroll();
    $('.chat-message-input').focus();
    ['click','mousemove'].forEach(function(ev) {
        window.addEventListener(ev, function() {
        const unreadMessages = $('*[data-is-read="False"]')
        if (unreadMessages.length) {
            arr = jQuery.map(  $('*[data-is-read="False"]'), function( a ) {
                return $(a).data('message-id');
            });
            console.log(arr)
        }
    })
})
});

var roomName = 'test'
const ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
const chatSocket = new WebSocket(ws_scheme + '://' + window.location.host + '/ws/chat/' + roomName + '/');

function updateScroll() {
    var element = $('.chat-box');
    element.scrollTop(element[0].scrollHeight);
    $('*[data-is-read="False"]').addClass('unread-message');
}