---
id: working_with_diagram
title: Scrolling Diagram
sidebar_label: Scrolling Diagram
slug: /common_guides__working_with_diagram.html
---

By default the component's size is set automatically to fit the content. If necessary, the component will take the size of the HTML container and render horizontal and vertical inner scrolls to fit the content.


## Getting scroll state
------------------

dhtmlxDiagram allows you to get the current position of the scroll via the related method [getScrollState](api/diagram_getscrollstate.md):

~~~js
// returning the initial scroll position
var coords = diagram.getScrollState();	// -> {x:0,y:0}
~~~

It returns an object with the horizontal and vertical scroll position.


## Scrolling diagram
---------------

You can scroll to the necessary position on the diagram by using the [scrollTo](api/diagram_scrollto.md) method. It takes two parameters:

- **x** - (*number*) horizontal scroll position
- **y** - (*number*) vertical scroll position

~~~js
diagram.scrollTo(0, 160);
~~~

## Catching diagram scrolling
--------------------------

You can catch the start of Diagram scrolling using the [Scroll](api/diagram_onscroll_event.md) event. The handler function takes the position of the scroll as a parameter:

- **pos** - (*object*) the position of a scroll as an object with x and y attributes

~~~js
diagram.events.on("Scroll", function(position) {
    alert("The diagram has been scrolled:" position);
});
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/10_scroll.html">
          Scrolling Org chart content - DHTMLX Diagram
        </a>
    </p>
</div>
