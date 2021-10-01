---
sidebar_position: 50
---

#How to change the starting module in Odoo?

There are two ways to change the starting menu:

1. Enable developer mode. Go to Settings -> Users & Companies-> Users and edit the user you want to set this for. In the Preferences tab, set the Home Action to the module relevant to that user.
2. The menu are ordered based on the sequence given to it. Lower sequence menu will be shown in first.For changing the sequence either you can do it from the code or from the UI.
From user interface activate developer mode and navigate to Settings -> Technical -> User Interface -> Menu Items, open menu and change the value of the sequence field.