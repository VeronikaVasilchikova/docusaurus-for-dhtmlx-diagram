getItem
===========

@short: 
	returns the object of a shape by its id
	
@params:

- id		string,number		the id of a selected shape

@returns:

- shape    	object      	the object of a shape

@example:

var shape = diagram.data.getItem(123);


@template:	api_method
@descr:

You can access the original properties of a shape like this:

~~~js
var shape = diagram.data.getItem(123);
var text = shape.text;
~~~

@relatedapi:	
	api/data/methods/getid.md
	api/data/methods/getindex.md
    api/data/methods/update.md
	
@related:
	common_guides/manipulating_shapes.md#gettingshape