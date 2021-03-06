---
id: migration
title: Migration to Newer Versions
slug: /migration.html
---

-----------------------

## 2.2 -> 3.0
------------

### Creating Custom Shapes

The way of creating custom shapes in Diagram and Org Chart has been changed, simplified and improved.

Starting from v3.0, in order to create your own types of shapes, the new **addShape** method should be used instead of the *diagram.flowShapes* object.
The method provides you with the ability to create HTML templates that will work in different browsers. Besides, the method allows creating and editing custom shapes in Diagram and Org Chart Editors.

Despite the *diagram.flowShapes* object has been deprecated, it will still continue working.

### Toolbar buttons in Editors

Before version 3.0 you were able to show/hide toolbar buttons in Diagram and Org Chart editors via the related *showApply, showReset, showExport* configuration properties of the Editors.

In the version 3.0 these properties are deprecated and removed. Instead, the **controls** config property that contains a set of *control_name:value* pairs is added. Thus, the properties are replaced with:

- showApply -> controls.apply
- showReset -> controls.reset
- showExport -> controls.export

~~~js
var editor = new dhx.DiagramEditor(document.body, {
    controls: {
        apply: false,
        reset: false,
        export: true
    },
});
~~~
To enable/disable a toolbar button you need to specify the value of the control to *true* (by default) or *false*.

See the full lists of the available controls in the [Diagram Editor](diagram_guides/editor_mode.md#configurationproperties) and [Org Chart Editor](orgchart_guides/editor_mode.md#configurationproperties) articles.

## 1.1 -> 2.0
-------------

### Removed API

- diagram.eachChild

### Changed API

- diagram.addItem -> [diagram.data.add](api/data/methods/add.md)
- diagram.attachEvent -> [diagram.events.on](api/events/on.md)
- diagram.callEvent -> [diagram.events.fire](api/events/fire.md)
- diagram.clearAll -> [diagram.data.removeAll](api/data/methods/removeall.md)
- diagram.deleteItem -> [diagram.data.remove](api/data/methods/remove.md)
- diagram.detachEvent -> [diagram.events.detach](api/events/detach.md)
- diagram.eachItem -> [diagram.data.map](api/data/methods/map.md)
- diagram.getItem -> [diagram.data.getItem](api/data/methods/getitem.md)
- diagram.getSelectedId -> [diagram.selection.getId](api/selection/methods/getid.md)
- diagram.load -> [diagram.data.load](api/data/methods/load.md)
- diagram.parse -> [diagram.data.parse](api/data/methods/parse.md)
- diagram.selectItem -> [diagram.selection.add](api/selection/methods/add.md)
- diagram.serialize -> [diagram.data.serialize](api/data/methods/serialize.md)
- diagram.unselectItem -> [diagram.selection.remove](api/selection/methods/remove.md)
- diagram.updateItem -> [diagram.data.update](api/data/methods/update.md)
