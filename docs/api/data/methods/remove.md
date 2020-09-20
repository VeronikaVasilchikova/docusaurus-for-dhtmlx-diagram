remove
========

@short:
deletes the specified shape from the diagram

@params:
- id 		string,number			the id of the shape that should be deleted

@example:

diagram.data.remove("2");


@template: api_method
@descr:
In case of organogram, deleting a shape will remove the link to this shape and all child shapes as well.

@relatedsample:
01_org_chart/07_add_delete.html

@relatedapi:
api/data/methods/add.md
api/data/methods/removeall.md

@related:
    common_guides/manipulating_shapes.md#deletingshapes