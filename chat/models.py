from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel


class Chat(TimeStampedModel):
    message = models.TextField(_('User message'))
    user = models.ForeignKey('auth.User', verbose_name=_('Sender'), on_delete=models.CASCADE)
    is_read = models.BooleanField(_('Is message read'), default=False)

    class Meta:
        verbose_name = _('Chat')
        verbose_name_plural = _('Chat')
        db_table = 'chat'
        ordering = ('-created',)
