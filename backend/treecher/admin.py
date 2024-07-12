from django.contrib import admin
from treecher.models import NewUser, Student, Teacher
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models


class UserAdminConfig(UserAdmin):
    model = NewUser
    search_fields = ('email', 'first_name', 'last_name',)
    list_filter = ('email', 'first_name', 'last_name', 'is_active', 'is_staff', )
    ordering = ('-start_date',)
    list_display = ('email', 'id', 'first_name', 'last_name',
                    'is_active', 'is_student', 'is_teacher')
    fieldsets = (
        (None, {'fields': ('email', 'first_name', 'last_name','is_student', 'is_teacher')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
        ('Personal', {'fields': ('about',)}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_active', 'is_staff',  'is_student', 'is_teacher')}
         ),
    )


admin.site.register(NewUser, UserAdminConfig)
admin.site.register(Student)
admin.site.register(Teacher)
