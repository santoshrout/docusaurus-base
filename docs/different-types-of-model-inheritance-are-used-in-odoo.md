---
sidebar_position: 21
---

#What different types of model inheritance are used in Odoo?

1. Class inheritance with the same name and parent name inherit used to add features. Compatible with existing views and stored in the same table.
2. Prototype inheritance. New _name and parent name in _inherit. Used to copy features. Stored in different tables. Ignored by views.
3. Delegation inheritance. New _name and using _inherits. Multiple inheritances with created embedded instances of inherited objects.