from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',                           views.pingBackend,      name='pingBackendAtIndexRoute'   ),
    path('ping/backend/',              views.pingBackend,      name='pingBackend'   ),
    path('ping/database/',             views.pingDatabase,     name='pingDatabase'  ),

    path('api/articles/',              views.articles,         name='articles'      ),
    path('api/articles/new/',          views.articles_new,     name='articles_new'  ),
    path('api/articles/<str:id>/',     views.articles_id,      name='articles_id'   ),
    path('api/articles/<str:id>/md/',  views.articles_id_md,   name='articles_id_md'),
]

"""
Planned RestfulAPI Routes

✅ GET     /articles/
✅ POST    /articles/new/
✅ GET     /articles/id/
✅ GET     /articles/id/md/
✅ PUT     /articles/id/
DELETE  /articles/id/
"""