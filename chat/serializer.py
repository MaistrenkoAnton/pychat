from rest_framework import serializers

from chat.models import Chat


class ChatSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    user_id = serializers.CharField(source='user.pk')

    class Meta:
        model = Chat
        fields = ('message', 'username', 'user_id', 'id')
