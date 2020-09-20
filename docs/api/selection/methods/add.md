add
=========

@short:
	selects the specified shape

@params:
- id		string,number		the shape id



@example:
// diagram must be created with the "select:true" option
var diagram = new dhx.Diagram("diagram_container", { select: true });
diagram.data.parse(data);

diagram.selection.add("2");


@template:	api_method
@descr:


@relatedapi:
	api/selection/methods/remove.md
	api/selection/methods/getid.md
    api/selection/methods/getitem.md
@relatedsample:
	01_org_chart/05_selection.html
@related:
	common_guides/manipulating_shapes.md#selectingshapes
	common_guides/configuration.md#selectingshapes