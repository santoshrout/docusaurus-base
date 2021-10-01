---
sidebar_position: 22
---

#What will be the “id” attribute in the “record” tag of the XML file?

With the prefixed module name, it will be a unique external identifier in the Odoo database. It will be accessible by self.env.ref(“id”) in any part of the code.