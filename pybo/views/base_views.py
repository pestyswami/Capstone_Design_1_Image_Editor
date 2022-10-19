from django.core.paginator import Paginator
from django.db.models import Q
from django.shortcuts import render, get_object_or_404

from pybo.models import Question
import logging
logger = logging.getLogger('pybo')

def index(request):
    
    page = request.GET.get('page', '1')  # ??΄μ§?
    kw = request.GET.get('kw', '')  # κ²???΄
    question_list = Question.objects.order_by('-create_date')
    if kw:
        question_list = question_list.filter(
            Q(subject__icontains=kw) |  # ? λͺ?
            Q(content__icontains=kw) |  # ?΄?©
            Q(answer__content__icontains=kw) |  # ?΅λ³??΄?©
            Q(author__username__icontains=kw) |  # μ§λ¬Έ κΈ??΄?΄
            Q(answer__author__username__icontains=kw)  # ?΅λ³? κΈ??΄?΄
        ).distinct()
    paginator = Paginator(question_list, 10)  # ??΄μ§??Ή 10κ°μ© λ³΄μ¬μ£ΌκΈ°
    page_obj = paginator.get_page(page)
    context = {'question_list': page_obj, 'page': page, 'kw': kw}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)
