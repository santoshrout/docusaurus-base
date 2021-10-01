---
sidebar_position: 12
---

#How to Add onchange Function From User Interface In Odoo?

Onchange Function from User Interface in Odoo:
The onchange function can be created easily with help of onchange () decorator in the code. Most people are not aware of how to add an onchange function from the user interface. This functionality is available in the community and enterprise editions of odoo. Let's check how to add an onchange function from the user interface.

First, we have to enable debug mode.

Then General Settings -> Technical -> Automated Actions

This is the interface of automating action creation.

Now we can create an onchange function as in the below-given screenshot while creating a new individual contact. Based on the Related Company field we are creating an onchange function for updating the Company details such as Mobile, Email, and Website Link.

Here when we select the parent company, only the corresponding company address details are automatically shown.
The parent company also has these details. Now we are going to create an onchange function for getting the details marked in the above screenshot.