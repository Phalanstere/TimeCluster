# TimeCluster

## Description
It might occur to you that you have a lot of timestamped objects that you want to cluster. 




## Features:

The idea behind this library is to cluster a given array of timestamped objects.  

```html
    // you can embed the file via node.js require command 
	var TimeCluster = require("./lib/timeCluster.js"); 
```		
- then you define an object and pass an array of timestamped objects
	
```html	
	var x = new TimeCluster(list);
```		
- you can specify a timframe, like this: 

```html		
	var x = new TimeCluster(list, "day"); // valid calls are "minute", "hour", "day", "week", "year"
```	

- and you can also specify the field which contains the timestamp

```html			
	var x = new TimeCluster(list, "day", "date");  // default is "time"	
```	

- The functions returns an array of clustered objects

  
