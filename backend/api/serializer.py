from rest_framework import serializers

class ArticleMD(serializers.Serializer):
    title = serializers.CharField(required=True, max_length=150)
    author = serializers.CharField(required=True, max_length=50)
    md_content = serializers.CharField(required=True)