from django.core.paginator import Paginator
from django.db.models import Q
from django.shortcuts import render, get_object_or_404

from pybo.models import Question
import logging
logger = logging.getLogger('pybo')

def index(request):
    
    page = request.GET.get('page', '1')  # ?éò?ù¥Ïß?
    kw = request.GET.get('kw', '')  # Í≤??Éâ?ñ¥
    question_list = Question.objects.order_by('-create_date')
    if kw:
        question_list = question_list.filter(
            Q(subject__icontains=kw) |  # ?†úÎ™?
            Q(content__icontains=kw) |  # ?Ç¥?ö©
            Q(answer__content__icontains=kw) |  # ?ãµÎ≥??Ç¥?ö©
            Q(author__username__icontains=kw) |  # ÏßàÎ¨∏ Í∏??ì¥?ù¥
            Q(answer__author__username__icontains=kw)  # ?ãµÎ≥? Í∏??ì¥?ù¥
        ).distinct()
    paginator = Paginator(question_list, 10)  # ?éò?ù¥Ïß??ãπ 10Í∞úÏî© Î≥¥Ïó¨Ï£ºÍ∏∞
    page_obj = paginator.get_page(page)
    context = {'question_list': page_obj, 'page': page, 'kw': kw}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)
