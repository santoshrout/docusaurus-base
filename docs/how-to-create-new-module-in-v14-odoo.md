---
sidebar_position: 3
---


#How To Create New Module In Odoo 14?

Describe the importance of module in Odoo:
Odoo module is a set of business logic which helps to enhance the existing functionality or add some new functionality in Odoo.
Where to create a new module in Odoo?
Odoo is a modular-based framework and all the core modules are present inside the Odoo addons.
You can find addons path inside the Odoo configuration file(If you are managing) and inside the configuration file you can find addons path next to “addons_path”.
Structure of Odoo Module:
Business Objects (Contains the Python Classes in Python Files)
Object Views (Contains the business object for UI).
Data Files
Views
Report
Demonstration Files
Data Files
Security FIles (For Access Rights & Rules)
Email/Qweb Templates
Many More.
Static Web (Contains the module documentation files, CSS, JQuery, etc.
Controllers (To manage backend/frontend actions).
Now, for example, we are creating a module which technical name is “‘webkul_elearning_module”
Required Files to Create a Basic Module:
__manifest__.py
__init__.py
What is a Manifest file?
This file “__manifest__.py” helps to specify the metadata of the module and also helps to show the module inside the Odoo app list. All the metadata is associated inside the dictionary.
Important keys in the manifest file:
{
'name': 'Sale Discount Control',
'version': '12.0.1.0.0',
'sequence': 30,
'summary': 'Discount Control in Sale',
'description': """ Discount Control module allows you to seamlessly control discount in sales order line and invoice order line. The module provisions you to add discount for a product as soon as you enter a product in the order can approve the discount "