from django.shortcuts import render
from rest_framework.decorators import api_view  # for function based  api views
from . models import Student
from .serializer import Stdserializer
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
import random
from django.db.models.signals import pre_save
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_200_OK,HTTP_404_NOT_FOUND



def generate(email):
    global otp_code
    otp_code = str(random.randint(1000, 9999))
    subject = 'Your OTP Verification Code'
    message = f'Your OTP code is: {otp_code}'
    recipient_list = [email]
    send_mail(subject, message, settings.EMAIL_HOST_USER, recipient_list)
global sdata
# Create your views here.
@api_view(['GET', 'POST'])
def Regdata(request):
    global sdata
    global stddata

    if request.method == 'GET':
        stddata = Student.objects.all()
        stdserlizeddata = Stdserializer(stddata, many=True)
        # stdserlizeddata.is_valid()
        return Response(stdserlizeddata.data)
    if request.method == 'POST':
        stddata = request.data
        print(stddata)
        for i in stddata:
            email = i['email']
        sdata = Stdserializer(data=stddata, many=True)
        #print("sdata:::----",sdata)
        if sdata.is_valid() == True:
            generate(email)
            #print(msg)
            return Response(status=HTTP_201_CREATED)
        else:
            print("error", sdata.errors)
            return Response(HTTP_400_BAD_REQUEST)


# ------login-----
@api_view(['GET', 'POST'])
def Logindata(request):

    if request.method == 'POST':
        stdlogin = request.data
        print("react: ", stdlogin)
        for i in stdlogin:
            remail = i['email']
            rpassword = i['password']

        print(remail,rpassword)
        stdlogindb = Student.objects.filter(email=remail)
        print(stdlogindb)
        if not stdlogindb:
            print("not found")
            return Response("no mail")
        for i in stdlogindb:
            dpassword = i.password
            print("dpassword",dpassword)
        # print(dpassword,rpassword)
        if dpassword == rpassword:
            print("matched")
        else:
            print("not matched")
            return Response(HTTP_400_BAD_REQUEST)
        # print(stddata)
        return Response(status=HTTP_201_CREATED)

# --------------otp---------


@api_view(['POST'])
def Otpdata(request):
   
    if request.method == 'POST':
        empdata = request.data
        print(empdata)
        print(empdata[0])
        print(otp_code)
        if otp_code == empdata[0]:
            print("otp verified")
            
            print("otppps",sdata)
            for i in stddata:
                firstname = i['firstname']
                lastname = i['lastname']
                email = i['email']
                regtype = i['regtype']
            '''print(firstname,"    firstname")
            print(lastname,"     lastname")
            print(email,"      email")
            print(regtype,"       regtype")'''
            sdata.save()
            msg = '''
    Dear {},

    We are pleased to inform you that your registration has been successfully completed. You are now a part of our community, and we welcome you to Vcube online job portal.

    Your registration details:
    - Name: {}
    - Email: {}
    - User Type: {}

    With your registration complete, you can now enjoy the benefits and features of our platform. Feel free to explore, connect, and make the most of your experience with us.

    Thank you for choosing us, and we look forward to providing you with an exceptional experience.

    Best regards

    vcube Online job portal,
    kphb colony,
    hyderabad.

    '''.format(firstname, firstname+' '+lastname, email, regtype)
            subject = 'Registration Successful'
            to_list = ['srisatyasai136@gmail.com']
            send_mail(subject, msg, settings.EMAIL_HOST_USER, to_list)
                

            return Response("valid", status=HTTP_201_CREATED)
        else:
            
            return Response('invalid')

@api_view(['POST'])
def Forgetdata(request):
    if request.method == 'POST':
        forget = request.data
        print("forget: ", forget)
        l1=[]
        l2=[]
        print("l1-----------------",l1)
        print("l2-----------------",l2)

        for i in forget:
            for key, value in i.items():
                l1.append(key)
                l2.append(value)
        print("l1-----------------",l1)
        print("l2-----------------",l2)               
        if l1[0]=='email':
            global femail
            femail=l2[0]        
            stdlogindb = Student.objects.filter(email=femail)
            print("found",stdlogindb)
            if stdlogindb:
                generate(femail)
                print(otp_code)
                return Response("otp", status=HTTP_201_CREATED)
            else:
                return Response("notfound",status=HTTP_201_CREATED)
        if l1[0]=='from1':
            forgetcode=l2[1]
            print("=======================",forgetcode,l1[0],l2[1])
            if forgetcode==otp_code:
                return Response("otp verified", status=HTTP_201_CREATED)
            else:
                return Response("not verifed",status=HTTP_201_CREATED)
        if l1[0]=='password':
            password=l2[0]
            newpassword=l2[1]
            print("==============",password,newpassword,femail)
            student=Student.objects.get(email=femail)
            print(student.password)
            if not(student.password == newpassword):
                student.password = newpassword
                student.save()
                return Response("password updated",status=HTTP_201_CREATED)
            else:
                return Response("already existing password",status=HTTP_201_CREATED)    





