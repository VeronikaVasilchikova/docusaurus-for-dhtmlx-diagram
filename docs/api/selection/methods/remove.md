remove
==========

@short:
	unselects a previously selected shape

@params:
- id		string,number		optional, the shape id

@returns:
- result		boolean			<i>true</i> if the shape is unselected, otherwise <i>false</i>

@example:
diagram.selection.remove("1"); // -> true
diagram.paint();


@template:	api_method
@descr:
{{note Please note that you need to call the paint() method to repaint the diagram after removing selection.}}

@relatedapi:
	api/selection/methods/add.md
	api/selection/methods/getid.md
    api/selection/methods/getitem.md
@relatedsample:
	01_org_chart/05_selection.html

@related:
	common_guides/manipulating_shapes.md#selectingshapes
	common_guides/configuration.md#selectingshapes

