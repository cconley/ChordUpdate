function fade(a){return function(b,c){svg
    .selectAll("g.chord path")
    .filter(function(a){return a.source.index!=c&&a.target.index!=c})
    .transition()
    .attr("opacity",a)}}
    function groupTicks(a){var b=(a.endAngle-a.startAngle)/a.value;
        return d3.range(0,a.value,1e3).map(function(c,e){
            return{angle:c*b+a.startAngle,label:e%2?null:c/1e3+""}})}
            
            var alpha=d3.layout
            .chord()
            .padding(.05)
            .sortSubgroups(d3.descending)
            .matrix([[0,0,0,0,0,5.418,23.304,304.07,8312.2,4546.08],
            [0,0,0,0,0,307.02,2019.68,17331.99,49233.8,4830.21],
            [0,0,0,0,0,794.64,4194.72,11250.59,5115.2,94.71],
            [0,0,0,0,0,487.62,1242.88,1216.28,639.4,28.413],
            [0,0,0,0,0,54.18,77.68,91.221,191.82,28.413],
            [5.418,307.02,794.64,487.62,54.18,0,0,0,0,0],
            [23.304,2019.68,4194.72,1242.88,77.68,0,0,0,0,0],
            [304.07,17331.99,11250.59,1216.28,91.221,0,0,0,0,0],
            [8312.2,49233.8,5115.2,639.4,191.82,0,0,0,0,0],
            [4546.08,4830.21,94.71,28.413,28.413,0,0,0,0,0]]);
            
            var chord=alpha;
            
            var w=570,
                h=500,
                r0=Math.min(w,h)*.41,
                r1=r0*1.1;
            
            var fill=d3.scale.ordinal()
                .domain(d3.range(10))
                .range(["#00ACD6","#A4CD39","#F7921E","#ED174C","#000000","#000000","#ED174C","#F7921E","#A4CD39","#00ACD6"]);
            
            var svg=d3.select("#chart")
                    .append("svg:svg")
                    .attr("width",w)
                    .attr("height",h)
                    .append("svg:g")
                    .attr("transform","translate("+w/2+","+h/2+")");
                
                svg.append("svg:g")
                    .selectAll("path")
                    .data(chord.groups)
                    .enter()
                    .append("svg:path")
                    .attr("fill",
                        function(a){
                            return fill(a.index)})
                    .attr("stroke",
                        function(a){
                            return fill(a.index)})
                    .attr("d",d3.svg.arc()
                    .innerRadius(r0)
                    .outerRadius(r1))
                    .on("mouseover",
                        fade(.1))
                    .on("mouseout",
                        fade(.1));
            
            var ticks=svg.append("svg:g")
                    .selectAll("g")
                    .data(chord.groups)
                    .enter()
                    .append("svg:g")
                    .selectAll("g")
                    .data(groupTicks)
                    .enter()
                    .append("svg:g")
                    .attr("transform",
                       function(a){
                            return"rotate("+(a.angle*180/Math.PI-90)+")"+"translate("+r1+",0)"});
                ticks.append("svg:line")
                    .attr("x1",1)
                    .attr("y1",0)
                    .attr("x2",5)
                    .attr("y2",0)
                    .attr("stroke","#000");
                ticks.append("svg:text")
                    .attr("x",8)
                    .attr("dy",".35em")
                    .attr("text-anchor",
                        function(a){
                            return a.angle>Math.PI?"end":null})
                    .attr("transform",
                        function(a){
                            return a.angle>Math.PI?"rotate(180)translate(-16)":null})
                    .text(
                        function(a){
                            return a.label});
                svg.append("svg:g")
                    .attr("class","chord")
                    .selectAll("path")
                    .data(chord.chords)
                    .enter()
                    .append("svg:path")
                    .attr("fill",
                        function(a){
                            return fill(a.target.index)})
                                .attr("d",d3.svg.chord()
                                .radius(r0)).attr("opacity",1)