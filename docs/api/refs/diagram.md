API 
=============

<div class='h2' id="methods">Methods</div>

{{api
- api/diagram_addshape.md - creates a custom shape; sets options for its editing in the right panel of the editor
- api/diagram_autoplace.md - automatically arranges connected diagram shapes
- api/diagram_collapseitem.md - hides all children of the target shape
- api/diagram_destructor.md - removes a diagram instance and releases occupied resources
- api/diagram_expanditem.md - shows all children of the target shape
- api/diagram_getscrollstate.md - returns the position of the diagram inner scroll
- api/diagram_locate.md - gets the id of an item from the specified HTML event or tag
- api/diagram_paint.md - repaints the diagram
- api/diagram_scrollto.md - sets the inner scroll of the diagram to the specified position
- api/diagram_showitem.md - adjusts scroll to make the target shape visible
}}

<div class='h2' id="events">Events</div>

{{api
- api/diagram_onaftercollapse_event.md - fires after a shape has been collapsed
- api/diagram_onafterexpand_event.md - fires after a shape has been expanded
- api/diagram_onbeforecollapse_event.md - fires before collapsing a shape
- api/diagram_onbeforeexpand_event.md - fires before expanding a shape
- api/diagram_emptyareaclick_event.md - fires on clicking an empty space in the editor
- api/diagram_lineclick_event.md - fires on clicking a connector line
- api/diagram_onscroll_event.md - fires when a diagram is being scrolled
- api/diagram_onshapeclick_event.md - fires on clicking a shape
- api/diagram_onshapedblclick_event.md - fires on double-clicking a shape
- api/diagram_shapehover_event.md - fires on hovering over a shape in the editor
- api/diagram_shapeiconclick_event.md - fires on clicking a toolbar icon 
- api/diagram_shapemousedown_event.md - fires when the left mouse button is moved down over a shape 
}}

<div class='h2' id="config">Properties</div>

{{api
- api/diagram_autoplacement_config.md - sets configuration for autoplacement
- api/diagram_defaultlinktype_config.md - the default type of a connector
- api/diagram_defaults_config.md - the default configuration of a shape
- api/diagram_defaultshapetype_config.md - the default type of a shape
- api/diagram_gridstep_config.md - defines the size of a grid step that defines the step of moving a shape
- api/diagram_linegap_config.md - adds an offset for two connected shapes, and fills the gap with an additional line
- api/diagram_margin_config.md - margins for autoplacement in the diagram
- api/diagram_scale_config.md - defines the diagram scale
- api/diagram_select_config.md - enables selection in the diagram
- api/diagram_toolbar_config.md - sets a toolbar with buttons for shapes
- api/diagram_type_config.md - defines the type of a diagram
}}

<div class='h2' id="datacollection">DataCollection</div>

{{block Methods }}
{{api
	- api/data/methods/add.md - adds a new shape to the diagram
    - api/data/methods/copy.md - creates a copy of a shape at the defined position
	- api/data/methods/exists.md - checks whether the specified shape exists in the diagram
	- api/data/methods/filter.md - filters the shapes in the diagram by the specified key
	- api/data/methods/find.md - finds the shape that corresponds to the specified parameters
	- api/data/methods/findall.md - finds all the shapes that correspond to the specified parameters
	- api/data/methods/getid.md - returns the id of the shape by its index
	- api/data/methods/getindex.md - returns the index of the shape by its id
	- api/data/methods/getitem.md - returns the object of a shape by its id
    - api/data/methods/getnearid.md - returns the id of a shape which is nearest to the specified one
	- api/data/methods/load.md - loads data from an external file
	- api/data/methods/map.md - iterates through all items of the diagram
    - api/data/methods/move.md - moves a shape to the defined position
	- api/data/methods/parse.md - loads data from a local data source
	- api/data/methods/remove.md - deletes the specified shape from the diagram
	- api/data/methods/removeall.md - deletes all shapes from the diagram
	- api/data/methods/serialize.md - serializes the diagram data into an array of JSON objects
	- api/data/methods/update.md - updates properties of the shape
}}
{{end}}

{{block Events }}
{{api
	- api/data/events/diagram_onafteradd_event.md - fires after adding a shape
    - api/data/events/diagram_onbeforeadd_event.md - fires before adding a shape
    - api/data/events/diagram_change_event.md - fires on changes in the diagram 
	- api/data/events/diagram_load_event.md - fires on loading data into the diagram  
}}
{{end}}

<div class='h2' id="selection">Selection</div>

{{block Methods }}
{{api
	- api/selection/methods/add.md - selects the specified shape
	- api/selection/methods/getid.md -  returns the id of a selected shape
    - api/selection/methods/getitem.md -  returns the object of a selected shape
	- api/selection/methods/remove.md - unselects a previously selected shape
}}
{{end}}

{{block Events }}
{{api
	- api/selection/events/diagram_onafterselect_event.md - fires after selecting a shape
	- api/selection/events/diagram_onafterunselect_event.md - fires after unselecting a shape
	- api/selection/events/diagram_onbeforeselect_event.md - fires on selecting a shape, but before the shape is really selected
	- api/selection/events/diagram_onbeforeunselect_event.md - fires on unselecting a shape, but before the shape is really unselected
}}
{{end}}

<div class='h2' id="export">Export Methods</div>

{{api
	- api/export/pdf.md - exports a diagram to a PDF file
    - api/export/png.md - exports a diagram to a PNG file
}}

<div class='h2' id="events_bus">Events Bus Methods</div>

{{api
    - api/events/detach.md - detaches a handler from an event (which was attached before by the on() method)
	- api/events/fire.md - triggers an inner event
    - api/events/on.md - attaches a handler to an inner event of Diagram
}}


@index:
- api/refs/diagram_methods.md
- api/refs/diagram_events.md
- api/refs/diagram_props.md

- api/data/datacollection.md
- api/selection/selection.md

- api/refs/export_methods.md
- api/refs/events_methods.md
