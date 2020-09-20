AfterAdd
=============

@short: fires after adding a shape
	
@params:

- id		string,number		the id of a shape which was added

@example:
diagram.events.on("AfterAdd", function(id){
	console.log("A new item is added");
});


@template:	api_event
@descr:

Event can be used to provide default values or a default formatting for the shapes data.

@relatedapi:
	- api/data/events/diagram_onbeforeadd_event.md

@relatedsample:
	- 01_org_chart/04_events.html