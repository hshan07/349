'use strict'; 

/* exported ServiceModule */
/* The above comment disables the JSHint warning of ServiceModule being defined but not used. */

var ServiceModule = (function() {

  var UWaterlooService = function() {
    this.key = '2fc2cee3e20d957924d36373e374e0bf';
    this.urlPrefix = 'https://api.uwaterloo.ca/v2';
  };


  _.extend(UWaterlooService.prototype, {
    queryBuildings: function() {
      var building_list = []; 
      var listJSON = localStorage.getItem('buildlist');
      if(listJSON) {
        var obj = JSON.parse(listJSON);
        for (var i = 0; i < obj.data.length ;i++) {
          building_list.push([obj.data[i].building_name,obj.data[i].building_code]);
            }
      } else {
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState===4 && xmlhttp.status===200) {
        var list = xmlhttp.responseText;
        localStorage.setItem('buildlist',list);
        var obj = JSON.parse(list);
        for (var i = 0; i < obj.data.length ;i++) {
          building_list.push([obj.data[i].building_name,obj.data[i].building_code]);
          }
        }
      };
      xmlhttp.open('GET','https://api.uwaterloo.ca/v2/buildings/list.json?key=2fc2cee3e20d957924d36373e374e0bf',true);
      xmlhttp.send();
    }
      return building_list;
    }
  });


  return {
    UWaterlooService: UWaterlooService,
  };

})();




