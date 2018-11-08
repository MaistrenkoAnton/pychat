from channels.generic.websocket import AsyncWebsocketConsumer
import json

from chat.service import create_message, get_all_messages
from chat.serializer import ChatSerializer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        message = create_message(message, self.scope['user'])
        serializer = ChatSerializer(instance=message, context=self.scope['user'])
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'messages': [serializer.data]
            }
        )

    async def chat_message(self, event):
        messages = event['messages']
        await self.send(text_data=json.dumps({
            'messages': messages
        }))
