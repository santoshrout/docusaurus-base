---
sidebar_position: 14
---

# How to make cancel button available for only on group in sales module?

This is the format to available only on groups:
```odoo
< button name="act_cancel" string="Cancel" type="object" states="done" groups=" Group1,Group2" class="btn-primary"/ >
```