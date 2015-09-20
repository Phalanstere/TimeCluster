/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

var timeCluster = function(list, timeframe, timefield) {
    "use strict";
    var self    = this;
    this.list   = [];
    
    this.sort = function(elems) {
        function compare(a,b) {
            if (a.time < b.time) { return -1; }
            if (a.time > b.time) { return 1;  }
            return 0;
        }
        elems.sort(compare);
};
    
    this.check_timeframe = function() {
        
    };
    
    
    this.init = function init() {
        var type, time, timestamp, date;
        
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
        
        
        }; 
    
    self.init();
    
};


module.exports = exports = timeCluster;




    




































