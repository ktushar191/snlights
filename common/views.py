from django.shortcuts import render

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
    if request.method=="POST":
        pass

def registration(request):
    
    if request.method=="GET":
        
        context={}
        # context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'common/registration.html',{})
    if request.method=="POST":
        pass