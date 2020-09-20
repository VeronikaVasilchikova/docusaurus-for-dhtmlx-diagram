---
id: configuration
title: Configuring Diagram
sidebar_label: Configuring Diagram
slug: /common_guides__configuration.html
---

--------------

dhtmlxDiagram provides a wide range of options for configuration. You can zoom into and out from a diagram, change the type of shapes and their margins, create your own types of shapes,
apply selection, define the size of grid cells and set a toolbar with icons for the shapes.

[Check the list of possible config properties](common_guides/initialization.md#listofproperties).

## Setting Type of Shape
----------------------

See the full lists of shapes types for the diagram and for the org chart type:

- [Diagram Shapes and Connectors](diagram_guides/shapes_arrows_list.md#shapestypes)
- [Org Chart Shapes and Connectors](orgchart_guides/orgchart_shapes_types.md#shapestypes)

Besides, you can create a new type of shapes for Diagram or Org Chart.  For more information see the [Configuring Diagram](common_guides/configuration.md#creatingcustomshapes) article.

### Setting the default shape type

You can set the default type for all the shapes via the [defaultShapeType](api/diagram_defaultshapetype_config.md) attribute of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", {
    defaultShapeType: "rectangle"  		/*!*/
});
diagram.data.parse(data);
~~~

### Setting individual type for a shape

It is also possible to specify individual types for separate shapes via the related **type** attribute of the data item object.

~~~js
// data to load
var data = [
    // shapes
    { "id": "1", "x": 100, "y": 40,  "text": "Start", "type": "start", "height": 50 },
    { "id": "2", "x": 100, "y": 170, "text": "Operation 1", "type": "output" },
    { "id": "3", "x": 100, "y": 300, "text": "Operation 2", "type": "input" },

    // connectors
    { "id": "1-2", "from": "1", "to": "2" },
    { "id": "2-3", "from": "2", "to": "3" }
]

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

## Setting the default configuration of a shape
-------------------------------------------------
There is a great possibility to escape operating with a big data set while preparing it for loading into Diagram or Org Chart. You can specify the default configuration for all shapes with the necessary type and, therefore, reduce the amount of records in the data set.


For this purpose, use the [defaults](api/diagram_defaults_config.md) property of the diagram config object:

~~~js
var defaults = {
   // the default configuration for all shapes of the "rectangle" type
	rectangle: {
		fill: "#44B3FC",
		stroke: "#44B3FC"
	},
    // the default configuration for all shapes of the "circle" type
	circle: {
		fill: "#3DA0E3",
		stroke: "#3DA0E3"
	},
    // the default configuration for all shapes of the "endpoint" type
	endpoint: {
		fill: "#307DB0",
		stroke: "#307DB0"
	}
};

var diagram = new dhx.Diagram("diagram", {
	defaults: defaults /*!*/
});
~~~

<div style={{textAlign: "center"}}>
    <p>Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/06_decision_tree.html">
            Decision tree - DHTMLX Diagram
        </a>
    </p>
</div>

The **defaults** object contains a number of *key:value* pairs where *key* is a type of a shape and *value* is the default config of the shape.

:::note
The *type* and *id* attributes can not be defined in the default configuration of a shape.
:::

See the full lists of configuration properties:

- [for a diagram shape](diagram_guides/shapes_arrows_list.md#shapeattrs)
- [for an org chart shape](orgchart_guides/orgchart_shapes_types.md#shapeattrs)

## Creating Custom Shapes
-----------------------------

The dhtmlxDiagram library provides you with a set of default types of shapes that you can use to build your diagram or org chart.

But you can create custom shapes via the [addShape](api/diagram_addshape.md) method in order to change the look and feel of the diagram according to your needs.

<div style={{textAlign: "center"}}>
    <img className="imgDiagram" src={require('../assets/custom_network_shape.png').default} />
    <p>Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/03_network_diagram.html">
            Network diagram - DHTMLX Diagram
        </a>
    </p>
</div>

Let's consider a simple example of adding a custom shape into your Diagram:

1) First, you need to initialize a Diagram or an Org Chart as usual:

~~~js
// initialize Diagram
var diagram = new dhx.Diagram("diagram");

// or initialize Org Chart
var diagram = new dhx.Diagram("diagram_container", {type:"org"});
~~~

2) Then, using the **addShape** method you need to create a custom shape, i.e. specify the unique name for the type of this shape and define a template for your custom shape:

~~~js
diagram.addShape("networkCard", {
    template: config => (
        `<section class='network_template'>
            <img src='${config.img}' alt='${config.text}'></img>
            <span>${config.text}</span>
            <span>${config.ip}</span>
        </section>`
    ),
	defaults: {
		width: 160,
		height: 160,
		img: "../network_image/desktop.svg",
		text: "Network Card",
		ip: "138.68.41.78"
    }
});
~~~

You can also define the default configuration for each shape with the custom type with the help of the **defaults** attribute. <br />In the code example above, we've defined the default *width, height, img, text and ip* values for all shapes of the *networkCard* type.

:::note
All HTML and SVG tags must be closed in the template.
~~~js
For example, an <img src="" alt=""> tag should look like this:
<img src="" alt=""></img>
~~~
:::

3) After that, set the new custom type for a shape via the **type** attribute of the configuration object of the shape while preparing a data set for loading into the diagram:

~~~js
var networkDiagram = [
    {
        "id": 1,
        "type": "networkCard", /*!*/
        "x": 0,
        "y": 0,
        "text": "Remote expert desktop",
        "ip": "192.168.32.2"
    },
    // more options
]
~~~

To override values of the *text and ip* attributes set in the default config, we've specified the same properties with the new values in the data set.
Thus, the *"Network Card"* text value will be replaced with the *"Remote expert desktop"* one and the *"138.68.41.78"* ip value will be replaced with *"192.168.32.2"*.

:::note
The *ip* property is custom. For more details, see the [custom properties of a shape object](diagram_guides/shapes_arrows_list.md#customprop) article.
:::

4) Finally, you need to load the prepared data set into the Diagram:

~~~js
diagram.data.parse(networkDiagram);
~~~

:::note
You can find out more about the **addShape** method in the [related article](api/diagram_addshape.md)
:::

## Setting Type of Connector
-------------------------

See the full lists of shapes types for the diagram and for the org chart type:

- [Diagram Shapes and Connectors](diagram_guides/shapes_arrows_list.md#connectorstypes)
- [Org Chart Shapes and Connectors](orgchart_guides/orgchart_shapes_types.md#connectorstypes)

### Setting the default connector type

You can set a common type for all the connectors of the diagram via the [defaultLinkType](api/diagram_defaultlinktype_config.md) property of the diagram config object:

~~~js
var diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType:"line"        /*!*/
});
~~~

This value is applied, if the connector config doesn't contain the "type" property.

### Setting the type for a separate connector

Use the name of the necessary type as a value of the **type** attribute inside the connector object, while preparing a data set for loading into the [Diagram](diagram_guides/data_format.md) and [Org Chart](orgchart_guides/data_format.md):

~~~js
// data to load
var data = [
   // connectors
   { "id": "1-2", "from": "1", "to": "2", "type": "line", "forwardArrow": "filled" },
   { "id": "2-3", "from": "2", "to": "3", "type": "dash", "toSide": "bottom",
   		"forwardArrow": "filled" },
   { "id": "2-4", "from": "2", "to": "4", "type": "dash", "toSide": "top",
   		"forwardArrow": "filled" }
]

// initializing a diagram
var diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);
~~~

## Positioning Diagram and Shapes
--------------------

You can specify the position of a diagram on a page and set margins for shapes inside the api/diagram_margin_config.md attribute of the diagram config object.

The margin object contains a set of properties:

- **itemX** - horizontal space between two shapes
- **itemY** - vertical space between two shapes
- **x** - horizontal space between the start of a diagram and the first item
- **y** - vertical space between the start of a diagram and the first item

~~~js
// setting margins for an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org",
    margin:{
      x:20,
      y:20,
      itemX:50,
      itemY:50
    }
})
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/09_margin.html">
            Margin between shapes - DHTMLX Diagram
        </a>
    </p>
</div>


## Configuring Autoplacement
------------------------------

Starting from v3.0, the dhtmlxDiagram library lets you configure settings for automatically arranging connected shapes of Diagram in the hierarchical structure. You can specify the [autoplacement](api/diagram_autoplacement_config.md) property in the configuration object of Diagram and configure the mode of connecting shapes and distance between unconnected diagrams:

~~~js
var diagram = new dhx.Diagram("container", {
    autoplacement: {
        mode: "edges",
        graphPadding: 100
    }
});
~~~

The property can contain two options:

- **mode** - (*string*) optional, the mode of connecting shapes, "direct" (by default) or "edges"
- **graphPadding** - (*number*) optional, sets the distance between unconnected diagrams, "200" by default

:::note
The autoplacement will be applied only after the [autoPlace()](api/diagram_autoplace.md) method is used. For more information on how to organize Diagram shapes and connectors in the symmetric order automatically, see the [related](common_guides/manipulating_shapes.md#arrangingshapesautomatically) article.
:::

You can find more details about using the **autoplacement** property in Diagram Editor in the [related](diagram_guides/editor_mode.md#configurationproperties) article.

## Setting Size of Grid Step
--------------------------

You can specify the size of the grid step in pixels via the [gridStep](api/diagram_gridstep_config.md) configuration option. This parameter defines the step of moving a shape and equals to 10 pixels by default.

~~~js
var diagram = new dhx.Diagram("diagram_container", {
    gridStep:20
});
~~~

## Setting Toolbar for Shapes
--------------------------

dhtmlxDiagram allows you to specify a toolbar with icons for Diagram shapes to simplify interaction with shapes. You can enable the toolbar via the
[toolbar](api/diagram_toolbar_config.md) option of the diagram config object:

~~~js
// setting toolbar for shapes of an org chart
var diagram = new dhx.Diagram("diagram_container", { type:"org", select:true,
    toolbar:[{
        id:"download",
        content:"<i class='zmdi zmdi-download'></i>"
    },
    {
        id:"info",
        content:"<i class='zmdi zmdi-info-outline'></i>"
    }]
});
~~~

The toolbar is set as an array of icons objects. Each icon object can have the following properties:

- **id** - (*string*) the id of the icon.
- **content** - (*string*) the content of the icon. It can contain an HTML element with the name of the icon class.
- **check** - (*function*) checks whether the icon should be applied to the shape. The function takes a shape object and returns *true*, if the icon will be rendered for this shape.
- **css** - (*function*) the function which returns the name(s) of CSS class(es) that should be applied to the shape.

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/04_api/02_toolbar.html">
            Per-shape toolbar - DHTMLX Diagram
        </a>
    </p>
</div>

## Zooming Diagram
-------------

If necessary, you can scale a diagram to fit your application. It can be done with the help of the [scale](api/diagram_scale_config.md) option.
By default, its value is set to 1. So, to zoom into a diagram, set the option to a value larger than 1 and to zoom out - smaller than 1, correspondingly.

For example:

~~~js
// zooming an org chart
var diagram = new dhx.Diagram("diagram_container", { type: "org", scale:0.7});
diagram.data.parse(data);
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/03_zooming.html">
            Scaled Org chart - DHTMLX Diagram
        </a>
    </p>
</div>


## Selecting Shapes
-------------

It is possible to activate selection of shapes in a diagram. You need to make use of the [select](api/diagram_select_config.md) attribute of the diagram config object:

~~~js
// enabling selection in an org chart
var diagram = new dhx.Diagram("diagram_container", {
	type: "org",
    select: true 		/*!*/
});
~~~

<div style={{textAlign: "center"}}>
    <p>
        Related sample:&nbsp;
        <a href="https://docs.dhtmlx.com/diagram/samples/01_org_chart/05_selection.html">
            Org chart item selection - DHTMLX Diagram
        </a>
    </p>
</div>

You can also define the way of processing the behavior of the diagram during selecting/unselecting of shapes via the predefined set of events:

- [BeforeSelect](api/selection/events/diagram_onbeforeselect_event.md)
- [AfterSelect](api/selection/events/diagram_onafterselect_event.md)
- [AfterUnSelect](api/selection/events/diagram_onafterunselect_event.md)
- [AfterUnSelect](api/selection/events/diagram_onafterunselect_event.md)
