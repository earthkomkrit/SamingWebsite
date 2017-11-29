from django.conf.urls import  url
from . import views

app_name = 'LogIn_Management'
urlpatterns = [
    url(r'^$', views.LogIn_Page),
]