---
sidebar_position: 29
---

#What is Onchange function and uses?

Odoo api.onchange decorator is used to invoke a method when a field's value changed. It can be used to validate the data or to trigger an action.
Simple Eg of Onchange function is:
@api.onchange('field_one' , 'field_two')
def set_sum_result(self):
if self.field_one or self.field_two:
self.field_three=self.field_one + self.field_two