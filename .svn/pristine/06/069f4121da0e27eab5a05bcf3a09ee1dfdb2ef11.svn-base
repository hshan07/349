'use strict';

/*
Put any interaction code here
 */

window.addEventListener('load', function() {
  // You should wire up all of your event handling code here, as well as any
  // code that initiates calls to manipulate the DOM (as opposed to responding
  // to events)


  var activitycollectionmodel = new ActivityCollectionModel();
  var graphview = new GraphView(new GraphModel());

  activitycollectionmodel.addListener(function(eventType, eventTime, eventData) {
      if(eventType===ACTIVITY_DATA_ADDED_EVENT) {
        document.getElementById('last').innerHTML='Last Data Entry was: ' + eventTime;
        graphview.datapoints.push(eventData);
      } else if(eventType===ACTIVITY_DATA_REMOVED_EVENT) {
        var index = graphview.datapoints.indexOf(activityDataPoint);
          if (index !== -1) {
            graphview.datapoints.splice(index, 1);
          }
      }
  });

  var check = document.getElementById('checks');
  check.setAttribute('style',"visibility:hidden");

  var submit = document.getElementById('submit');
  submit.addEventListener('click',function(){
    document.getElementById("l2").style.backgroundColor="initial";
    document.getElementById("l3").style.backgroundColor="initial";
    document.getElementById("l4").style.backgroundColor="initial";
    document.getElementById("l5").style.backgroundColor="initial";
    var l2 = document.getElementById('l2').value;
    var l3 = document.getElementById('l3').value;
    var l4 = document.getElementById('l4').value;
    var l5 = document.getElementById('l5').value;
    var l1 = document.getElementById('l1').value;
    var data = new ActivityData(l1,[l2,l3,l4],l5);
    activitycollectionmodel.addActivityDataPoint(data);
    if(activitycollectionmodel.laststatus==true) {
          document.getElementById("errormsg").innerHTML="";
    } else {
        if((l2>5)||(l2<1)||!(l2==parseInt(l2))) {
          document.getElementById("l2").style.backgroundColor="red";
        }
        if((l3>5)||(l3<1)||!(l3==parseInt(l3))) {
          document.getElementById("l3").style.backgroundColor="red";
        }
        if((l4>5)||(l4<1)||!(l4==parseInt(l4))) {
          document.getElementById("l4").style.backgroundColor="red";
        }
        if((l5<1)||!(l5==parseInt(l5))) {
          document.getElementById("l5").style.backgroundColor="red";
        }
        document.getElementById("errormsg").innerHTML="INVALID INPUT! please entry some positive integers, and health levels should between 1 and 5.";
        document.getElementById("errormsg").style.color="red";
  }
  });

  var plot = document.getElementById('plot');
  plot.addEventListener('click',function() {
    var b1=document.getElementById("mycheck1").checked;
    var b2=document.getElementById("mycheck2").checked;
    var b3=document.getElementById("mycheck3").checked;
    if((!b1)&&(!b2)&&(!b3)) {
      alert("please select at least one health measures!");
    } else {
      graphview.model.selectGraph('table');
      graphview.model.selectGraph('plot');
      var l = graphview.datapoints.length;
      var mycanvas = document.getElementById('mcanvas');
      var ctx=mycanvas.getContext("2d");
      ctx.font="25px Times New Roman";
      if(b1) {
        document.getElementById("mycheck1").checked=true;
        for(var i=0;i<l;i++) {
          if(graphview.datapoints[i].activityType=="writing code") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),300);
          } else if (graphview.datapoints[i].activityType=="eating dinner") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),250);
          } else if (graphview.datapoints[i].activityType=="playing sports") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),200);
          } else if (graphview.datapoints[i].activityType=="studying for exams") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),150);
          } else if (graphview.datapoints[i].activityType=="attending lectures") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),100);
          } else if (graphview.datapoints[i].activityType=="watching tv") {
            ctx.fillText("o",141+40*parseInt(graphview.datapoints[i].activityDataDict[0]),50);
          }
        }
      }
      if(b2) {
        document.getElementById("mycheck2").checked=true;
        for(var i=0;i<l;i++) {
          if(graphview.datapoints[i].activityType=="writing code") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),300);
          } else if (graphview.datapoints[i].activityType=="eating dinner") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),250);
          } else if (graphview.datapoints[i].activityType=="playing sports") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),200);
          } else if (graphview.datapoints[i].activityType=="studying for exams") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),150);
          } else if (graphview.datapoints[i].activityType=="attending lectures") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),100);
          } else if (graphview.datapoints[i].activityType=="watching tv") {
            ctx.fillText("x",141+40*parseInt(graphview.datapoints[i].activityDataDict[1]),50);
          }
        }
      }
      if(b3) {
        document.getElementById("mycheck3").checked=true;
        for(var i=0;i<l;i++) {
          if(graphview.datapoints[i].activityType=="writing code") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),300);
          } else if (graphview.datapoints[i].activityType=="eating dinner") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),250);
          } else if (graphview.datapoints[i].activityType=="playing sports") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),200);
          } else if (graphview.datapoints[i].activityType=="studying for exams") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),150);
          } else if (graphview.datapoints[i].activityType=="attending lectures") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),100);
          } else if (graphview.datapoints[i].activityType=="watching tv") {
            ctx.fillText("+",141+40*parseInt(graphview.datapoints[i].activityDataDict[2]),50);
          }
        }
      }
    }
  });

  // Instantiate a TabView and a TabModel, then bind them together.
  var tabView = new TabView(new TabModel()); 
});

