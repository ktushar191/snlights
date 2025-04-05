from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [

    path('admindashboard/',views.admindashboard,name='admindashboard'),
    path('add_company/',views.add_company,name='add_company'),
    path('add_category/', views.add_category, name='add_category'),
    path('add_product/',views.add_product,name='add_product'),
    path('login/',views.login,name='login'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    #path('administrator/login/forgot_password/', views.forgot_password, name='forgot_password'),
    path('need_account/',views.need_account,name='need_account'),
    path('company_list/', views.company_list, name='acompany_list'),
    path('edit_company/', views.edit_company, name='edit_company'),
    path('companies/delete/<int:company_id>/', views.delete_company, name='delete_company'),
    
     
  
]