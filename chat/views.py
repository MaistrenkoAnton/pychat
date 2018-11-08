from django.shortcuts import render
from django.views.generic import ListView

from chat.models import Chat


def index(request):
    return render(request, 'chat/index.html', {})


class ChatView(ListView):
    model = Chat
    queryset = Chat.objects.all().order_by('created')
    template_name = 'chat/room.html'
