from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView
from django.urls import path
from django.views.generic import TemplateView

from cvwebsite import views

urlpatterns = [
    path(r'', views.main_base_view, name='index'),
    path(r'', views.base_layout, name='base_layout'),
    url(r'^Resume/$', views.resume_layout, name='resume_layout'),
    url(r'^Tradespeople/$', views.tradespeople_layout, name='tradespeople_layout'),
    url(r'^MCMG/$', views.mcmg_layout, name='mcmg_layout'),
    url(r'^MERN/$', views.mern_layout, name='mern_layout'),
    url(r'^Unity/$', views.unity_layout, name='unity_layout'),
]

# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
