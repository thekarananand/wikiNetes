# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializer import serializeInput

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    print( "time for ping-pong" )
    return Response( {
        "Ping": "Pong"
    } )

@api_view(['GET', 'POST'])
def createPing(request):
    if request.method == 'GET':
        return Response({
        "Value": "Pong"
    })
    
    elif request.method == 'POST':
        data = request.data
        serializer = serializeInput(data=data)
        if serializer.is_valid():
            print(serializer.data)
            print('serializer is valid')
            return Response(serializer.data)
        return Response(serializer.errors)
