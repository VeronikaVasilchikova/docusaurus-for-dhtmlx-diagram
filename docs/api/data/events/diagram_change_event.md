Change
=========

@short:
	fires on changes in the dataset of the diagram
    
@params:
* id    		string,number		the id of the changed shape
* status 		string				the status of the change:"add","update","delete"
* shape			object				the object of the changed shape

@example:
diagram.events.on("Change",function(id,status,shape){
	console.log("The shape has been updated");
});

@template: api_event
@descr:
There are cases when the handler function doesn't take any parameters, e.g. while a data set is parsed into the diagram of if all shapes are removed.