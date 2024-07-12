from posixpath import basename
from django.urls import path, include
from rest_framework import routers
from classroom.views import *

app_name = 'classroom'

router = routers.DefaultRouter()
router.register(r'classroom', ClassroomViewSets, basename="Classroom")
router.register(r'join', JoinClassroom, basename="Post")
router.register(r'posts', PostViewSets, basename="Post")
# router.register(r'score', TakenQuizViewsets)

urlpatterns = [
    path('', include(router.urls)),
    path('quiz', QuizViewSets.as_view()),
    path('quiz/question/', QuestionViewSets.as_view()),
    path('quiz/question/answer', AnswerViewSets.as_view()),
    path('user_takequiz', TakenQuizViewSets.as_view()),
    path('getans', getAnswer)
]