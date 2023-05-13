var svg = d3.select("#ClusterBubble");
var width = svg.attr("width");
var height = svg.attr("height");

// var selectedattr="GDP"
// var selectedyear="2008"
function EU_Parent(selectedattr,selectedyear){
  d3.csv(
    "https://raw.githubusercontent.com/DivijD012/DVLab1/main/project_data.csv"
  ).then((data) => {
    // console.log(data)
    EU(selectedattr,selectedyear);
    // BRICS();
  
    function EU(selectedattr,selectedyear) {
      var graphData = {
        nodes: [
          { name: "Austria", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Belgium", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Bulgaria", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Croatia", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Cyprus", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Czech Republic", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Denmark", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Estonia", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Finland", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "France", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Germany", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Greece", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Hungary", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Ireland", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Italy", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Latvia", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Lithuania", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Luxembourg", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Malta", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Netherlands", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Poland", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Portugal", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Romania", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Slovakia", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Slovenia", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Spain", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Sweden", group: width / 3, color: "red", radius: 0 , value: 0 },
          { name: "Brazil", group: width / 2, color: "blue", radius: 0 , value: 0 },
          { name: "Russia", group: width / 2, color: "blue", radius: 0 , value: 0 },
          { name: "India", group: width / 2, color: "blue", radius: 0 , value: 0 },
          { name: "China", group: width / 2, color: "blue", radius: 0 , value: 0 },
          { name: "South Africa", group: width / 2, color: "blue", radius: 0 , value: 0 },
          { name: "Argentina", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Australia", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Brazil", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Canada", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "China", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "France", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Germany", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "India", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Indonesia", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Italy", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Japan", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Mexico", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Russia", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Saudi Arabia", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "South Africa", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Korea", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "Turkey", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "United Kingdom", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
          { name: "United States", group: width / 3 * 2, color: "green", radius: 0 , value: 0 },
        ],
      };
  
      console.log(graphData)
  
      for (var i = 0; i < data.length; i++) 
      {
        if(selectedattr ==='GDP'){
          if (data[i]["WEO Subject Code"] == "NGDPD") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = Math.sqrt(
                    data[i][selectedyear].replace(",", "")
                  );
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
        else if(selectedattr ==='GDP (Adjusted to PPP)'){
          if (data[i]["WEO Subject Code"] == "PPPGDP") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = Math.sqrt(
                    data[i][selectedyear].replace(",", "")
                  );
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
        else if(selectedattr ==='Inflation Rate'){
          if (data[i]["WEO Subject Code"] == "PCPIPCH") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = 
                    Math.abs(data[i][selectedyear].replace(",", "")) * 5;
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
        else if(selectedattr ==='Unemployement Rate'){
          if (data[i]["WEO Subject Code"] == "LUR") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = 
                    Math.abs(data[i][selectedyear].replace(",", "")) * 4;
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
        else if(selectedattr ==='Debt (As Percentage Of GDP)'){
          if (data[i]["WEO Subject Code"] == "GGXWDN_NGDP") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = 
                    Math.abs(data[i][selectedyear].replace(",", "")) ;
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
        else if(selectedattr ==='Per Capita Income'){
          if (data[i]["WEO Subject Code"] == "PPPPC") {
            for (var j = 0; j < graphData.nodes.length; j++) {
              if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                // console.log(data[i]["2008"]);
                if (data[i][selectedyear] != "n/a" && data[i][selectedyear] != "") {
                  graphData.nodes[j]["value"]=data[i][selectedyear];
                  graphData.nodes[j]["radius"] = Math.sqrt(
                    data[i][selectedyear].replace(",", "")
                  )/7;
                  // console.log(graphData.nodes[j]["radius"]);
                }
              }
            }
          }
        }
  
        
      }
  
      function addTooltip(barId,val) {
        var name = barId;
        var value=val
        var tooltipContent = `Name:${name}
        Value:${value}`;
        console.log(tooltipContent);
        console.log("barid",barId);
        tippy('#'+barId, {
          content: tooltipContent,
          followCursor: true,
        });
      }
  
      var simulation = d3
        .forceSimulation(graphData.nodes)
        .force("x", d3.forceX().strength(0.1).x(function(d){
          console.log("x",d.group)
          return d.group;
        }))
        .force("y", d3.forceY().strength(0.1).y(height / 2))
        .force("charge", d3.forceManyBody().strength(1))
        .force("center", d3.forceCenter(width / 3, height / 2))
        .force(
          "collide",
          d3
            .forceCollide(function (d) {
              // console.log(5, d.radius)
              return d.radius+5;
            })
            .strength(1)
        )
        .on("tick", ticked);
  
      //   var links = svg
      //     .append("g")
      //     .selectAll("line")
      //     .data(graphData.links)
      //     .enter()
      //     .append("line")
      //     .attr("storke-width", 3)
      //     .style("stroke", "orange");
  
      var drag = d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  
      var textsAndNodes = svg
        .append("g")
        .selectAll("g")
        .data(graphData.nodes)
        .enter()
        .append("g")
        .call(drag);
      
        
    
        svg.append('circle')
        .attr('cx','890')
        .attr('cy','65')
        .attr('fill','green')
        .attr('r','6')
        svg.append('text')
        .attr('x','900')
        .attr('y','70')
        .attr('id','label_line')
        .attr('fill','black')
        .style('font-weight','bold')
        
        .text('BRICS')
    
    
        svg.append('circle')
        .attr('cx','710')
        .attr('cy','65')
        .attr('fill','blue')
        .attr('r','6')
        svg.append('text')
        .attr('x','720')
        .attr('y','70')
        .attr('id','label_line')
        .attr('fill','black')
        .style('font-weight','bold')
        .text('G20 Countries')
    
        svg.append('circle')
        .attr('cx','490')
        .attr('cy','65')
        .attr('fill','red')
        .attr('r','6')
        svg.append('text')
        .attr('x','500')
        .attr('y','70')
        .attr('id','label_line')
        .attr('fill','black')
        .style('font-weight','bold')
    
        
        .text('European Union (EU)')
          
  
      var circles = textsAndNodes
        .append("circle")
        .attr("r", function (d) {
          return d.radius;
        })
        .attr("fill", function (d) {
          return d.color
        })
        .attr("id", function (d) {
          return d.name.replace(' ','');
        })
        .on("mouseover", function (d) {
          addTooltip(d.name.replace(' ',''),d.value.replace(' ',''));
        });
  
      // var texts = textsAndNodes.append("text").text(function (d) {
      //   return d.name;
      // });
  
      function ticked() {
        textsAndNodes.attr("transform", function (d) {
          // if (d.x < width || d.x > 0 || d.y < height || d.y > 0) {
          return "translate(" + d.x + ", " + d.y + ")";
          // }
        });
  
        // links
        //   .attr("x1", function (d) {
        //     return d.source.x;
        //   })
        //   .attr("y1", function (d) {
        //     return d.source.y;
        //   })
        //   .attr("x2", function (d) {
        //     return d.target.x;
        //   })
        //   .attr("y2", function (d) {
        //     return d.target.y;
        //   });
  
        // console.log(simulation.alpha());
      }
  
      function dragstarted(d) {
        simulation.alphaTarget(0.3).restart();
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }
  
      function dragged(d) {
        if (d3.event.x > 0 && d3.event.x < width) { d.fx = d3.event.x; }
        if (d3.event.y > 0 && d3.event.y < height) { d.fy = d3.event.y; }
      }
  
      function dragended(d) {
        simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }
  
  
  });
}

EU_Parent('GDP','2008')