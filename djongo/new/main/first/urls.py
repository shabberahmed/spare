from django.urls import path
from . import views
urlpatterns=[
    path('first/',views.first,name='first'),
        path('two/',views.second,name='two')

]