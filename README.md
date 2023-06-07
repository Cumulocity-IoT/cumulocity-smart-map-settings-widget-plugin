# Smart Map Settings Widget Plugin [<img width="35" src="https://user-images.githubusercontent.com/32765455/211497905-561e9197-18b9-43d5-a023-071d3635f4eb.png"/>](https://github.com/SoftwareAG/cumulocity-smart-map-settings-widget-plugin/releases/download/1.0.1/sag-ps-pkg-smartmap-settings-1.0.1.zip)

This widget 'Smart map settings' is micro frontend plugin and can be deployed in App Builder and Cockpit as a Cumulocity widget. It allows you to mark and create a Geography on specified location. After the Geography is created, it allows to create floors, Geofences and device positioning. This widget is used as configuration for Smart Map widget

### Please choose Smart Map Settings release based on Cumulocity/Application builder version:

|APPLICATION BUILDER | CUMULOCITY | SMART MAP SETTINGS WIDGET |
|--------------------|------------|---------------------------|
| 2.x.x(coming soon) | >= 1016.x.x| 1.x.x                     |  


![](https://user-images.githubusercontent.com/32765455/94546270-465a2080-026b-11eb-87f0-f99b739931c0.png)

## What's new?
*  **Smart Map Settings:** Smart Map Settings widget based on Angular 14. 
*  **Location Search:** Support for Location Search to find any location across globe.
*  **Geofences & Smart Rule:** Now User can configure geofences and Smart Rule for geofeces on Map.
*  **GeoJSON and SVG Support:** User can now also upload GeoJSON and SVG file for floor plan.
*  **Device Positioning:** Multiple devices can be positioned on the floor plan.
*  **Supports for Assets:** Device marker and Smart Rules for geofence also supports assets

## Features

* Add the Geography by drawing its location and entering the details.
* Edit the geography details and its location.
* Delete the geography.
* Add, Edit, Delete, Revert the floor plan of the geography after the addition of geography.
* Preview the floor plan image added.
* Rotate and positioned image using smart rotation point
* Devices can be marked on the map at floor level.
  
## Prerequisite
   Cumulocity c8ycli >=1016.x.x
   
## Installation

### Runtime Widget Deployment?

* This widget support runtime deployment. Download [Runtime Binary](https://github.com/SoftwareAG/cumulocity-smart-map-settings-widget-plugin/releases/download/1.0.1/sag-ps-pkg-smartmap-settings-1.0.1.zip) and install via Administrations --> Ecosystems --> Applications --> Packages


## QuickStart
  
This guide will teach you how to add widget in your existing or new dashboard.
  
1. Open you application from App Switcher
2. Add new dashboard or navigate to existing dashboard
3. Click `Add Widget`
4. Search  for `Smart Map settings`
5. Click `Save`
  
Congratulations! Smart Map settings is configured.

## User Guide
**Smart Map settings Details:**

*  **Configuration:** 
    * **Location Search URL:** User can configure any 3rd party location search API(Must be get request) which return json response with Latitude and Longitude coordinates for given search text.
    * **Latitude Field:** Latitude field name which is part of Location Search API Response.
    * **Longitude Field:** Longitude field name which is part of Location Search API Response.
    

*  **Geography:** 
    
    * Add the geography by clicking on the **+** button on the top right. 
    * When the map dialog opens, select the shapes (rectangle or polygon) to draw the geography co-ordinates. Then on finish of drawing, popup appears to enter the details of the building, which needs to be filled.
    * Multiple geography co-ordinates can be drawn.

    * ##### Table header details

        * **Id**:
            Managed object id.
        * **Name**:
            Name of the Geography.
        * **Asset type**:
            Type of the Geography. eg: Office, Production, Warehouse. 
        * **Location**:
            Location of the geography.
        * **Total floors**:
            Number of floor added to a geography.
        

*  **Floor:** 

    * To add floor, click on the respective geography row, which is expandable. Then click on **+** to add the floor. 
    * To preview the floor on added geography co-ordinates, click on **preview**.
    * To rotate / scale up/down, use smart rotation/scalling points(available for jpeg, png and svg).
    * Geofence along with Smart Rule can be configured on ground floor(level 0) only with help of draw tool available on the top right corner.
    * Devices can be marked on the image with the help of draw tool available on the top right.
    * Floor plan can be edited, clicking on the edit button.
    * To delete, click on the delete icon.
    * To revert back to the original image, click on revert button.
    * To save the added/edited/delete floors, click on **tick** button next to **+**. 

    * ##### Table header details

        * **Floor level**:
            Level of the floor.
        * **Status**:

            * Empty: Already available floor.
            * New: Newly added floor.
            * File changed: Floor plan changed.
            * Marked for deletion: Marked for deletion.
            * Geofences for deletion: Geofences for deletion.

        * **Geography**:
            Preview the geography to set image position/scalling, geofeces, device positions, etc.  
        * **Delete**:
            Marks the floor plan for deletion.
        * **Floor Plan**:
               * Upload/replace Floor Plan: User can upload new floor plan or replace existing floor plan.
               * Image types: JPG, JPEG, PNG and SVG file types are supported.
               * GeoJSON: User can also upload .json file which is valid GeoJSON file. To generate GeoJSON file, there are many  tools/editors are available. for example [Geojson Editor](https://geoman.io/geojson-editor)

        * **Revert**:
            Reverts back to the original state.

> **Note**  Only floorplan(image) can be edited. And unless the floors are saved, changes to the floors can not be seen.


## Troubleshooting
*  **Floor Plan not loaded:**
	* Verify that your device is located on floor plan.
	* Check and verify smart-map-settings widget for exact geo coordinates.
	* Check in browser console for any content security violation error. If any content violation error present then update content security policy in your app. Content security policy located in package.json file in your app. You can compare and update as per below example:
	```
	"contentSecurityPolicy": "base-uri 'none'; default-src 'self' 'unsafe-inline' http: https: ws: wss:; connect-src 'self' *.billwerk.com http: https: ws: wss:; script-src 'self' open.mapquestapi.com *.twitter.com *.twimg.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data: blob:; font-src * data:; frame-src *;"
	```
 
------------------------------
  
This widget is provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
_____________________
For more information you can Ask a Question in the [TECHcommunity Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
You can find additional information in the [Software AG TECHcommunity](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
