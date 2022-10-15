from django.shortcuts import render
from .models import User


def index(request):
    user_list = User.objects.order_by('create_date')
    context = {'user_list': user_list}
    return render(request, 'image_editor/signup.html', context)

