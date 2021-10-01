---
sidebar_position: 30
---

#How to write default value to field?

```odoo
message = fields.Char(string="Message", compute='my_message' , default =_get_default_message)
def _get_default_message(self):
return "Hello"
```

