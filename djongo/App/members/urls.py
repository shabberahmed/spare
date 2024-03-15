from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
    path('post/', views.postMembers, name='post'),
    path('html/', views.showHTML, name='showHTML'),
]