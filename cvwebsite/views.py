from django.shortcuts import render
from django.template.context_processors import csrf
# Create your views here.


def base_layout(request):
    template = 'base.html'
    return render(request, template)


def main_base_view(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'index.html', dictionary)


def resume_layout(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'resumeProject.html', dictionary)


def tradespeople_layout(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'tradespeopleProject.html', dictionary)


def mcmg_layout(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'mcmgProject.html', dictionary)


def mern_layout(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'mernProject.html', dictionary)


def unity_layout(request):
    dictionary = dict(request=request)
    dictionary.update(csrf(request))
    return render(request, 'unityProject.html', dictionary)
