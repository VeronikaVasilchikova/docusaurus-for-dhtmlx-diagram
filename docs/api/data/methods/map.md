map
=========

@short:
iterates through all items of the diagram

@params:
- handler			function		a function that will be called for each shape of a diagram

@example:
//getting ids of all elements of the diagram (shapes and links)
diagram.data.map(function(item){
    console.log(item.id);
});


@template: api_method
@descr: