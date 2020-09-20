BeforeSelect
=============

@short:
	fires on selecting a shape, but before the shape is really selected

@params:
- id	 	string,number 		the shape id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("BeforeSelect", function(id) {
	console.log("Selecting " + diagram.data.getItem(id).text);
	return true;
});


@template:	api_event
@descr:

Returning *false* from the handler will block the selection.

@relatedapi:
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onbeforeunselect_event.md
	- api/selection/events/diagram_onafterunselect_event.md

@relatedsample:
	- 01_org_chart/04_events.html
    
    
@related:
	common_guides/configuration.md#selectingshapes