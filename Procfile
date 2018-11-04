release: python manage.py migrate --settings=server.settings
web: daphne server.routing:channel_layer --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker -v2