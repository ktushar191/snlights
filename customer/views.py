from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from common import commonhelper
from django.db import connection 
from django.contrib import messages

# Create your views here.

# Create your views here.
def customerdashboard(request):
    if request.method=="GET":
        pass
    if request.method=="POST":
        pass