---
id: initialization
title: Creating dhtmlxDiagram
sidebar_label: Creating dhtmlxDiagram
slug: /common_guides__initialization.html
---

In this article we will discuss the stages of adding dhtmlxDiagram on a page. This process presupposes several simple steps:

1. [Include the dhtmlxDiagram source files on a page](common_guides/initialization.md#including-required-code-files).
2. [Create a container to place the Diagram into](common_guides/initialization.md#creating-container).
3. [Initialize the Diagram with the object constructor](common_guides/initialization.md#initializing-diagram).


~~~html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="codebase/diagram.js"></script>
  <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
	<div id="diagram_container"></div>
	<script>
		var myDiagram = new dhx.Diagram("diagram_container", {// config options});
	</script>
</body>
</html>
~~~


## Including Required Code Files
-------------------

To create dhtmlxDiagram, you need to include 2 source files on your page:

- **diagram.js**
- **diagram.css**

Make sure that you set correct relative paths to these files:

~~~html
<script type="text/javascript" src="codebase/diagram.js"></script>
<link rel="stylesheet" href="codebase/diagram.css">
~~~

The structure of dhtmlxDiagram package is the following:

- **sources** - the source code files of the library. The files are not minified and easy-to-read. The package is mostly intended to be used for component's debugging;

:::note
The **Trial** version of the Diagram library doesn't contain the sources folder.
:::

- **samples** - the code samples;
- **codebase** - the packed code files of the library. These files are much smaller and intended for use in production. **In your apps you need to use files from this folder**.


## Creating Container
---------------------

It's high time to add an HTML container for our diagram. Let's give it the id "diagram_container":

~~~html
<div id="diagram_container"></div>
~~~

## Initializing Diagram
----------------

To initialize dhtmlxDiagram, you should use the `dhx.Diagram` constructor. The constructor function takes two parameters:

- a container to place a Diagram into. The one we have created at the previous step.
- an object with configuration properties. [See the full list below](common_guides/initialization.md#listofproperties).

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {// config options});
~~~

It is also possible to skip setting a container for Diagram and to add it right into the document's body:

~~~js
var myDiagram = new dhx.Diagram(document.body, {// config options});
~~~

<h3 id="orgchartinit">Initializing Org Chart</h3>

To create an Org Chart, specify the **type:"org"** property in the configuration object:

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {type:"org"});
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/01_basic.html">
          Basic Org chart - DHTMLX Diagram
        </a>
    </p>
</div>

<h3 id="listofproperties">Configuration properties</h3>

There is a list of properties that you can specify in the diagram configuration object (the second parameter of the constructor function):

- **[autoplacement](api/diagram_autoplacement_config.md)** - (*object*) sets configuration for autoplacement;
- **[type](api/diagram_type_config.md)** - (*string*) used to set the "org" type of a diagram;
- **[select](api/diagram_select_config.md)** - (*boolean*) enables the ability to select particular shapes;
- **[defaultShapeType](api/diagram_defaultshapetype_config.md)** - (*string*) defines the type of a diagram shape that is applied to all shapes by default. The default value is "card". You can set an individual type for each shape;
- **[defaults](api/diagram_defaults_config.md)** - (*object*) defines the default configuration that is applied to all shapes of a specified type;
- **[defaultLinkType](api/diagram_defaultlinktype_config.md)** - (*string*) defines the type of diagram links that is applied to all links by default. The default value is "line". You can set an individual type for each link;
- **[margin](api/diagram_margin_config.md)** - (*object*) specifies the vertical and horizontal margins for diagram shapes;
- **[scale](api/diagram_scale_config.md)** - (*boolean*) enables zooming in and out from a diagram, 1 by default;
- **[gridStep](api/diagram_gridstep_config.md)** - (*number*) defines the size of a grid step in pixels, 10 by default;
- **[lineGap](api/diagram_linegap_config.md)** - (*number*) defines the spacing between shapes and the connector line, 10 by default;
- **[toolbar](api/diagram_toolbar_config.md)** - (*array*) sets a toolbar with buttons for shapes

There are two ways to change the configuration of a diagram. You can specify the desired property in the config object passed as a second
parameter of the constructor function.

~~~js
var myDiagram = new dhx.Diagram("diagram_container", {scale:0.7});
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/05_wide_diagram.html">
          Wide flowchart - DHTMLX Diagram
        </a>
    </p>
</div>

Alternatively, you can get access to some option and set/modify its value via the diagram **config**. Don't forget to call the api/diagram_paint.md method to re-render the diagram with a new configuration:

~~~js
var diagram = new dhx.Diagram("diagram_container");
diagram.parse(data);

diagram.config.scale = 0.7; /*!*/
diagram.paint();
~~~
