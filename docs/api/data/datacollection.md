DataCollection
=======

<div class='h2' id="methods">Methods</div>

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

<div class='h2' id="events">Events</div>

{{api
	- api/data/events/diagram_onafteradd_event.md - fires after adding a shape
    - api/data/events/diagram_onbeforeadd_event.md - fires before adding a shape
    - api/data/events/diagram_change_event.md - fires on changes in the diagram 
	- api/data/events/diagram_load_event.md - fires on loading data into the diagram  
}}

@index:
- api/data/methods/data_methods.md
- api/data/events/data_events.md