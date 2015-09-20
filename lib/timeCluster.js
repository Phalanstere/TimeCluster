/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

var timeCluster = function(list, timeframe, timefield) {
    "use strict";
    var self            = this;
    this.list           = [];
    this.cluster        = [];
    
    this.sort = function(elems) {
        function compare(a,b) {
            if (a.time < b.time) { return -1; }
            if (a.time > b.time) { return 1;  }
            return 0;
        }
        elems.sort(compare);
};
    
    this.check_timeframe = function() {
        if (! timeframe) 
            {
            timeframe = "day";
            }
        
        var props = ["second", "minute", "hour", "day", "week", "month", "year"], 
            i, 
            found = false;
        
        if (typeof(timeframe) !== "string")
            {
            console.log("error: your timeframe is not a string");    
            return;    
            }
        
        for (i = 0; i < props.length; i++)
            {
            if (timeframe === props[i]) { found = true; }   
            }
            
         return found;
    };
    
    
    this.init = function init() {
        var type, time, timestamp, date;
        
        // this is error tolerant - when the parameter is wrongly set or absent, timeframe will be a day
        if (self.check_timeframe() === false) 
            {
            timeframe = "day";    
            console.log("warning: your timeframe is invalid. It is now set to a day");
            return;     
            }
        
        if (! timefield) { timefield = "time" };
        
        if (Array.isArray(list) === false) {
                console.log("error: array expected");
                return; 
        }
        
        if (list.length === 0) {
            console.log("warning - the array is empty");
            return;
            }
        
        type = typeof(list[0]);
        
        if (type !== "object") {
            console.log("the array contains " + type + "s instead of objects");
            return; 
            }


        time = timefield || "time";
                      
        if (! list[0][time])
            {
            console.log("the object has no property " + time);
            return;    
            }

       timestamp = list[0][time];      
       date = new Date(timestamp);
       if (date == "Invalid Date")
            {
            console.log("Invalid date - It seems that the field does not contain timestamps");
            return;
            } 
        
        /// everything is ok ///       
        self.sort(list);
        
        self.get_timeframe();
        self.clustering();
        }; 
    
    
    /// 
    this.get_timeframe = function()
        {
        switch(timeframe)
            {
            case "minute":
                self.timeframe = 1000 * 60;
            break;    
                
            case "hour":
                self.timeframe = 1000*60*60;
            break;    
                
            case "day":
             self.timeframe = 1000*60*60*24;
            break;    
            
            case "week":
             self.timeframe = 1000*60*60*24*7;
            break;              
            
            case "month":
             self.timeframe = 1000*60*60*24*30;
            break;
            
            case "year":
             self.timeframe = 1000*60*60*24*30*365;
            break;            
            
            default:
             console.log("nicht definiert");
            break;
            }    
        };
    
    
    this.check_cluster = function(start) {
        var j, found = false, cluster
        for (j = 0; j < self.cluster.length; j++) {
           if (self.cluster[j].time === start) 
            {
            found = true;
            cluster = self.cluster[j];  
            } 
        }
        
        if (found === false)
            {
            cluster = self.new_cluster(start);
            }
        return cluster;
    };
    
    this.new_cluster = function(start) {
      var obj = { time: start,
                   list: [] 
                   };
       self.cluster.push(obj);
       return obj;              
    };
    
    
    this.info = function() {
       var i, 
           date;
       
       for (i = 0; i < self.cluster.length; i++) {
         date = new Date(self.cluster[i].time);
         console.log(date);   
       }
    };
    
    
    this.clustering = function() {
        var i, el, ts, modulo, start, cluster;
        
        ts = list[0].time;
        modulo = ts % self.timeframe;
        start = ts - modulo;        

        
        for (i = 0; i < list.length; i++) {
            el = list[i];
            ts = el[timefield];
            modulo = ts % self.timeframe;   
            start = ts - modulo;      
            cluster = self.check_cluster(start);
            cluster.list.push(el);             
                          
        };
        
        // console.log("Anzahl Cluster " + self.cluster.length + " Liste " + list.length);
        // self.info();

    };
    
    
    self.init();
    
    return self.cluster;    
};


module.exports = exports = timeCluster;




    




































