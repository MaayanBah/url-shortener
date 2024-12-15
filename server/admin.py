from django.contrib import admin
from . import models

admin.site.site_header = "URL Shortener Admin"
admin.site.index_title = "Admin"


@admin.register(models.Url)
class UrlAdmin(admin.ModelAdmin):
    list_display = ["url", "shortened_url"]
    actions = ["delete_selected_urls"]

    @admin.action(description="Delete selected URLs")
    def delete_selected_urls(self, request, queryset):
        count = queryset.count()
        queryset.delete()
        self.message_user(request, f"Successfully deleted {count} URLs.")
