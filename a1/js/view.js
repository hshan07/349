'use strict';

// Put your view code here (e.g., the graph renderering code)
/**
 *  TabView  
 */

var GraphView = function(model) {
    var self = this;
    this.model = model;
    this.datapoints = [];

    this.check = document.getElementById('checks');
    this.table = document.getElementById('rds1');

    this.table.addEventListener('click',function(){
        model.selectGraph('plot');
        model.selectGraph('table');
    });

    this.plot = document.getElementById('rds2');
    this.plot.addEventListener('click',function(){
        model.selectGraph('table');
        model.selectGraph('plot');
    });

    this.model.addListener(function(eventType, eventTime, eventData){
        if(eventType===GRAPH_SELECTED_EVENT) {
            switch (eventData) {
                case 'table':
                var mycanvas = document.getElementById("mcanvas");
                if (mycanvas !== null) {
                    mycanvas.parentNode.removeChild(mycanvas);
                }
                document.getElementById('mycheck1').checked=false;
                document.getElementById('mycheck2').checked=false;
                document.getElementById('mycheck3').checked=false;
                var l = self.datapoints.length;
                self.check.style.visibility="hidden";

                var t = document.createElement("TABLE");

                var row1 = t.insertRow(0);
                var cell11 = row1.insertCell(0);
                var cell12 = row1.insertCell(1);
                cell11.innerHTML="Activities you are tracking:";
                cell12.innerHTML="time spent";

                var row2 = t.insertRow(1);
                var cell21 = row2.insertCell(0);
                var cell22 = row2.insertCell(1);
                cell21.innerHTML="writing code";
                var sum1=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="writing code") {
                        sum1 = sum1 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell22.innerHTML=sum1+" min";

                var row3 = t.insertRow(2);
                var cell31 = row3.insertCell(0);
                var cell32 = row3.insertCell(1);
                cell31.innerHTML = "eating dinner";
                var sum2=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="eating dinner") {
                        sum2 = sum2 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell32.innerHTML=sum2+" min";

                var row4 = t.insertRow(3);
                var cell41 = row4.insertCell(0);
                var cell42 = row4.insertCell(1);
                cell41.innerHTML = "playing sports";
                var sum3=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="playing sports") {
                        sum3 = sum3 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell42.innerHTML=sum3+" min";

                var row5 = t.insertRow(4);
                var cell51 = row5.insertCell(0);
                var cell52 = row5.insertCell(1);
                cell51.innerHTML = "studying for exams";
                var sum4=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="studying for exams") {
                        sum4 = sum4 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell52.innerHTML=sum4+" min";

                var row6 = t.insertRow(5);
                var cell61 = row6.insertCell(0);
                var cell62 = row6.insertCell(1);
                cell61.innerHTML = "attending lectures";
                var sum5=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="attending lectures") {
                        sum5 = sum5 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell62.innerHTML=sum5+" min";

                var row7 = t.insertRow(6);
                var cell71 = row7.insertCell(0);
                var cell72 = row7.insertCell(1);
                cell71.innerHTML = "watching tv";
                var sum6=0;
                for(var i = 0; i < l; i++) {
                    if(self.datapoints[i].activityType=="watching tv") {
                        sum6 = sum6 + parseInt(self.datapoints[i].activityDurationInMinutes);
                    }
                }
                cell72.innerHTML=sum6+" min";
                var graphdiv = document.getElementById('graph');
                t.cellPadding="10";
                t.style.border="1px solid black";
                t.style.borderCollapse = "separate";
                t.style.borderSpacing = "18px 8px";
                t.style.fontFamily = "serif";
                t.style.fontSize = "18px";
                t.id="atable";
                graphdiv.appendChild(t);
                break;
                case 'plot':
                self.check.style.visibility="visible";
                var mytable = document.getElementById("atable");
                if (mytable !== null) {
                    mytable.parentNode.removeChild(mytable);
                }

                var mycanvas = document.createElement('canvas');
                mycanvas.id = 'mcanvas';
                mycanvas.width = 505;
                mycanvas.height = 350;
                mycanvas.style.margin = "0px 0px 0px 50px";
                var ctx=mycanvas.getContext("2d");
                ctx.textAlign="right"; 
                ctx.font="13px serif";
                ctx.fillText("writing code",130,300);
                ctx.fillText("eating dinner",130,250);
                ctx.fillText("playing sports",130,200);
                ctx.fillText("studying for exams",130,150);
                ctx.fillText("attending lectures",130,100);
                ctx.fillText("watching tv",130,50)
                ctx.moveTo(150,30);
                ctx.lineTo(150,320);
                ctx.lineTo(370,320);
                ctx.lineWidth = 3;
                ctx.stroke();
                ctx.fillText("1",190,335);
                ctx.fillText("2",230,335);
                ctx.fillText("3",270,335);
                ctx.fillText("4",310,335);
                ctx.fillText("5",350,335);
                ctx.textAlign="start"; 
                var graphdiv = document.getElementById('graph');
                graphdiv.appendChild(mycanvas);
                break;
                }
            }
        }
    );
}


var TabView = function(model) {
    // Obtains itself   
    var self = this;

    // Stores the model
    this.model = model;


    // Available tabs and divs
    this.nav_input_tab = document.getElementById('nav-input-tab');
    this.input_div = document.getElementById('input-div');

    this.nav_analysis_tab = document.getElementById('nav-analysis-tab');
    this.analysis_div = document.getElementById('analysis-div');

    // Binds tab view with model  
    this.nav_input_tab.addEventListener('click', function() {
        model.selectTab('InputTab');
    });

    this.nav_analysis_tab.addEventListener('click', function() {
        model.selectTab('AnalysisTab');
    });

    // Binds model change with view
    this.model.addListener(function(eventType, eventTime, eventData) {
        if (eventType === TAB_SELECTED_EVENT)   {
            switch (eventData) {
                case 'InputTab':
                    self.nav_input_tab.className = "active";
                    self.nav_analysis_tab.className = "";
                    self.input_div.className = '';
                    self.analysis_div.className = 'hidden';
                    document.getElementById('mycheck1').checked=false;
                    document.getElementById('mycheck2').checked=false;
                    document.getElementById('mycheck3').checked=false;
                    document.getElementById('rds1').checked=false;
                    document.getElementById('rds2').checked=false;
                    document.getElementById('checks').style.visibility='hidden';
                    var mygraph = document.getElementById('atable');
                    if(mygraph !== null) {
                        mygraph.parentNode.removeChild(mygraph);
                    }

                    mygraph = document.getElementById('mcanvas');
                    if(mygraph !== null) {
                        mygraph.parentNode.removeChild(mygraph);
                    }

                    break;
                case 'AnalysisTab':
                    self.nav_analysis_tab.className = "active";
                    self.nav_input_tab.className = "";
                    self.input_div.className = 'hidden';
                    self.analysis_div.className = '';
                    break;
            }
        }
    });
}