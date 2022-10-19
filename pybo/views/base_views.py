from django.core.paginator import Paginator
from django.db.models import Q
from django.shortcuts import render, get_object_or_404

from pybo.models import Question
import logging
logger = logging.getLogger('pybo')

def index(request):
    logger.info("INFO 레벨로 출력")
    page = request.GET.get('page', '1')  # ?럹?씠吏?
    kw = request.GET.get('kw', '')  # 寃??깋?뼱
    question_list = Question.objects.order_by('-create_date')
    if kw:
        question_list = question_list.filter(
            Q(subject__icontains=kw) |  # ?젣紐?
            Q(content__icontains=kw) |  # ?궡?슜
            Q(answer__content__icontains=kw) |  # ?떟蹂??궡?슜
            Q(author__username__icontains=kw) |  # 吏덈Ц 湲??벖?씠
            Q(answer__author__username__icontains=kw)  # ?떟蹂? 湲??벖?씠
        ).distinct()
    paginator = Paginator(question_list, 10)  # ?럹?씠吏??떦 10媛쒖뵫 蹂댁뿬二쇨린
    page_obj = paginator.get_page(page)
    context = {'question_list': page_obj, 'page': page, 'kw': kw}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    context = {'question': question}
    return render(request, 'pybo/question_detail.html', context)
