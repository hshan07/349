'use strict'; 

/* exported ModelModule */
/* The above comment disables the JSHint warning of ModelModule being defined but not used. */

var mmap;

var markers = [];

var ModelModule = (function() {
  var AbstractModel = function() {
    this.listeners = [];
  };


  _.extend(AbstractModel.prototype, {
    addListener: function(listener) {
      this.listeners.push(listener);
    },

    removeListener: function(listener) {
      var index = this.listeners.indexOf(listener);
              if (index !== -1) {
                  this.listeners.splice(index, 1);
              }
    },


  });



  var BuildingModel = function(name, code) {
    AbstractModel.apply(this, arguments);
    this.build_name = name;
    this.build_code = code;
    this.checkedornot = false;
  };

  _.extend(BuildingModel.prototype, AbstractModel.prototype, {

  });




  var BuildingListModel = function() {
    AbstractModel.apply(this, arguments);
      this.buildinglist = [];
  };

  _.extend(BuildingListModel.prototype, AbstractModel.prototype, {
      addbuilding: function(BuildingModel) {
        this.buildinglist.push(BuildingModel);
      },

      flag: function(name) {
        for(var i = 0; i < this.buildinglist.length; i++) {
            if(this.buildinglist[i].build_name===name) {
              if(this.buildinglist[i].checkedornot===true) {
                this.buildinglist[i].checkedornot=false;
                document.getElementById(name).childNodes[1].checked = false;
                document.getElementById(name).style.backgroundColor = 'white';
                for(var j =0;j<markers.length;j++) {
                  (function() {
                    if(markers[j].name === name) { 
                      markers[j].setMap(null);
                    }
                  }())
                }
              } else {
                this.buildinglist[i].checkedornot=true;
                document.getElementById(name).childNodes[1].checked = true;
                document.getElementById(name).style.backgroundColor = '#6699FF';
                $.ajax({
                  url:'http://maps.googleapis.com/maps/api/geocode/json?address='+name+ ' Waterloo'+'&sensor=false',
                  type: 'POST',
                    success:function(res){
                      var loc = new google.maps.LatLng(res.results[0].geometry.location.lat,res.results[0].geometry.location.lng);
                      var find = false;
                      for(var j =0;j<markers.length;j++) {
                        (function() {
                        if(markers[j].name === name) { 
                          find=true; 
                          markers[j].setMap(mmap);
                        }
                        }())
                      };
                      if(find ===false ) {
                        markers.push(new google.maps.Marker({
                        position: loc,
                        map: mmap,
                        name: name
                        }));
                    }
                  }
                });
              }
            }
        }
      }
  });

  var map = function() {
      this.init = function() {
      var myOptions = {
      center : new google.maps.LatLng(43.472940, -80.542284),
      zoom: 15
      };
      mmap = new google.maps.Map(document.getElementById('mymap'),myOptions);
    }
  };

  return {
    BuildingModel: BuildingModel,
    BuildingListModel: BuildingListModel,
    map: map
  };
})();