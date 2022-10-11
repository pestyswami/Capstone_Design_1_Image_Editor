from django.db import models


class User(models.Model):
    user_id = models.CharField(max_length=15)
    user_password = models.CharField(max_length=15)
    create_date = models.DateTimeField()

    def __str__(self):
        return self.user_id
