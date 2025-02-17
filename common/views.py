from django.shortcuts import render

# Create your views here.
def commondashboard(request):
    if request.method=="GET":
        return render(request,'common/commondashboard.html',{})
    if request.method=="POST":
        pass