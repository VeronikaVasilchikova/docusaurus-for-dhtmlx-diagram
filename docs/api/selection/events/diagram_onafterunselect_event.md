AfterUnSelect
=============

@short:
	fires after unselecting a shape

@params:
- id	 	string,number 		the shape id


@example:
var diagram = new dhx.Diagram("diagram_container", { 
    type: "org", 
    select: true        
});

diagram.events.on("AfterUnSelect", function (id) {
	console.log(diagram.data.getItem(id).text + " was unselected");
});


@template:	api_event
@descr:



@relatedapi:
	- api/selection/events/diagram_onbeforeselect_event.md
	- api/selection/events/diagram_onafterselect_event.md
	- api/selection/events/diagram_onbeforeunselect_event.md

@relatedsample:
	- 01_org_chart/04_events.html
    
    
@related:
	common_guides/configuration.md#selectingshapes