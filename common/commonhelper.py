from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib import messages
import mysql.connector
from django.conf import settings
from easy_thumbnails.files import get_thumbnailer
from random import randint

import os
import io
import PIL.Image as Image

db_config = {
    "host": settings.DB_CREDENTIALS['HOST'],
    "user": settings.DB_CREDENTIALS['USER'],
    "password": settings.DB_CREDENTIALS['PASSWORD'],
    "database": settings.DB_CREDENTIALS['NAME']
    }

def dict_build(cursor):
    column_names = list(map(lambda x: x.lower(), [d[0] for d in cursor.description]))
    details = list(cursor.fetchall())
    result = [dict(zip(column_names, row)) for row in details]
    return result
def uploadProfileImages(posted_file, file_content,user_name):

    images = {"image_main_url": '', "image_bigthumb_url": '', "image_smallthumb_url": ''}
    try:
        content_type = posted_file.content_type
        extension = (posted_file.name.split("."))[-1]
        import time
        image_name = str(round(time.time() * 1000)) + str(random_number(4))

        # Upload main image
        images['image_main_url'] = uploadImage(posted_file,content_type, file_content, "main_"+image_name,"." + extension,user_name)

        # Upload bigthumb image
        thumbnailer_thb = get_thumbnailer(posted_file, relative_name='TempThumb_.jpeg')
        images['image_bigthumb_url'] = uploadImage(posted_file,content_type, thumbnailer_thb.generate_thumbnail(
            {'size': (150, 150), 'crop': False}, False).read(),
            "bigthumb_"+image_name, "." + extension,user_name)

        # Upload smallthumb image
        thumbnailer_ths = get_thumbnailer(
            posted_file, relative_name='TempThumb.jpeg')
        images['image_smallthumb_url'] = uploadImage(posted_file,content_type, thumbnailer_ths.generate_thumbnail(
            {'size': (40, 40), 'crop': False}, False).read(), "smallthumb_"+image_name,"." + extension,user_name)
    except Exception as ex:
        print(str(ex))
    return images

def uploadImage(posted_file,content_type, file_content, image_name,extension,user_name):
    image_url = ''
    image_url='static/images/Userprofile/' + user_name + "_" + image_name + extension
    try:
        image = Image.open(posted_file)
        image.save(image_url)
        return "/"+image_url
    except Exception as ex:
        print(str(ex))
        return ''

def get_login_user_common_context(user, context):
    context['user_profile']=None
    if user.is_authenticated :
        username=user.username
        user_profile = getUserProfileByUser(username)
        context['user_profile'] = user_profile
    return context

def getUserProfileByUser(username):
    db_config = {
    "host": settings.DB_CREDENTIALS['HOST'],
    "user": settings.DB_CREDENTIALS['USER'],
    "password": settings.DB_CREDENTIALS['PASSWORD'],
    "database": settings.DB_CREDENTIALS['NAME']
    }
    conn = mysql.connector.connect(**db_config)            
    cur = conn.cursor()
    query = '''select au.id,au.username,au.first_name,au.last_name,au.email,au.is_superuser,au.is_staff,au.is_active,
                au.date_joined,au.last_login,up.mobile,up.user_type,up.is_mobile_verified,up.is_email_verified ,
                up.image_main_url,up.image_bigthumb_url,up.image_smallthumb_url,
                uadd.address_line_1,uadd.address_line_2,uadd.address_line_3,uadd.country,uadd.state,uadd.district,uadd.pin
                from auth_user au left join user_profiles up on au.id=up.user_id 
                left join iims_tbl_user_address uadd on au.id=uadd.user_id
                where au.username=%s'''
    cur.execute(query,(username,))
    user_profile = dict_build(cur)
    cur.close()
    conn.close()
    return user_profile
