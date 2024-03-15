from django.shortcuts import render
from django.http import JsonResponse 
from django.http import HttpResponse 
from django.views.decorators.csrf import csrf_exempt
from django.template import loader

data=[
    {"name":"ahmed"},{"name":"shaik"}
]

def members(request):
    return JsonResponse(data, safe=False)

def postMembers(request):
    if request.method == 'POST':
        value = request.body
        return HttpResponse(value)
    else:
        return HttpResponse(status=302)

def showHTML(request):
    template = loader.get_template('first.html')
    return HttpResponse(template.render())
