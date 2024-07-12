from rest_framework import serializers
from classroom.models import Classroom, Post, Question, Answer, TakenQuiz, Quiz
from treecher.serializers import NewUserSerializer, StudentsSerializer


class ClassroomSerializers(serializers.ModelSerializer):
    Teacher = NewUserSerializer(read_only=True)
    Students = StudentsSerializer(read_only=True, many=True)
    class Meta:
        model = Classroom
        fields = '__all__'

class CreateClassroomSerializers(serializers.ModelSerializer):
    # Teacher = NewUserSerializer(read_only=True)
    class Meta:
        model = Classroom
        fields = ('name', 'about')

class PostSerializer(serializers.ModelSerializer):
    classroom = serializers.SlugRelatedField(
        slug_field='name',
        queryset= Classroom.objects.all()
    )
    author = NewUserSerializer(read_only=True)
    
    class Meta:
        model = Post
        fields = ('id', 'classroom', 'published', 'author', 'content', 'status')

class QuizSerializer(serializers.ModelSerializer):
    classroom = serializers.SlugRelatedField(
        slug_field='name',
        queryset= Classroom.objects.all()
    )
    class Meta:
        model = Quiz
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    quiz = serializers.SlugRelatedField(
        slug_field='title',
        queryset= Quiz.objects.all()
    )
    class Meta:
        model = Question
        fields = '__all__'

class AnswerSerializer(serializers.ModelSerializer):
    question = QuestionSerializer(read_only=True)
    class Meta:
        model = Answer
        fields = '__all__'

class TakenQuizSerializer(serializers.ModelSerializer):
    student = StudentsSerializer(read_only=True)
    question = QuestionSerializer(read_only=True) 
    class Meta:
        model = TakenQuiz
        fields = '__all__'