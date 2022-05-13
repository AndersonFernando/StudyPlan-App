from django.urls import path

from . import views

app_name = "core"

urlpatterns = [
    path("teste/", views.HomePageView.as_view(), name="teste"),
]
