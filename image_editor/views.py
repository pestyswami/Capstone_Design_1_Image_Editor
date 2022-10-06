from django.http import HttpResponse


def index(request):
    return HttpResponse("안녕하세요 이미지 에디터입니다.")
