Terrible Hack X - Chrome Extension
===================

Welcome to the collaboration effort in Terrible Hack X.

----------


Concept
-------------
Create a Chrome Browser extension that detects when an ad or any link within the webpage attempts to redirect you. Instead we will redirect you to a warning site with an audible sound that promotes safe browsing

> **Note:**

> - This is a work in progress, and things will be defined in a further time


#### <i class="icon-file"></i> Additional Notes

> **ToDo:**
> - Make this specific to ad sites, or ads
> - Make this toggleable (but who needs that)
> - Make this more beautiful


### UML diagram of concept


```flow
st=>start: Start
e=>end
op1=>operation: Scan webpage for all anchor tags
cond1=>condition: Clicked safe webpage?
op2=>operation: Redirect to safe page with a warning

st->op1->cond1
cond1(no)->op2->op1
cond1(yes)->e
```
