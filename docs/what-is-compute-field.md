---
sidebar_position: 28
---

#What is Compute field?

Fields can be computed (instead of read straight from the database) using the compute parameter. It must assign the computed value to the field.
Syntax:
```odoo
 field_name=fields.Float(string='Field Name (Kg)',compute='our computed field)
 ```