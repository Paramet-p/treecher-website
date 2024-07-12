from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status, viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from .models import NewUser, Student
from .serializers import CreateStudentSerializer, CreateTeacherSerializer, NewUserSerializer, StudentsSerializer, UserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny

#Student signup
class StudentUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        data = request.data
        serializer = CreateStudentSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Teacher Signup
class TeacherUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        data = request.data
        serializer = CreateTeacherSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#UserViewset
class UserViewset(viewsets.ModelViewSet):
    queryset = NewUser.objects.all()
    serializer_class = NewUserSerializer

class StudentViewSet(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentsSerializer

@api_view()
def whoami(request):
    s = UserSerializer(request.user)
    return Response(s.data)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

