
var time_seq = [];
var heading = [];

// set the width and height of the chart
var width = 960, height = 500;

// set the domain and range for each axis
var x = d3.scale.linear().domain([0, 500]).range([0, width]);
var y = d3.scale.linear().domain([0, 500]).range([height, 0]);

var motionAttributes = [];
var this_motionAttributes;
var line = d3.svg.line()
    .x(function(d,i) { return x(d.x); })
    .y(function(d) { return y(d.y); });


function init(){
console.log("init!");

var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "line")
	.append("svg:g");
					
var this_chart_data_1 = [];
var this_chart_data_2 = [];
var this_chart_data_3 = [];
var this_chart_data_4 = [];
var this_chart_data_5 = [];



var this_val = [];
$.each(sensor_data, function(index, val){
	//console.log(val.TrueHeading)

	 this_motionAttributes = val;
	
	
	
	time_seq.push(index);
	heading.push(val.accelerationZ);
	this_chart_data_1.push({x:index, y:val.motionRotationRateZ});
	this_chart_data_2.push({x:index, y:val.accelerationZ});
	this_chart_data_3.push({x:index, y:val.accelerationX});
	this_chart_data_4.push({x:index, y:val.accelerationY});
	this_chart_data_5.push({x:index, y:val.RotationZ});
	
	 
 });
 
 $.each(this_motionAttributes, function(index_2, val_2){
		motionAttributes.push(index_2);
		$("#controls").append("<div>"+index_2+"</div>");
	})

/*
x = d3.scale.linear().domain([d3.min(time_seq), d3.max(time_seq)]).range([0, width]),
y = d3.scale.linear().domain([d3.min(heading), d3.max(heading)]).range([200, 0]);
*/

x = d3.scale.linear().domain([0, time_seq.length]).range([0, width]),
y = d3.scale.linear().domain([-50, 50]).range([height, 0]);

 svg.append("svg:path")
    .data([this_chart_data_1])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "red")
       .attr("stroke-width", 2)
       .attr("d", line)
       .enter().append("svg:path");

            
 svg.append("svg:path")
    .data([this_chart_data_2])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "orange")
       .attr("stroke-width", 2)
       .attr("d", line);
	   
  svg.append("svg:path")
    .data([this_chart_data_3])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "green")
       .attr("stroke-width", 2)
       .attr("d", line);
  
  
	  
  svg.append("svg:path")
    .data([this_chart_data_4])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "purple")
       .attr("stroke-width", 2)
       .attr("d", line);
   
  svg.append("svg:path")
    .data([this_chart_data_5])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "blue")
       .attr("stroke-width", 2)
       .attr("d", line);
  
     	
    svg.selectAll(".xLabel")
    .data(x.ticks(5))
    .enter().append("svg:text")
    .attr("class", "xLabel")
    .text(String)
    .attr("x", function(d) { return x(d) })
    .attr("y", height)
    .attr("text-anchor", "middle")
  
   svg.selectAll(".yLabel")
    .data(y.ticks(5))
     .enter().append("svg:text")
       .attr("class", "yLabel")
       .text(String)
    .attr("y", y)
    .attr("x", 20)
    .attr("dy", ".35em")
    .attr("text-anchor", "end")
    .text(y.tickFormat(5));
  
     	
     	
     }
	  



