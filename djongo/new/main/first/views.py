from django.shortcuts import render
from django.http import HttpResponse
def first(req):
    return HttpResponse("this is response")
def second(req):
   return HttpResponse("this is second response")
