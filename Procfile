release: python manage.py migrate --settings=server.settings
web: gunicorn server.wsgi --log-file -