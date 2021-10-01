---
sidebar_position: 24
---

#You added a new field in the inherited model. How you will add this field to view?

I will inherit the base view and add field specifying its position by XPath or by linking it to a unique element.

```odoo
<xpath expr="//element[@string='ElementName']" position="yourPosition"/>
```