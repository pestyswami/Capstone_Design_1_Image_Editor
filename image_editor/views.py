from django.shortcuts import render
from .models import User


def index(request):
    user_list = User.objects.order_by('create_date')
    context = {'user_list': user_list}
    return render(request, 'image_editor/signup.html', context)


def detail(request, user_id):
    user = User.objects.get(id=user_id)
    context = {'question': user}
    return render(request, 'image_editor/user_detail.html', context)
