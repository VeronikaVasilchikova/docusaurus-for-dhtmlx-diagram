findAll
=========

@short:
finds all the shapes that correspond to the specified parameters

@params:
- by			string,function			 the search criterion (either the key of the shape attribute or a filtering function)
- match 		string					 the value of the shape attribute

@returns:

- shapes		array		an array of matching shape objects

@example:
//searching for shapes by the attribute key
var shapes = diagram.data.findAll({by:"text",match:"Manager"});

//searching for shapes by the function
var shapes = diagram.data.findAll(function(shapes){
	if(shapes.text==="Manager"||shapes.text==="Marketer"){return true}
});

@template: api_method
@descr:

@relatedapi:
	api/data/methods/find.md
@related:
	common_guides/manipulating_shapes.md#findingnecessaryshape