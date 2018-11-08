from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel


class Chat(TimeStampedModel):
    message = models.TextField()
    user = models.ForeignKey('auth.User', verbose_name=_('Sender'), on_delete=models.CASCADE)

    class Meta:
        verbose_name = _('Chat')
        verbose_name_plural = _('Chat')
        db_table = 'chat'
        ordering = ('-created',)
