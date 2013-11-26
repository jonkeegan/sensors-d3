
var time_seq = [];
var heading = [];

var m = [10, 10, 10, 10]; // margins
var width = 960 - m[1] - m[3]; // width
var height = 500 - m[0] - m[2]; // height

// set the width and height of the chart
//var width = 960, height = 500;

// set the domain and range for each axis
var x = d3.scale.linear().domain([0, 500]).range([0, width]);
var y = d3.scale.linear().domain([0, 500]).range([height, 0]);

var motionAttributes = [];
var this_motionAttributes;
var line = d3.svg.line()
    .x(function(d,i) { return x(d.x); })
    .y(function(d) { return y(d.y); });

var raw_log = d3.text("nostrand.csv");
var sensor_data = [];
var svg;
var motionAttributes;
var this_chart_data_1 = [];
function init(){
	console.log("init!");
	
	// load the raw data...
	d3.csv("nostrand.csv", function(data) {
       //on success...
       sensor_data=data
       
       // loop through the object
       $.each(data, function(index, val){
		  // console.log(" asdas"+index);
		 
		  this_chart_data_1.push({x:index, y:val.motionRotationRateZ});
		   
		});
	
		init_chart();
	}); // end csv load success
} // end init
	  
	  
function init_chart(){
	 svg = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "line")
        .append("svg:g");
        
        
	// setup left nav
	
	var this_motionAttributes = sensor_data[0];
	
	$.each(this_motionAttributes, function(index, val){
                motionAttributes.push(index);
                $("#controls").append("<a href='#' class='list-group-item lgi-compact'>"+index+"</a>");
    })
    
    x = d3.scale.linear().domain([0, sensor_data.length]).range([0, width]),
	y = d3.scale.linear().domain([-50, 50]).range([height, 0]);
	
	
	svg.append("svg:path")
    .data([this_chart_data_1])
    .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "red")
       .attr("stroke-width", 2)
       .attr("d", line)
       .enter().append("svg:path");

    
             
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



