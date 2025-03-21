from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from common import commonhelper
from django.db import connection 
from django.contrib import messages
from .import adminhelper

# Create your views here.
def admindashboard(request):
    if request.method == 'GET':
        
        context = {}
        context = commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/admindashboard.html',context)
    if request.method == 'POST':
        pass


def add_company(request):
    if request.method == 'GET':
        context = {}
        context = commonhelper.get_login_user_common_context(request.user, context)
        return render(request, 'administrator/add_company.html', context)
    
    if request.method == 'POST':
        company_name = request.POST.get('company_name')
        address = request.POST.get('address')
        contact_number = request.POST.get('contact_number')
        other_info = request.POST.get('other_info', '')  # Default to empty string if not provided
        
        try:
            # Prepare company data
            company_data = {
                'company_name': company_name,
                'address': address,
                'contact_number': contact_number,
                'other_info': other_info
            }
            
            # Call the helper function to add the company data
            adminhelper.add_company(**company_data)
            
            # Success message
            messages.success(request, "Company details saved successfully.")
            
            # Redirect back to the add company page (after successful insertion)
            return HttpResponseRedirect("/administrator/add_company")

        except Exception as e:
            # Handle potential database errors (e.g., constraint violations, SQL errors)
            messages.error(request, f"An error occurred: {e}")
            return HttpResponseRedirect("/administrator/add_company")

def company_list(request):

    context = {}
    context = commonhelper.get_login_user_common_context(request.user,context)
  
    if request.method == 'GET':
       
        company_details=adminhelper.get_all_company_details()
        context['company_details']=company_details

        return render(request, 'administrator/company_list.html', context)
        
    if request.method == 'POST':
        pass







    # Use raw SQL to fetch company details
    import pdb;pdb.set_trace()
    with connection.cursor() as cursor:
        cursor.execute("SELECT id, name, address, contact_number, other_info FROM add_company")
        companies = cursor.fetchall()  # Fetch all rows

    # Passing the company data to the template
    return render(request, 'company_list.html', {'companies': companies})
        
def edit_company(request, company_id):

    if request.method == "POST":
        company_name = request.POST.get('company_name')
        address = request.POST.get('address')
        contact_number = request.POST.get('contact_number')
        other_info = request.POST.get('other_info', '')

        try:
            sql = "UPDATE company SET company_name = %s, address = %s, contact_number = %s, other_info = %s WHERE id = %s"
            values = (company_name, address, contact_number, other_info, company_id)
            cursor.execute(sql, values)
            conn.commit()
            messages.success(request, "Company updated successfully.")
        except Exception as e:
            messages.error(request, f"Error: {e}")
        finally:
            cursor.close()
            conn.close()

        return redirect('edit_company', company_id=company_id)

    else:
        try:
            cursor.execute("SELECT * FROM company WHERE id = %s", (company_id,))
            company = cursor.fetchone()
        except Exception as e:
            messages.error(request, f"Error: {e}")
            company = None
        finally:
            cursor.close()
            conn.close()

        return render(request, 'administrator/edit_company.html', {'company': company})


def delete_company(request, company_id):
    # Delete the company using raw SQL
    with connection.cursor() as cursor:
        cursor.execute("DELETE FROM add_company WHERE id = %s", [company_id])
    
    # Redirect to the company list after deletion
    return redirect('company_list')


def add_category(request):
    if request.method == 'GET':
        # Adding common context (if required)
        context = {}
        context = commonhelper.get_login_user_common_context(request.user, context)
        return render(request, 'administrator/add_category.html', context)
    
    if request.method == 'POST':
        # Retrieve form data from the POST request
        category_name = request.POST.get('category_name')
        # description = request.POST.get('description', '')  # Default to empty string if not provided
        
        try:
            # Prepare category data to be inserted into the database
            category_data = {}
            category_data.update(
                {
                    'category_name': category_name,
                    
                }
            )
            
            # Call the helper function to add the category data
            adminhelper.add_category(**category_data)
            
            # Redirect back to the add category page (after successful insertion)
            return HttpResponseRedirect("/administrator/add_category")

        except Exception as e:
            # Handle potential database errors (e.g., constraint violations, SQL errors)
            messages.error(request, f"An error occurred: {e}")
            return HttpResponseRedirect("/administrator/add_category")

def add_product(request):
    if request.method == 'GET':
        
        context = {}
        context = commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/add_product.html',context)
    if request.method == 'POST':
        pass

def login(request):
    if request.method=="GET":
        context = {}
        context = commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/login.html',context)
    if request.method=="POST":
        pass

def forgot_password(request):
    
    if request.method=="GET":
        context = {}
        context = commonhelper.get_login_user_common_context(request.user,context)
        return render(request, 'administrator/forgot_password.html')
    if request.method=="POST":
         pass

def need_account(request):
    if request.method=="GET":
        context = {}
        context = commonhelper.get_login_user_common_context(request.user,context)
        return render(request,'administrator/need_account.html',context)
    if request.method=="POST":
        pass

