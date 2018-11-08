import json

from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.views.generic import ListView

from chat.models import Chat


def index(request):
    return render(request, 'chat/index.html', {})


def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name))
    })


class ChatView(ListView):
    model = Chat
    queryset = Chat.objects.all().order_by('created')
    template_name = 'chat/room.html'
