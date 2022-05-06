from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from .models import Filme, Serie, Anime, Agenda


class HomePageView(TemplateView):
    template_name = "index.html"

@login_required
def listagem(request):
    context = {}
    context['filmes'] = Filme.objects.all()
    context['series'] = Serie.objects.all()
    context['animes'] = Anime.objects.all()

    return render(request, 'core/listagem.html', context)

@login_required
def listagem_agenda(request):
    context = {}
    context['filmes'] = Agenda.objects.filter(user=request.user, serie__isnull=True, anime__isnull=True)
    context['series'] = Agenda.objects.filter(user=request.user, filme__isnull=True, anime__isnull=True)
    context['animes'] = Agenda.objects.filter(user=request.user, serie__isnull=True, filme__isnull=True)
    for agenda in Agenda.objects.filter(user=request.user, serie__isnull=True, anime__isnull=True):
        print(agenda)

    return render(request, 'core/listagem_agenda.html', context)


def inicio(request):
    return render(request, 'core/inicio.html')

def agenda(request):
    return render(request, 'core/agenda.html')

def lembretes(request):
    return render(request, 'core/lembretes.html')

def teste(request):
    return render(request, 'core/index.html')

def materias(request):
    return render(request, 'core/materias.html')


def mudar_status_agenda(request, pk):
    novo_status = request.GET.get("novo_status", None)
    if pk != None and novo_status != None:
        Agenda.objects.filter(pk=pk).update(status=novo_status)
    return redirect("core:listagem_agenda")


def agendar(request, pk):
    status = request.GET.get("status", None)
    if Filme.objects.filter(pk=pk).exists():
        filme = Filme.objects.get(pk=pk)
        Agenda.objects.create(filme=filme, user=request.user, status=status)

    elif Serie.objects.filter(pk=pk).exists():
        serie = Serie.objects.get(pk=pk)
        Agenda.objects.create(serie=serie, user=request.user, status=status)

    elif Anime.objects.filter(pk=pk).exists():
        anime = Anime.objects.get(pk=pk)
        Agenda.objects.create(anime=anime, user=request.user, status=status)

    return redirect("listagem")



def alterar_episodio(request):
    print("ENTROU AQUI")
    return {"status": "Erro"}