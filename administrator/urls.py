from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [

    path('admindashboard/',views.admindashboard,name='admindashboard'),
    path('add_company/',views.add_company,name='add_company'),
    path('add_category/',views.add_category,name='add_category'),
]