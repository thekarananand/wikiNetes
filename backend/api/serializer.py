from rest_framework import serializers

class serializeInput(serializers.Serializer):
    Input = serializers.CharField(required=True, max_length=24)