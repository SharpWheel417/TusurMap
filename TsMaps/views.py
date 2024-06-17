from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from TsMaps.model import insert as i
from TsMaps.model import db

def home(request):
    return render(request, 'index.html')


@csrf_exempt  # Только для тестирования. Используйте правильную защиту CSRF в реальных проектах.
def send_data(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        ids = data.get('ids')
        x = data.get('x')
        y = data.get('y')
        pic = data.get('pic')
        ## Заносим в БД
        i.ins(ids, x, y, pic)
        ## Если ОК
        return JsonResponse({'status': 'success', 'x': x, 'x': y})
    ## Если Ошиблка
    return JsonResponse({'status': 'fail', 'message': 'Invalid request method.'})


from django.http import JsonResponse
from TsMaps.model import select as s

def get_coords(request):
    # Обработка GET-запроса и получение данных
    rows = s.get_coords()
    print(rows)
    data = {
        'data': rows,
    }
    return JsonResponse(data)
