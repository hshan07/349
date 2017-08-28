'use strict';

(function(Models, Views, Services) {
  $(document).ready(function() {
  	var uwaterlooService = new Services.UWaterlooService();
  	var buildinglist = uwaterlooService.queryBuildings();
  	var models = ModelModule;
  	var blm = new models.BuildingListModel();
  	var views = ViewModule;
  	for(var i = 0; i < buildinglist.length; i++) {
  		var bm = new models.BuildingModel(buildinglist[i][0],buildinglist[i][1]);
  		blm.addbuilding(bm);
  	}
  	var map = new models.map();
  	window.onload = map.init();
  	var blv = new views.BuildingListView(blm);
  	blv.init();
  	var lb = document.getElementById('listbody').childNodes;
  	var input = document.getElementById('searchfield');
  	input.addEventListener('keyup',function(){
  		if(input.value ==='') {
  			for(var i=0;i<buildinglist.length; i++) {
  			//(function(){
  				lb[i].style.display = 'block';
  		//	}());
  		}
  		} else {
  			for(var j=0;j<buildinglist.length; j++) {
  			//	(function(){
  					var str = input.value;
  					var sss = blm.buildinglist[j].build_name + '(' + blm.buildinglist[j].build_code + ')';
  					if(sss.toLowerCase().indexOf(str.toLowerCase()) > -1) {
  						lb[j].style.display = 'block';
  					} else {
  						lb[j].style.display = 'none';
  					}
  			//	}());
  		}
  		}
  	});
  });
})(ModelModule, ViewModule, ServiceModule);

