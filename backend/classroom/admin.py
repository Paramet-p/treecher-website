from django.contrib import admin

from classroom.models import Classroom, Post, Question, Answer, TakenQuiz, Quiz

# Register your models here.
class ClassroomAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'about',
        'Teacher',
        'join_code'
    ]


class PostAdmin(admin.ModelAdmin):
    list_display = [
        'author',
        'content',
        'classroom'
    ]
class QuizAdmin(admin.ModelAdmin):
	list_display = [
        'classroom',
        'title',
        'content',
        ]
        
class AnswerInlineModel(admin.TabularInline):
    model = Answer
    fields = (
        'answer_text', 
        'is_correct'
    )

class QuestionAdmin(admin.ModelAdmin):
    fields = (
        'quiz',
        'question',
        'content'
    )
    list_display = (
        'quiz', 
        'question',
        'date_created'
    )
    inlines = (
        AnswerInlineModel, 
    )

class AnswerAdmin(admin.ModelAdmin):
    list_display = (
        'answer_text', 
        'is_correct', 
        'question'
    )

admin.site.register(Classroom, ClassroomAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
admin.site.register(TakenQuiz)