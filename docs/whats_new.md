---
id: whats_new
title: What's New
slug: /whats_new.html
---
----------------------
If you are updating Diagram from an older version, check [Migration to Newer Version](migration.md) for details.

## Version 3.0.2
------------------

<span className="rel_date_pivot">released on July 14, 2020</span>

### Fixes

- Fix issue with import data from JSON to Org Chart Editor
- Fix the incorrect work of the addShape() method while configuring Right Panel
- Improved behavior of historyManager in Editors (Undo/Redo buttons)

## Version 3.0.1
------------------

<span className="rel_date_pivot">released on May 29, 2020</span>

### Fixes

- Fix issue with the [autoPlace()](api/diagram_autoplace.md) method
- Fix issue with PNG/PDF export modules

## Version 3.0
--------------------

<span className="rel_date_pivot">released on May 12, 2020</span>

### Breaking changes

The new update introduces some changes and improvements. Check the [Migration](migration.md) article to keep in step with the latest version.

### New functionality

- New [autoPlace](api/diagram_autoplace.md) method and [autoplacement](api/diagram_autoplacement_config.md) property are added for [auto-arranging connected diagram shapes](common_guides/manipulating_shapes.md#arrangingshapesautomatically) in the hierarchical structure
- [Ability to set the default configuration of a shape](common_guides/configuration.md#settingthedefaultconfigurationofashape)
- The [addShape](api/diagram_addshape.md) method for [creating custom shapes](common_guides/configuration.md#creatingcustomshapes) in Diagram and Org Chart is added
- Ability to create custom shapes in [Diagram Editor](diagram_guides/editor_mode.md#rightpanelcustomization) and [Org Chart Editor](orgchart_guides/editor_mode.md#rightpanelcustomization) via the [addShape](api/diagram_addshape.md) method of Diagram
- New configuration properties of [Diagram Editor](diagram_guides/editor_mode.md#configurationproperties): defaults, shapeSections, shapeBarWidth, scalePreview, scale, gapPreview, controls
- New configuration property of [Org Chart Editor](orgchart_guides/editor_mode.md#configurationproperties): defaults, scale, controls
- The *Grid Step* sidebar option is added to [Diagram](diagram_guides/editor_mode.md) and [Org Chart](orgchart_guides/editor_mode.md) editors
- Ability to hide/show any toolbar button of Editors as well as the *Grid Step* sidebar option via the `controls` configuration property
- Ability to specify sidebar options for editing custom properties in the right panel of [Diagram Editor](diagram_guides/editor_mode.md#rightpanelcustomization) and [Org Chart Editor](orgchart_guides/editor_mode.md#rightpanelcustomization) via the `properties` attribute of the [addShape](api/diagram_addshape.md) method
- [Ability to create sections for structuring shapes in the left panel of the diagram editor](diagram_guides/editor_mode.md#leftpanelcustomization)
- [Possibility to customize the appearance of shapes rendered in the left panel of Diagram Editor](diagram_guides__editor_mode.html#leftpanelcustomization) via the `preview` property of the [defaults](diagram_guides/editor_mode.md#configurationproperties) attribute
- Ability to select, copy, paste, delete, move several shapes in [Diagram Editor](diagram_guides/editor_mode.md#manipulatingmultipleshapes) and [Org Chart Editor](orgchart_guides/editor_mode.md#manipulatingmultipleshapes)
- Ability to select and delete several connectors in [Diagram Editor](diagram_guides/editor_mode.md#manipulatingmultipleshapes)
- Ability to import data from a JSON file to a [diagram](diagram_guides/editor_mode.md) or [org chart](orgchart_guides/editor_mode.md) editor via the "Import Data" button
- The [destructor](api/diagram_destructor.md) method is added

### Updates

- Ability to use custom HTML templates in IE
- Diagram and Org Chart Editor UI was updated and improved
- Ability to connect shapes from center to center
- A set of hotkeys for the editor mode is updated
- The ability to set a connector line to the *text* shape of Diagram Editor
- Auto-fit of the content width of the *text* shape is added


## Version 2.2.1
------------------

<span className="rel_date_pivot">released on December 30, 2019</span>

### Fixes

- Issue with IE support for the image loader in Diagram editor

## Version 2.2
------------------
<span className="rel_date_pivot">released on November 27, 2019</span>

### New functionality

- Ability to create custom types of shapes for [Diagram](diagram_guides/shapes_arrows_list.md#templatesforshapes) and [Org Chart](orgchart_guides/orgchart_shapes_types.md#templatesforshapes) via using SVG and HTML templates
- Ability [to build mixed diagrams](diagram_guides/shapes_arrows_list.md#creatingmixeddiagram) and [org charts](orgchart_guides/orgchart_shapes_types.md#creatingmixedorgchart)
- Ability to export data from the [Diagram Editor](diagram_guides/editor_mode.md#configurationproperties) and [Org Chart Editor](orgchart_guides/editor_mode.md#configurationproperties) to the JSON format
- The showExport option and ExportData event are added in [Diagram Editor](diagram_guides/editor_mode.md) and [Org Chart Editor](orgchart_guides/editor_mode.md)

### Fixes

- Fix the issue with exporting a diagram into the PDF and PNG formats
- Fix incorrect work of the mouse events
- Fix the issue with deleting child shapes in org charts
- Fix incorrect work of the right and left panels in Diagram Editor
- Fix the issue with auto-generating of the unique id's of shapes and connectors


## Version 2.1.1
------------------
<span className="rel_date_pivot">released on October 11, 2019</span>

### Fixes

- Issues with an img-card in IE

## Version 2.1
------------------
<span className="rel_date_pivot">released on May 22, 2017</span>

### New functionality

- Handy [Diagram editor](diagram_guides/editor_mode.md) for building clear-cut diagrams
- Enriched set of configuration options for shapes and connectors of [Diagram](diagram_guides/shapes_arrows_list.md) and [Org Chart](orgchart_guides/orgchart_shapes_types.md)
- Greater possibilities for customizing [Diagrams](diagram_guides/customization.md) and [Org Charts](orgchart_guides/customization.md)

### Updates

- [Hotkeys](diagram_guides/editor_mode.md#hotkeys) are added for the editor mode
- New events api/diagram_shapehover_event.md and api/diagram_emptyareaclick_event.md are added
- The api/diagram_linegap_config.md config option is added

## Version 2.0
-------------
<span className="rel_date_pivot">released on February 15, 2017</span>

### Breaking Change

The API structure was totally reorganized and improved to simplify work with it. Follow the [Migration](migration.md) article to learn all the changes.

### New functionality

- Ability to [create diagrams of any type](overview.md) and stylize them
- [Variety of shapes and connectors](diagram_guides/shapes_arrows_list.md)
- [Export to PDF format](common_guides/data_export.md#exportingdiagramtopdf)
- [Export to PNG format](common_guides/data_export.md#exportingdiagramtopng)

### Updates

- Ability to [find necessary shapes](common_guides/manipulating_shapes.md#findingnecessaryshape)
- Ability to [filter shapes by specified criteria](common_guides/manipulating_shapes.md#filteringshapes)
- Ability to [add a toolbar with icons for shapes](common_guides/configuration.md#settingtoolbarforshapes) to simplify interaction with them
- Enhanced performance
- Ability to adjust to any HTML container and built-in auto-sizing


## Version 1.1
-------------------
<span className="rel_date_pivot">released on December 5, 2017</span>

### New functionality

- [Using Organization Chart in the editor mode](orgchart_guides/editor_mode.md)
- Ability to [save and restore the state](common_guides/configuration.md#savingandrestoringstate)
- Extended [customization possibilities](diagram_guides/customization.md)

### Updates

- [Extended API](api/refs/diagram.md): new methods, properties and events

## Version 1.0
-------------------------

<span className="rel_date_pivot">released on September 29, 2017</span>

### Initial functionality

- Organogram mode
- Vertical and horizontal autoplacement strategies
- Loading data from JSON
- API to manage data and branch state
