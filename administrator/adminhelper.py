from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.contrib import messages
# import mysql.connector
from django.conf import settings
from easy_thumbnails.files import get_thumbnailer
from random import randint
import pymysql
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


def add_company(**kwargs):
    company_data=kwargs
    
    conn=pymysql.connect(**db_config)
    cur=conn.cursor()
    query='''insert into add_company(company_name,address,contact_number,other_information)values(%s,%s,%s,%s) '''
    cur.execute(query,(company_data["company_name"],company_data["address"],company_data["contact_number"],company_data["other_info"]))
    conn.commit()
    cur.close()
    conn.close()

    conn = pymysql.connect(**db_config)
    cur = conn.cursor()



def get_company_details_by_id(company_id):
    try:
       
        conn = mysql.connector.connect(**db_config)
        cur = conn.cursor()

        # SQL query to fetch company details by company ID
        query = '''SELECT * FROM add_company    
                     WHERE contact_number =%s'''

        # Executing the query with the company_id as a parameter
        cur.execute(query, (company_id,))

        # Fetching the result and converting it into a dictionary format
        company_dict = dict_build(cur)  # Assuming dict_build is a function that builds the dict from cursor result
        
        # Closing the cursor and connection
        cur.close()
        conn.close()

        return company_dict
    except Exception as e:
        # Handle exceptions and return None if there is an error
        print(f"Error occurred: {e}")
        return None


def edit_company(**kwargs):
    company_data = kwargs
    conn = pymysql.connect(**db_config)
    cur = conn.cursor()
    query = '''UPDATE add_company 
               SET company_name=%s, address=%s, contact_number=%s, other_information=%s 
               WHERE company_id=%s'''
    cur.execute(query, (company_data["company_name"], company_data["address"], 
                        company_data["contact_number"], company_data["other_info"], 
                        company_data["company_id"]))
    
    conn.commit()
    cur.close()
    conn.close()

def delete_company(company_id):
    conn = pymysql.connect(**db_config)
    cur = conn.cursor()
    query = '''DELETE FROM add_company WHERE company_id=%s'''
    cur.execute(query, (company_id,))
    
    conn.commit()
    cur.close()
    conn.close()



def add_category(**kwargs):
    category_data=kwargs
    
    conn=pymysql.connect(**db_config)
    cur=conn.cursor()
        # Prepare the SQL query to insert data into the categories table
    query = '''INSERT INTO add_category (category_name) VALUES (%s)'''

        # Execute the query with the provided data
    cur.execute(query, (category_data["category_name"]))

        # Commit the transaction
    conn.commit()

        # Close the cursor and connection
    cur.close()
    conn.close()

    # except Exception as e:
    #     raise Exception(f"Error while adding category: {e}")



def get_all_company_details():
    try:
        conn = pymysql.connect(**db_config)
        cur = conn.cursor()
        query = '''SELECT * FROM add_company'''
        cur.execute(query,)
        company_dict = dict_build(cur)  
        cur.close()
        conn.close()

        return company_dict
    except Exception as e:
        print(f"Error occurred: {e}")
        return None
    
def delete_company(company_id):
    try:
        # Establishing a connection to the database
        conn = pymysql.connect(**db_config)
        cur = conn.cursor()

        # SQL query to delete a company by ID
        query = '''DELETE FROM add_company WHERE id = %s'''
        cur.execute(query, (company_id,))  # (company_id,) is a tuple, to match the parameter format

        # Commit the transaction to save changes
        conn.commit()

        # Close the cursor and the connection
        cur.close()
        conn.close()

        return True  # Successfully deleted
    except Exception as e:
        print(f"Error occurred: {e}")
        return False  # Failed to delete
