/**
 * @author conlchri9061
 */

var svg = d3.select("#chart")
  .append("svg:svg")
    .attr("width", 150)
    .attr("height",400)
	.attr("x",0)
	.attr("y",0)

	
svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 13)
	.attr("font-size", 12)
	.attr("font-weight", "bold")
	.text("LEGEND");		

svg.append("svg:rect")	
	.attr("width",80)
	.attr("x", 20)
	.attr("y", 20)
	.attr("height", 20)
	.attr("rx", 5)
	.attr("ry", 10)
	.attr("opacity", 15)
	.style("fill", "#00ACD6" );

svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 32.5)
	.attr("font-size", 10)
	.attr("fill", "white")
	.text("LEVEL 4");	
/** Level 3 Legend
 */	
svg.append("svg:rect")	
	.attr("width",80)
	.attr("x", 20)
	.attr("y", 45)
	.attr("height", 20)
	.attr("rx", 5)
	.attr("ry", 10)
	.style("fill", "#A4CD39" );
	
svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 57.5)
	.attr("font-size", 10)
	.attr("fill", "white")
	.text("LEVEL 3");	
		
/** Level 2 Legend
 */
svg.append("svg:rect")	
	.attr("width",80)
	.attr("x", 20)
	.attr("y", 70)
	.attr("height", 20)
	.attr("rx", 5)
	.attr("ry", 10)
	.style("fill", "#F7921E" );

svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 82.5)
	.attr("font-size", 10)
	.attr("fill", "white")
	.text("LEVEL 2");	
	
/** Level 1 Legend
 */	
svg.append("svg:rect")	
	.attr("width",80)
	.attr("x", 20)
	.attr("y", 95)
	.attr("height", 20)
	.attr("rx", 5)
	.attr("ry", 10)
	.style("fill", "#ED174C" );	

svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 107.5)
	.attr("font-size", 10)
	.attr("fill", "white")
	.text("LEVEL 1");	
		
/** Level 0 Legend
 */	
svg.append("svg:rect")	
	.attr("width",80)
	.attr("x", 20)
	.attr("y", 120)
	.attr("height", 20)
	.attr("rx", 5)
	.attr("ry", 10)
	.style("fill", "#000000" );
	
svg.append("svg:text")	
	.attr("x", 40)
	.attr("y", 132.5)
	.attr("font-size", 10)
	.attr("fill", "white")
	.text("NE 1");		