---
sidebar_position: 8
---

#How to set notification for Odoo 13 community?

Create an Automated Action which is linked to a Server Action of Type E-Mail.

At Server Action field, "Create, Modify" option and fill the fields below:
Action Name: any name
Object: Leave
Email Address (if for manager): object.employee_id.parent_id.work_email Email Address (if for user): object.employee_id.work_email
Subject: Leave Request from [[ object.employee_id.name ]]
Message: Hello [[ object.employee_id.parent_id.name ]],

If you want to send mail to many adresses choose for "Action type" the value "Mutliple action". And create action for each mail.

Save you modifications

You can now choose this action server at "cofirmation", "first validation" , "validation" and "refused" items.