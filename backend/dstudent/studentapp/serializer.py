from rest_framework import serializers
from .models import StudentDetails

class StudentGetSerializer(serializers.ModelSerializer):
    
    skills=serializers.ListField(source='skillsList')
    class Meta:
        model = StudentDetails
        fields=('id','firstName','lastName','skills',)

class StudentCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = StudentDetails
        fields=('id','firstName','lastName','skills',)
        


class StudentDeleteSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = StudentDetails
        fields=('id','firstName','lastName','skills',)


class StudentUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = StudentDetails
        fields=('id','firstName','lastName','skills',)