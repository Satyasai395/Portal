from django.urls import path
from . import views
urlpatterns=[
    path('getemployees/',views.Selectdata,name='getdataurl'),
    path('updateemployee/<int:pk>',views.Updateempdata,name='updatedataurl'),
    path('deleteemployee/<int:pk>',views.Updateempdata,name='deletedataurl'),
    path('cgetemployees/',views.CSelectdata.as_view(),name='cgetdataurl'),
    path('cupdateemployee/<int:pk>',views.CUpdateempdata.as_view(),name='cupdatedataurl'),
    path('cdeleteemployee/<int:pk>',views.CUpdateempdata.as_view(),name='cdeletedataurl'),


]