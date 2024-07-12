from rest_framework import viewsets, generics, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from classroom.models import Classroom, Post, Question, Answer
from classroom.serializers import *
from treecher.models import Student

# Create your views here.

class ClassroomViewSets(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializers

    def get_queryset(self):
        classroom = Classroom.objects.all()
        return classroom    

    def create(self, request, *args, **kwargs):
        data = request.data

        new_classroom = Classroom.objects.create(
            name = data['name'],
            about = data['about'],
            Teacher = request.user
        )    
        new_classroom.save()

        serializer = ClassroomSerializers(new_classroom)

        return Response(serializer.data)

class JoinClassroom(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializers

    def get_queryset(self):
        classroom = Classroom.objects.all()
        return classroom    

    def create(self, request, *args, **kwargs):
        data = request.data
        queryset = Classroom.objects.filter(join_code=data['join_code'])
        if queryset.exists():
            room = queryset[0]
            user_Student = Student.objects.get(user_id=request.user)
            room.Students.add(user_Student)    
            room.save()

            serializer = ClassroomSerializers(room)

            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class PostViewSets(viewsets.ModelViewSet):
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data

        new_post = Post.objects.create(
            content = data['content'],
            author = request.user
        )    
        new_post.save()

        serializer = PostSerializer(new_post)

        return Response(serializer.data)


class QuizViewSets(generics.ListAPIView):
    serializer_class = QuizSerializer
    queryset = Quiz.objects.all()

class QuestionViewSets(generics.ListAPIView):

    serializer_class = QuestionSerializer
    queryset = Question.objects.all()

class AnswerViewSets(generics.ListAPIView):

    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()

class TakenQuizViewSets(generics.ListAPIView):
    serializer_class = TakenQuizSerializer
    queryset = TakenQuiz.objects.all()

@api_view()
def getAnswer(request):
    data = request.data
    user = request.user
    user_st = Student.objects.get(user_id=request.user)
    user_takenquiz = TakenQuiz.objects.filter(student=user_st)
    takenquiz = user_takenquiz[0]
    takenquiz.score += 1
    takenquiz.save()

    return Response({'user_st_score': takenquiz.score})

