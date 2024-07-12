from importlib.resources import contents
from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from treecher.models import NewUser
from treecher.models import Student
from .config import random_code
# Create your models here.

class Classroom(models.Model):
    name = models.CharField(max_length=30,null=False)
    about = models.TextField(null=False)
    Teacher = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="Teacher")
    Students = models.ManyToManyField(Student, related_name="Students", blank=True)
    join_code = models.CharField(max_length=7, default=random_code())

    def __str__(self):
        return self.name 

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    option =(
        ('draft', 'Draft'),
        ('published', 'Published')
    )
        
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE, default=1)
    content = models.TextField()
    published = models.DateField(auto_now_add=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='classroom_posts')
    status = models.CharField(max_length=10, choices=option, default='published')
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.content

class Quiz(models.Model):

    class Meta:
        verbose_name = _("Quiz")
        verbose_name_plural = _("Quizzes")
        ordering = ['id']

    classroom = models.ForeignKey(Classroom, default=1, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=255, default=_(
        "New Quiz"), verbose_name=_("Quiz Title"))
    content = models.TextField(blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, default=1)
    question = models.CharField('Question', max_length=255)
    content = models.TextField(blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    answer_text = models.CharField('Answer', max_length=255)
    is_correct = models.BooleanField('Correct answer', default=False)

    def __str__(self):
        return self.answer_text

class TakenQuiz(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='taken_quizzes')
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='taken_quizzes', blank=True, null=True)
    score = models.IntegerField(default=0, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.student.user.first_name} {self.student.user.last_name}'