---
sidebar_position: 25
---

#One2many and many2many fields and its uses?

one2many (Virtual relationship towards multiple objects (inverse of many2one)) - One2many – each class has teacher
Syntax:fields.One2many('object.name', 'field_id(m2o)', string='Field name', optional parameter)
many2many (Bidirectional multiple relationship between objects) - Many2many. All students have list of exams
Syntax:fields.Many2many('object.name', 'relation object (table name)', 'current.object.id', 'other.object.id', string='Field Name')