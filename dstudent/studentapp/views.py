
from django.shortcuts import render
from .models import StudentDetails
from rest_framework.generics import CreateAPIView, ListAPIView,DestroyAPIView,UpdateAPIView
from .serializer import *

class StudentListAPIView(ListAPIView):
    queryset = StudentDetails.objects.all()
    serializer_class = StudentGetSerializer


# Create your views here.
class StudentCreateAPIView(CreateAPIView):
    queryset=StudentDetails.objects.all()
    serializer_class =  StudentCreateSerializer

class StudentDeleteAPIView(DestroyAPIView):
    queryset=StudentDetails.objects.all()
    lookup_field='id'
    serializer_class =  StudentCreateSerializer


class StudentUpdateAPIView(UpdateAPIView):
    queryset=StudentDetails.objects.all()
    lookup_field='id'
    serializer_class =  StudentCreateSerializer