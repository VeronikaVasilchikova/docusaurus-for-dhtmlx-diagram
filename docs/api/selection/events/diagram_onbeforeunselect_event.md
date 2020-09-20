BeforeUnSelect
=============

@short:
	fires on unselecting a shape, but before the shape is really unselected

@params:
- id	 	string,number 		the shape id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeUnSelect", function(id) {
	console.log("Unselecting " + diagram.data.getItem(id).text);
	return true;
});


@template:	api_event
@descr:

Returning *false* from the event handler will block unselection.

@relatedapi:
	- api/selection/events/diagram_onbeforeselect_event.md
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onafterunselect_event.md

@relatedsample:
	- 01_org_chart/04_events.html
    
@related:
	common_guides/configuration.md#selectingshapes