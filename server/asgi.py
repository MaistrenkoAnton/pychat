# import os
# from channels.layers import get_channel_layer
#
# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
# channel_layer = get_channel_layer()


import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")
django.setup()
channel_layer = get_default_application()