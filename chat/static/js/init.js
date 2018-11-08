$( document ).ready(function() {
    updateScroll();
    $('.chat-message-input').focus();
});

var roomName = 'test'
const ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
const chatSocket = new WebSocket(ws_scheme + '://' + window.location.host + '/ws/chat/' + roomName + '/');

function updateScroll() {
    var element = $('.chat-box');
    element.scrollTop(element[0].scrollHeight);
}