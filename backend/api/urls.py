from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='getRoutes' ),
    path('ping/', views.getRoutes,  name='getPing' ),
    path('input/', views.createPing, name='createPing' ),
]

# urlpatterns += [
#     path('/articles/',        views.articles,         name='articles'      ),
#     path('/articles/new/',    views.articles_new,     name='articles_new'  ),
#     path('/articles/id/',     views.articles_id,      name='articles_id'   ),
#     path('/articles/id/md/',  views.articles_id_md,   name='articles_id_md'),
# ]

"""
Planned RestfulAPI Routes

GET     /articles/
POST    /articles/new/
GET     /articles/id/
GET     /articles/id/md/
PUT     /articles/id/
DELETE  /articles/id/
"""