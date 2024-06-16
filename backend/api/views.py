# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

# from .serializer import serializeInput

from .pymongo_interface import pymongo_pingDatabase

# Create your views here.
@api_view(['GET'])
def pingBackend(request):
    return Response( {
        "Ping": "Pong"
    } )

@api_view(['GET'])
def pingDatabase(request):
    status = pymongo_pingDatabase()
    return Response(status)

# @api_view(['GET', 'POST'])
# def createPing(request):
#     if request.method == 'GET':
#         return Response({
#         "Value": "Pong"
#     })
    
#     elif request.method == 'POST':
#         data = request.data
#         serializer = serializeInput(data=data)
#         if serializer.is_valid():
#             print(serializer.data)
#             return Response(serializer.data)
#         return Response(serializer.errors)
