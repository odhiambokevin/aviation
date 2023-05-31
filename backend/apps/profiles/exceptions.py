"""Exceptions for profiles app"""
from email.policy import default
from rest_framework.exceptions import APIException

class ProfileNotFound(APIException):
    status_code = 404
    default_detail = "Requested profile does not exist"

class NotYourProfile(APIException):
    status_code = 404
    default_detail = "Permission denied for requested profile"  