from django.conf.urls import url

from chat.views import ChatView
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<room_name>[^/]+)/$', ChatView.as_view(), name='room'),
]
