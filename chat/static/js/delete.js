$( document ).ready(function() {
    $('.delete').click(function() {
        chatSocket.send(JSON.stringify(['delete_message', $(this).data('id')]));
        $(this).closest('.my-message').remove()
    })
});