function deleteMessage(id) {
console.log(id)
    $(`[data-message-id="${id}"]`).closest('.message').remove();
}