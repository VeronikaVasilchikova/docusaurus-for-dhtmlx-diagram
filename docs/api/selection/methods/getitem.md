getItem
===========

@short:
returns the object of the selected shape

@returns:
- shape		object		the object of a selected shape


@example:
var shape = diagram.selection.getItem();
// -> {id: "3", text: "Technical Director", title: "Jerry Wagner", …}


@template: api_method
@descr:
Check all available properties of shape objects in [Diagram](diagram_guides/shapes_arrows_list.md#shapeattrs) and in [Org Chart](orgchart_guides/orgchart_shapes_types.md#shapeattrs).

@relatedapi:
- api/selection/methods/add.md
- api/selection/methods/getid.md
- api/selection/methods/remove.md

@related:
    common_guides/manipulating_shapes.md#selectingshapes
    common_guides/configuration.md#selectingshapes