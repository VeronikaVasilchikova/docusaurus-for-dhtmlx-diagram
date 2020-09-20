---
id: overview
title: Overview
slug: /
---

------------------------
dhtmlxDiagram is a client-side chart component that allows you to display relations between some objects, concepts or living beings in a visual form:
as a scheme, chart, organizational chart, etc. The diagram makes it easier to present tangled and bulky information in a simple and accessible way.

You can choose between several options:

- [create a diagram out of preset shapes and connectors](#diagram);
- [render a predefined organizational chart](#organizational-chart);
- [create custom shapes for building your own diagram](#custom-diagram);
- [create a mixed diagram containing both the diagram and org chart shapes](#mixed-diagram);
- [initialize a Diagram editor](#diagram-editor) and build a custom diagram that will meet your needs;
- [initialize an Org Chart editor](#org-chart-editor) and easily create an org chart with desired structure and look;
- [switch between the diagram (org chart) and the editor views and save changes made in the editor to the diagram](#live-editor), etc.

## Diagram
------------------------

dhtmlxDiagram component provides the possibility to make various diagrams using a predefined set of shapes and connectors, and experiment with their look and feel via the "native" and custom CSS classes.

You can choose shapes of desired types, link them by suitable connectors and build any type of a diagram that will show the sequence of some operations making up a particular process, like this:<br /><br />

<div className="components_group">
	<div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/05_wide_diagram.html">
      <img src={require('./assets/icon_wide_diagram.png').default} />
      Wide Flowchart
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/08_vertical_decision_tree.html">
      <img src={require('./assets/icon_vert_decision_tree.png').default} />
      Vertical Decision Tree
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/09_data_planning.html">
      <img src={require('./assets/icon_data_planning_model.png').default} />
      Data Planning Model
    </a>
  </div>
</div>
<div className="components_group">
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/06_decision_tree.html">
      <img src={require('./assets/icon_decision_tree.png').default} />
      Decision Tree
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/07_activity.html">
      <img src={require('./assets/icon_activity.png').default} />
      Activity Diagram
    </a>
  </div>
</div>

<br /><br />
The following list of guides will help you to learn more about dhtmlxDiagram:

- [Common Guides](common_guides.md)
- [Diagram Guides](diagram_guides.md)

## Organizational Chart
------------------------

There is also a predefined diagram type for rendering an organizational chart - Org Chart. This type of a diagram contains a set of shapes connected by lines in a hierarchical order.

<img className="imgDiagram" src={require('./assets/diagram_basic.png').default} />


Each shape has a text and a colored header line. Shapes located on the same level have headers of identical color. Optionally, you can add an image into a shape.

<img className="imgDiagram" src={require('./assets/tutorial_start.png').default} />

The following list of guides will help you to learn more about Org Chart:

- [Common Guides](common_guides.md)
- [Org Chart Guides](org_chart_guides.md)

## Custom Diagram

You can build your own diagram or organizational chart by creating custom shapes of the desired appearance and linking them by suitable connectors, as in:

<div className="components_group">
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/02_life_cycle_diagram.html">
      <img src={require('./assets/sticky.png').default} />
      Life Cycle Diagram
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/04_venn_diagram.html">
      <img src={require('./assets/venn.png').default} />
      Venn Diagram
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/10_uml_class_diagram.html">
      <img src={require('./assets/html.png').default} />
      UML Class Diagram
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/03_network_diagram.html">
      <img src={require('./assets/network.png').default} />
      Network Diagram
    </a>
  </div>
  <div>
    <a href="https://docs.dhtmlx.com/diagram/samples/03_customization/01_medical_hierarchy.html">
      <img src={require('./assets/medical_hierarchy.png').default} />
      Medical Hierarchy
    </a>
  </div>
</div>
<br /><br />

For more details about creating a custom shape, see the [Configuring Diagram](common_guides/configuration.md#creating-custom-shapes) article.

## Mixed Diagram

In addition to creating usual Diagram or Org Chart, dhtmlxDiagram provides a great opportunity to combine Diagram with Org Chart into a single diagram.

<img className="imgDiagram" src={require('./assets/mixed.png').default} />

For more information about building a mixed diagram, see the following articles:

- [Diagram Shapes and Connectors](diagram_guides/shapes_arrows_list.md#creating-mixed-diagram)
- [Org Chart Shapes and Connectors](orgchart_guides/orgchart_shapes_types.md#creating-mixed-org-chart)

## Diagram Editor

dhtmlxDiagram goes with an [editor that lets you build your own diagram](diagram_guides/editor_mode.md): you need just to choose desired shapes and set connectors between them. Besides you can:

- set precise positioning for shapes;
- define their width and height;
- specify the angle of rotation for a shape, if necessary;
- define the content and look of a shape: set a suitable shape color, define outline settings, insert a text inside and adjust its look and feel;
- modify the appearance of connectors.

<img className="imgDiagram" src={require('./assets/diagram_editor_new1.png').default} />

There is a great possibility to set the size of the left panel, create sections for dividing shapes into groups and structuring them in the left panel. Besides, you can configure the right panel for editing a custom shape.

<img className="imgDiagram" src={require('./assets/right_panel.png').default} />


You can read more information about [Diagram Editor](diagram_guides/editor_mode.md).

## Org Chart Editor
--------------------

The Org Chart Editor is a part of the dhtmlxDiagram library that allows building an org chart quickly: you need to select a shape and add a new child for it. Also you can:

- set precise positioning for shapes;
- define their width and height;
- edit the content of a shape;
- set a suitable color of a shape header.

<img className="imgDiagram" src={require('./assets/orgcard_editor.png').default} />

You can read more information about [Org Chart Editor](orgchart_guides/editor_mode.md).

## Live Editor
-------------

You can easily make changes to the diagram (or organizational chart) via switching between the diagram and the editor views. All changes made in the editor can be saved to the diagram.

<img className="imgDiagram" src={require('./assets/live_diagram.png').default} />

For more information about Live Editor, see the related samples:

- <a href="https://docs.dhtmlx.com/diagram/samples/06_diagram_editor/02_live_edit.html">Live diagram edit - DHTMLX Diagram</a>
- <a href="https://docs.dhtmlx.com/diagram/samples/05_org_chart_editor/03_live_edit.html">Live Org chart edit - DHTMLX Diagram</a>

## Shape Search
---------------

dhtmlxDiagram provides you with a set of API that you can apply in order to make working with a Diagram more convenient.
For example, you can implement a feature of searching a shape on request that helps you to simplify work with large diagrams.

<div style={{textAlign: "center"}}>
  <img className="imgDiagram" src={require('./assets/search_shape.png').default} />
  <a href="https://docs.dhtmlx.com/diagram/samples/04_api/05_shape_search.html">
    Shape search - DHTMLX Diagram
  </a>
</div>

## Diagram Scale
----------------

You can apply the zoom template to your diagram to be able to change its appearance via zooming the diagram in or out. Besides, you can make it possible to user to get the detailed information on the selected shape.

<div style={{textAlign: "center"}}>
  <img className="imgDiagram" src={require('./assets/zoom.png').default} />
  <a href="https://docs.dhtmlx.com/diagram/samples/04_api/06_zoom_template.html">
    Diagram template change while zooming - DHTMLX Diagram
  </a>
</div>


## What's Next
--------------

You can also skip the basics and head for detailed guides and instructions:

- [API](api/refs/diagram.md)
- [Common Guides](common_guides.md)
- [Diagram Guides](diagram_guides.md)
- [Org Chart Guides](org_chart_guides.md)
