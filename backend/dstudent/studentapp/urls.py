        
from django.urls import path
from .views import StudentListAPIView,StudentCreateAPIView,StudentDeleteAPIView,StudentUpdateAPIView


urlpatterns=[
    path('student/',StudentListAPIView.as_view(),name="firstName"),
    path('student/list/',StudentCreateAPIView.as_view(),name="postlist"),
    path('student/list/del/<int:id>/',StudentDeleteAPIView.as_view(),name="Deletelist"),
    path('student/list/upd/',StudentUpdateAPIView.as_view(),name="updatelist"),
]
