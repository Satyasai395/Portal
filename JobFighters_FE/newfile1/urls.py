from django.urls import path
from . import views
urlpatterns=[
    path('regdata/',views.Regdata,name='regdataurl'),
    path('logindata/',views.Logindata,name='loginurl'),
    path('otpdata/',views.Otpdata,name='otpdataurl'),
    path('forgetdata/',views.Forgetdata,name='forgetdataurl'),

    
]