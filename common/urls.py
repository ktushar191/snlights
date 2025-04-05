from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [

    path('',views.commondashboard,name='commondashboard'),
    path('common/login/',views.login,name='login'),
    path('common/registration/',views.registration,name='registration'),
    path('about/',views.about,name='about'),
    path('contact/',views.contact,name='contact'),
    path('product_services/',views.product_services,name='product_services'),

]