from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='getRoutes' ),
    path('ping/', views.getRoutes, name='getPing' ),
    path('input/', views.createPing, name='createPing' ),
]

"""
Planned RestfulAPI Routes

GET     /articles/
POST    /articles/new/
GET     /articles/id/
PUT     /articles/id/
DELETE  /articles/id/
"""