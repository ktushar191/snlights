from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from common import commonhelper
from django.db import connection 
from django.contrib import messages

# Create your views here.
def commondashboard(request):
    if request.method=="GET":
        return render(request,'common/commondashboard.html',{})
    if request.method=="POST":
        pass

def login(request):
    
    if request.method=="GET":
        
        context={}
        # context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/login.html',{})
    elif request.method == 'POST':
        # Retrieve form data from the POST request
        identifier = request.POST.get('identifier')  # This can be either email or contact number
        password = request.POST.get('password')

        try:
            # Try to find the user by email or contact number
            user = None

            if '@' in identifier:  # Checking if the identifier is an email
                user = User.objects.filter(email=identifier).first()  # Search by email
            else:  # Assume it's a contact number
                user = User.objects.filter(profile__contact_number=identifier).first()  # Assuming contact number is in profile model

            if user is not None:
                # Authenticate the user
                user = authenticate(request, username=user.username, password=password)

                if user is not None:
                    # Log the user in if authentication is successful
                    login(request, user)
                    # Redirect to a page after successful login (e.g., dashboard or home)
                    return HttpResponseRedirect("/administrator/dashboard")
                else:
                    # If authentication fails, display an error message
                    messages.error(request, "Invalid username or password")
            else:
                # If no user was found with that email or contact number
                messages.error(request, "User not found with the provided email or contact number")
            
            # Redirect back to the login page
            return HttpResponseRedirect("/administrator/login")

        except Exception as e:
            # Handle any exceptions (e.g., database errors)
            messages.error(request, f"An error occurred: {e}")
            return HttpResponseRedirect("/administrator/login")

def registration(request):
    
    if request.method=="GET":
        
        context={}
        context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/registration.html',{})
    if request.method=="POST":
        pass

def about(request):
    
    if request.method=="GET":
        
        context={}
        context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/about.html',{})
    if request.method=="POST":
        pass

def contact(request):
    
    if request.method=="GET":
        
        context={}
        context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/contact.html',{})
    if request.method=="POST":
        pass

def product_services(request):
    
    if request.method=="GET":
        
        context={}
        context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/product_services.html',{})
    if request.method=="POST":
        pass