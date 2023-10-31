from django.shortcuts import render
from . models import Employee
from .serializer import Empserializer
from rest_framework.response import Response
from rest_framework.views import APIView #class based api views
from rest_framework.decorators import api_view #for function based  api views
from rest_framework.status import HTTP_201_CREATED,HTTP_400_BAD_REQUEST,HTTP_200_OK
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import authentication_classes, permission_classes, api_view

# Create your views here.

@api_view(['GET', 'POST'])
@authentication_classes([BasicAuthentication])
@permission_classes([IsAuthenticated])
def Selectdata(request):
    if request.method == 'GET':
        empdata = Employee.objects.all()
        empserlizeddata = Empserializer(empdata, many=True)
        return Response(empserlizeddata.data)

    if request.method == 'POST':
        empdata = request.data
        edata = Empserializer(data=empdata, many=True)
        if edata.is_valid():
            edata.save()
            return Response(status=HTTP_201_CREATED)
        else:
            print("error", edata.errors)
            return Response(HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def Updateempdata(request,pk):
    #return Response(data='got request from update'+str(pk))
    existingdata=Employee.objects.get(empno=pk)
    if request.method=='PUT':
        
        empdata=request.data
        updateemp=Empserializer(existingdata,data=empdata)
        if updateemp.is_valid() == True: 
            updateemp.save()
            return Response(status=HTTP_201_CREATED)
        else:
            print(updateemp.errors)
            return Response(status=HTTP_400_BAD_REQUEST)
    if request.method=='DELETE':
        existingdata.delete()

        return Response(status=HTTP_200_OK)
class CSelectdata(APIView):
    def get(self,request):
        empdata=Employee.objects.all()
        empserlizeddata=Empserializer(empdata,many=True)
        authentications_classes=[BasicAuthentication]
        Permission_classes=[IsAuthenticated]
        return Response(empserlizeddata.data)
    def post(self,request):
        empdata=request.data
        edata=Empserializer(data=empdata,many=True)
        if edata.is_valid()==True:
            edata.save()
            return Response(status=HTTP_201_CREATED)
        else:
            print("error",edata.errors)
            return Response(HTTP_400_BAD_REQUEST)
class CUpdateempdata(APIView):
    def put(self,request,pk):
        
        existingdata=Employee.objects.get(empno=pk)
        empdata=request.data
        updateemp=Empserializer(existingdata,data=empdata)
        if updateemp.is_valid() == True:
            updateemp.save()
            return Response(status=HTTP_201_CREATED)
        else:
            print(updateemp.errors)
            return Response(status=HTTP_400_BAD_REQUEST)
    def delete(self,request,pk):
        existingdata=Employee.objects.get(empno=pk)
        existingdata.delete()
        return Response(status=HTTP_200_OK)




