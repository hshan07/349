'use strict';

/* exported ViewModule */
/* The above comment disables the JSHint warning of ViewModule being defined but not used. */


var ViewModule = (function(BuildingModel) {

  var AbstractView = function(model) {
    this.model = model;
    this.model.addListener(this);
  };

  _.extend(AbstractView.prototype, {
    init: function() {

    }
  });

  var BuildingListView = function(model) {
    AbstractView.apply(this, arguments); 
    this.init = function() {
        var self = this;
        var buildingmodellist = this.model.buildinglist;
        var lb = document.getElementById('listbody');
        var tmpl = document.getElementById('checkboxtemplate');
        for(var i = 0; i<buildingmodellist.length; i++) {
          (function() {
            var newd = document.createElement('div');
            newd.innerHTML = tmpl.innerHTML;
            var bm = buildingmodellist[i];
            newd.childNodes[3].innerHTML = buildingmodellist[i].build_name + '(' + buildingmodellist[i].build_code + ')';
            newd.id = buildingmodellist[i].build_name;
            newd.addEventListener("click",function(){
              self.model.flag(newd.id);
            })
            lb.appendChild(newd);
          }())
        }
    };
  };

  _.extend(BuildingListView.prototype, AbstractView.prototype, {

  });
  /*

  var MapView = function(model) {
    AbstractView.apply(this, arguments);
    this.init = function() {
      var myOptions = {
      center : new google.maps.LatLng(43.472940, -80.542284),
      zoom: 16
      };
      var map = new google.maps.Map(document.getElementById('mymap'),myOptions);
      var marker = new google.maps.Marker({
        map: map,
        position: point
      });
      return {
        mm: map,
        marker: marker
      }
    };
  };

  _.extend(MapView.prototype, AbstractView.prototype, {

  });
*/
  return {
    BuildingListView: BuildingListView
  };
})(ModelModule.BuildingModel);
