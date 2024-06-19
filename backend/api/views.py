# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# from .serializer import serializeInput

from . import mongo
# from . import serializer

# Create your views here.
@api_view(['GET'])
def pingBackend(request):
    return Response( {
        "Ping": "Pong"
    } )

@api_view(['GET'])
def pingDatabase(request):
    status = mongo.pingDatabase()
    return Response(status)

@api_view(['GET'])
def articles(request):
    articlesList = mongo.articlesList()
    return Response(articlesList)
    
#     elif request.method == 'POST':
#         data = request.data
#         serializer = serializeInput(data=data)
#         if serializer.is_valid():
#             print(serializer.data)
#             return Response(serializer.data)
#         return Response(serializer.errors)
