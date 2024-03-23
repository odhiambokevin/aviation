from rest_framework.routers import DefaultRouter
from .views import AirportViewSet

router = DefaultRouter()
router.register("api/v1/airports", AirportViewSet, basename="airports")
urlpatterns = router.urls
