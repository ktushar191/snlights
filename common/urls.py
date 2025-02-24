from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [

    path('',views.commondashboard,name='commondashboard'),
    path('common/login/',views.login,name='login'),
    path('common/registration/',views.registration,name='registration')

]