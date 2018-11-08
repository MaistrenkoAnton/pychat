from chat.models import Chat


def create_message(message, user):
    return Chat.objects.create(message=message, user=user)


def get_all_messages():
    return Chat.objects.all()


def delete_message(id):
    return Chat.objects.filter(id=id).delete()
