from email.policy import default
from rest_framework import serializers
from classroom.models import TakenQuiz
from treecher.models import NewUser, Student, Teacher
from django.contrib.auth import get_user_model
from django.http import HttpResponseBadRequest

User = get_user_model()

class CreateStudentSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    confirm_password = serializers.CharField(min_length=8, write_only=True)
    is_student = serializers.BooleanField(default=True)
    is_teacher = serializers.BooleanField(default=False)

    class Meta:
        model = NewUser
        fields = ('email', 'first_name', 'last_name', 'password', 'confirm_password', 'is_student', 'is_teacher', 'avartar')
        extra_kwargs = {'password': {'write_only': True}, 'confirmpassword': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        confirm_password = validated_data.pop('confirm_password', None)
        name = validated_data.get('first_name')
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None and confirm_password is not None :
            if password != confirm_password:
                raise ValueError(
                    'Confirm Password Must same as Password')
            else:
                instance.set_password(password)
        for i in range(0, len(name)):
            if name[i] not in "ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย ร ฤ ฤๅ ล ฦ ฦๅ ว ศ ษ ส ห ฬ อ ฮ":
                continue
            else: 
                instance.avartar = name[i] 
                break
        instance.save()
        student = Student.objects.create(user=instance)
        student.save()
        st_takequiz = TakenQuiz.objects.create(
            student = student,
            score = 0
        )
        st_takequiz.save()
        return instance

class CreateTeacherSerializer(serializers.ModelSerializer):
    """
    Currently unused in preference of the below.
    """
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    confirm_password = serializers.CharField(min_length=8, write_only=True)
    is_student = serializers.BooleanField(default=False)
    is_teacher = serializers.BooleanField(default=True)

    class Meta:
        model = NewUser
        fields = ('email', 'first_name', 'last_name', 'password', 'confirm_password', 'is_student', 'is_teacher', 'avartar')
        extra_kwargs = {'password': {'write_only': True}, 'confirmpassword': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        confirm_password = validated_data.pop('confirm_password', None)
        name = validated_data.get('first_name')
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None and confirm_password is not None :
            if password != confirm_password:
                raise ValueError(
                    'Confirm Password Must same as Password')
            else:
                instance.set_password(password)
        for i in range(0, len(name)):
            if name[i] not in "ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย ร ฤ ฤๅ ล ฦ ฦๅ ว ศ ษ ส ห ฬ อ ฮ":
                continue
            else: 
                instance.avartar = name[i] 
                break
        instance.save()
        teacher = Teacher.objects.create(user=instance)
        teacher.save()
        return instance


class NewUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('id', 'email', 'first_name', 'last_name', 'is_student', 'is_teacher', 'avartar')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'is_student', 'is_teacher', 'avartar')

class StudentsSerializer(serializers.ModelSerializer):
    user = NewUserSerializer(read_only=True)
    class Meta:
        model = Student
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    user = NewUserSerializer(read_only=True)
    class Meta:
        model = Teacher
        fields = '__all__'