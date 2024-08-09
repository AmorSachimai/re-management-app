from django.db import models


class Category(models.Model):
    name = models.CharField(
        verbose_name='カテゴリ名',
        max_length=100,
        unique=True
    )
    color = models.CharField(
        verbose_name='色(16進数)',
        max_length=7,
        default='#000000'
    )

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(
        verbose_name='著者名',
        max_length=255,
        unique=True
    )

    def __str__(self):
        return self.name


class Book(models.Model):
    """
    書籍マスタ
    """
    name = models.CharField(
        verbose_name='タイトル',
        max_length=255,
        unique=True
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        verbose_name='カテゴリ',
        null=True,
        blank=True
    )
    authors = models.ManyToManyField(
        Author,
        verbose_name='著者',
    )
    lead_text = models.TextField(
        verbose_name='紹介文',
        null=True,
        blank=True
    )
    amount = models.PositiveSmallIntegerField(
        verbose_name='数量'
    )
    isbn = models.CharField(
        verbose_name='ISBNコード',
        max_length=20
    )
    publication_date = models.DateField(
        verbose_name='出版年月日',
        null=True,
        blank=True
    )
    created_at = models.DateField(
        verbose_name='登録日',
        auto_now_add=True
    )
    updated_at = models.DateField(
        verbose_name='更新日',
        auto_now=True,
        null=True
    )

    def __str__(self):
        return self.name
