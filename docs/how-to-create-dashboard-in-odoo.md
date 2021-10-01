---
sidebar_position: 2
---

#How To Create a Dashboard In Odoo?

Dashboards of a software tool can play a very significant role in improving and supporting the business the same way the reports do. Both play a key role in disseminating and highlighting important information pertaining to various business operations. Both the dashboard and the reports help the management with insightful information totrigger fast and quick business decisions.

This will explains how one can create the Dashboard using XML, python in Odoo.

Basic setups for building an Odoo Dashboard which contains the following folders and files.

a folder name like hrms_dashboard this is what we call as the technical name of this dashboard module.

And we need to add to files named __init__.py and __manifest__.py. Note: These two files are mandatory.

css/js/img/, lib/ XML template ,etc are contained in the static folder. This folder acts as the right place for your style, images, libraries, and js code.

First of all, we need to create actions, menu item, and assets in an XML file that contained in views.

The next step is to create a new XML Template.

In the same dashboard, we can add lots of information and different types of graphs and charts.

For creating graphs and charts we have some packages such as:-
1. D3 js
2. Chart js
3. Chartist js
4. Highchart js etc..