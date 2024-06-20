from rest_framework.response import Response
from rest_framework.decorators import api_view

from . import mongo
from . import serializer

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

@api_view(['GET', 'PUT'])
def articles_id(request, id):
    if ( request.method == "GET" ):
        articleContent = mongo.articleHTML(id)
        return Response(articleContent)

    elif ( request.method == "PUT" ):
        SerialData = serializer.ArticleMD(data=request.data)
        
        if SerialData.is_valid():
            mongo.update( id, SerialData.data )
            return Response({
                "Ping": "Pong",
                "id"  : id 
            })
        return Response(SerialData.errors)
        
@api_view(['GET'])
def articles_id_md(request, id):
    articleContent = mongo.articleMD(id)
    return Response(articleContent)