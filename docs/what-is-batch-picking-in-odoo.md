---
sidebar_position: 47
---

#What is batch picking in Odoo?

A batch means multiple orders transferred under a single click. The transfers include delivery orders, receipts, internal transfers, etc, which reduces transportation time and cost.

The inventory module of Odoo will handle all transfers using batch picking.If multiple delivery orders are on the same route, those orders can be picked as a batch. Odoo provisions with canceling and removing transfers from a batch. Once the batch is confirmed, each transfer whether a sale or return, back order return, they can be individually managed. A batch will be in running until all the orders are delivered.

Configuration of batch picking:
To enable Batch picking, Go to the settings of the inventory module.
Inventory -> Configuration -> Settings -> Operations -> Batch picking and save.