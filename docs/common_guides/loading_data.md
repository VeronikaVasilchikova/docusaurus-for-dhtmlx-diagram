---
id: loading_data
title: Loading and Storing Data
sidebar_label: Loading and Storing Data
slug: /common_guides__loading_data.html
---

You can populate Diagram and Org Chart with data in the following ways:

- [load data from an external file](#external-data-loading)
- [load data from a local data source](#loading-from-a-local-source)

## Preparing Data to Load
-------------------------

dhtmlxDiagram allows loading data in the JSON format. Here are examples of suitable data sets:

- for an organizational chart:

~~~js
var simple_dataset = [
	{ "id": "1", "text": "Chairman & CEO" },
	{ "id": "2", "text": "Manager", "parent": "1" },
	{ "id": "3", "text": "Technical Director", "parent": "1" },
	{ "id": "2.1", "text": "Marketer", "parent": "2" },
	{ "id": "3.1", "text": "Team Lead ", "parent": "3" }
];
~~~

[Check the format details in the related article](orgchart_guides/data_format.md).

- for a diagram:

~~~js
var data = [
	// shapes
	{ "id":"1", "x":100, "y":40,  "text":"Start", "type":"start", "height":50 },
	{ "id":"2", "x":100, "y":170, "text":"Operation 1", "type":"output" },
	{ "id":"3", "x":100, "y":300, "text":"Operation 2", "type":"input" },

	// connectors
	{ "id":"1-2", "from": "1", "to": "2" },
	{ "id":"2-3", "from": "2", "to": "3" }
];
~~~

[Check the format details in the related article](diagram_guides/data_format.md).


## External Data Loading
-------------------

To load data from an external file, make use of the [load](api/data/methods/load.md) method. It takes the URL of the file with data as a parameter:

~~~js
// add {type: "org"} into the constructor as a 2nd parameter to init an org chart
var diagram = new dhx.Diagram("diagram_container");
diagram.data.load("../common/data.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load("/some/data").then(function(){
   diagram.selection.add("123");
});
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/06_load.html">
          Org chart data loading - DHTMLX Diagram
        </a>
    </p>
</div>

## Loading from a Local Source
--------------------

To load data from a local data source, use the api/data/methods/parse.md method. As a parameter you need to pass an array of data objects:

~~~js
// diagram data
var data = [
	// shapes
	{ "id":"1", "x":100, "y":40, "text":"Start", "type":"start", "height":50 },
	{ "id":"2", "x":100, "y":170, "text":"Operation 1", "type":"output" },
	{ "id":"3", "x":100, "y":300, "text":"Operation 2", "type":"input" },
	// more shape objects

    // connectors
	{  "id":"1-2", "from": "1", "to": "2" },
	{  "id":"2-3", "from": "2", "to": "3" },
	{  "id":"3-4", "from": "3", "to": "4", "forwardArrow":"filled" },
    // more connector objects
];

var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/05_wide_diagram.html">
          Wide flowchart - DHTMLX Diagram
        </a>
    </p>
</div>


## Saving and Restoring State
----------------------------

To save the current state of a diagram, use the [serialize](api/data/methods/serialize.md) method. It converts the data of the diagram into an array of JSON objects.
Each JSON object contains the configuration of a separate shape.

~~~js
var state = diagram1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different diagram. For example:

~~~js
// creating a new diagram
var diagram2 = new dhx.Diagram(document.body);
// parsing the state of the diagram1 into diagram2
diagram2.data.parse(state);
~~~
