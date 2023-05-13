var svg = d3.select("#ClusterBubble");
var width = svg.attr("width");
var height = svg.attr("height");

d3.csv(
    "https://raw.githubusercontent.com/DivijD012/DVLab1/main/project_data.csv"
).then((data) => {
    // console.log(data)
    EU();
    // BRICS();

    function EU() {
        var graphData = {
            nodes: [
                { name: "Austria", groups: ["EU"], color: "red", radius: 0 },
                { name: "Belgium", groups: ["EU"], color: "red", radius: 0 },
                { name: "Bulgaria", groups: ["EU"], color: "red", radius: 0 },
                { name: "Croatia", groups: ["EU"], color: "red", radius: 0 },
                { name: "Cyprus", groups: ["EU"], color: "red", radius: 0 },
                { name: "Czech Republic", groups: ["EU"], color: "red", radius: 0 },
                { name: "Denmark", groups: ["EU"], color: "red", radius: 0 },
                { name: "Estonia", groups: ["EU"], color: "red", radius: 0 },
                { name: "Finland", groups: ["EU"], color: "red", radius: 0 },
                { name: "France", groups: ["EU"], color: "red", radius: 0 },
                { name: "Germany", groups: ["EU"], color: "red", radius: 0 },
                { name: "Greece", groups: ["EU"], color: "red", radius: 0 },
                { name: "Hungary", groups: ["EU"], color: "red", radius: 0 },
                { name: "Ireland", groups: ["EU"], color: "red", radius: 0 },
                { name: "Italy", groups: ["EU"], color: "red", radius: 0 },
                { name: "Latvia", groups: ["EU"], color: "red", radius: 0 },
                { name: "Lithuania", groups: ["EU"], color: "red", radius: 0 },
                { name: "Luxembourg", groups: ["EU"], color: "red", radius: 0 },
                { name: "Malta", groups: ["EU"], color: "red", radius: 0 },
                { name: "Netherlands", groups: ["EU"], color: "red", radius: 0 },
                { name: "Poland", groups: ["EU"], color: "red", radius: 0 },
                { name: "Portugal", groups: ["EU"], color: "red", radius: 0 },
                { name: "Romania", groups: ["EU"], color: "red", radius: 0 },
                { name: "Slovakia", groups: ["EU"], color: "red", radius: 0 },
                { name: "Slovenia", groups: ["EU"], color: "red", radius: 0 },
                { name: "Spain", groups: ["EU"], color: "red", radius: 0 },
                { name: "Sweden", groups: ["EU"], color: "red", radius: 0 },
                { name: "Brazil", groups: ["BRICS"], color: "blue", radius: 0 },
                { name: "Russia", groups: ["BRICS"], color: "blue", radius: 0 },
                { name: "India", groups: ["BRICS"], color: "blue", radius: 0 },
                { name: "China", groups: ["BRICS"], color: "blue", radius: 0 },
                { name: "South Africa", groups: ["BRICS"], color: "blue", radius: 0 },
                { name: "Argentina", group: ["G20"], color: "green", radius: 0 },
                { name: "Australia", group: ["G20"], color: "green", radius: 0 },
                { name: "Brazil", group: ["G20"], color: "green", radius: 0 },
                { name: "Canada", group: ["G20"], color: "green", radius: 0 },
                { name: "China", group: ["G20"], color: "green", radius: 0 },
                { name: "France", group: ["G20"], color: "green", radius: 0 },
                { name: "Germany", group: ["G20"], color: "green", radius: 0 },
                { name: "India", group: ["G20"], color: "green", radius: 0 },
                { name: "Indonesia", group: ["G20"], color: "green", radius: 0 },
                { name: "Italy", group: ["G20"], color: "green", radius: 0 },
                { name: "Japan", group: ["G20"], color: "green", radius: 0 },
                { name: "Mexico", group: ["G20"], color: "green", radius: 0 },
                { name: "Russia", group: ["G20"], color: "green", radius: 0 },
                { name: "Saudi Arabia", group: ["G20"], color: "green", radius: 0 },
                { name: "South Africa", group: ["G20"], color: "green", radius: 0 },
                { name: "South Korea", group: ["G20"], color: "green", radius: 0 },
                { name: "Turkey", group: ["G20"], color: "green", radius: 0 },
                { name: "United Kingdom", group: ["G20"], color: "green", radius: 0 },
                { name: "United States", group: ["G20"], color: "green", radius: 0 },
                { name: "European Union", group: ["G20"], color: "green", radius: 0 },
            ],
        };

        for (var i = 0; i < data.length; i++) {
            if (data[i]["WEO Subject Code"] == "NGDPD") {
                for (var j = 0; j < graphData.nodes.length; j++) {
                    if (data[i]["Country"] == graphData.nodes[j]["name"]) {
                        console.log(data[i]["2008"]);
                        if (data[i]["2008"] != "n/a" && data[i]["2008"] != "") {
                            graphData.nodes[j]["radius"] = Math.sqrt(
                                data[i]["2008"].replace(",", "")
                            );
                            console.log(graphData.nodes[j]["radius"]);
                        }
                    }
                }
            }
        }

        function addTooltip(barId) {
            var name = barId;
            var tooltipContent = `Name:${name}`;
            console.log(tooltipContent);
            console.log(barId);
            tippy(barId, {
                content: tooltipContent,
                followCursor: true,
            });
        }

        var simulation = d3
            .forceSimulation(graphData.nodes)
            .force("charge", d3.forceManyBody().strength(0.001))
            .force("center", d3.forceCenter(width / 3, height / 2))
            .force(
                "collide",
                d3
                    .forceCollide(function (d) {
                        return d.radius;
                    })
                    .strength(1.9)
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

        var circles = textsAndNodes
            .append("circle")
            .attr("r", function (d) {
                return d.radius;
            })
            .attr("fill", function (d) {
                return d.color
            })
            .attr("id", function (d) {
                return d.name;
            })
            .on("hover", function () {
                addTooltip(self.id);
            });

        var texts = textsAndNodes.append("text").text(function (d) {
            return d.name;
        });

        function ticked() {
            textsAndNodes.attr("transform", function (d) {
                return "translate(" + d.x + ", " + d.y + ")";
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