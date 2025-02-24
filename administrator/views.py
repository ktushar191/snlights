from django.shortcuts import render

# Create your views here.
def admindashboard(request):
    if request.method=="GET":
        pass
    if request.method=="POST":
        pass

def add_company(request):
    
    if request.method=="GET":
        
        context={}
        # context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/company_form.html',{})
    if request.method=="POST":
        pass

def add_category(request):
    
    if request.method=="GET":
        
        context={}
        # context=commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/add_category.html',{})
    if request.method=="POST":
        pass
