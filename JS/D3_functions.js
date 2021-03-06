/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * Thius is in the DevelopmentProjectNollaig2017 folder 
 */
function createBarChart(dataReturn, elementId) {
    /** alert(" in createBarChart 1"); **/ /** This was inserted for testing, removwe on fiunal edit **/
    if (typeof elementId === "undefined") {
        var container = document.getElementById("graph" + dataReturn[0].countyid);

        elementId = container.getAttribute("id");
        container.innerHTML = "";
    } else {
        var container = document.getElementById(elementId);
        if (elementId != "focus") {
            container.innerHTML = "";
        }
    }
    var width = 1200;
    var height = 600;
    var margin = {top: 40, right: 40, bottom: 60, left: 60};
    var data = dataReturn;
    /**   alert(" in createBarChart"); **/ /**This was included for testing.Remove on final edit  **/
    console.log(data); /**Inserted this to see the values if any which are being passed in tn the array **/
    var popTotal = 0;
    for (i = 0; i < data.length; i++) {
        popTotal += data[i].value;
        console.log(popTotal);/** This is returning the male + female total**/
        console.log(data[i].county);/** This is returning the county name**/
        console.log(data[i].label);/** This is returning the barony name **/
    }
    
    var formatPercent = d3.format(".0");
    //x and y Scales
    var xScale = d3.scale.ordinal()

            .rangeRoundBands([0, width], .1);/** Changed 1.2.17**/


    var yScale = d3.scale.linear()
            .range([(height - 40), 0]);
    xScale.domain(data.map(function (d) {
        return d.label;
    }));
    yScale.domain([0, Math.ceil(d3.max(data, function (d) {
            return d.value;
        }) / 1000) * 1000]);
    //x and y Axes
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .tickFormat(formatPercent);
    //
    //create svg container
//    document.getElementById("test").innerHTML = "";
    var svg = d3.select(container)

            //            .attr("class", "svg-container")
            .append("svg")
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//    svg.call(tip);

//create bars
    svg.selectAll(".bar")
            .data(data)/*url bind data here ....." */
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return xScale(d.label);
            })
            .attr("width", xScale.rangeBand())
            .attr("y", function (d) {
                return yScale(d.value);
            })
            .attr("height", function (d) {
                return height - 40 - yScale(d.value);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
    svg.selectAll(".bar")
            .append("title")
            .append("text")
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .text(function (d) {
                return d.county + ": "
                        + d.label + " Population: "
                        + d.value + " male: "
                        + d.male + " female: "
                        + d.female;
            });
    //drawing the x axis on svg
    svg.append("g")
            .attr("class", "xaxis")
            .attr("transform", "translate(0," + (height - 40) + ")")
            .call(xAxis);
    var test = svg.selectAll(".xaxis g text"); // select all the text elements for the xaxis
    test.attr("style", "text-anchor: end;");
    test.attr("transform", "rotate(-15)");
    //drawing the y axis on svg
    svg.append("g")
            .attr("class", "yaxis")
            .call(yAxis);
    svg.append("g")
            .attr("class", "title")
            .append("text")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .attr("font-family", "Arial")
            .attr("text-anchor", "middle")
            .text(data[0].county + "(Population: " + popTotal + ")");
}

function createStackBarChart(dataReturn, elementId) {
    if (typeof elementId === "undefined") {
        var container = document.getElementById("graph" + dataReturn[0].countyid);
        elementId = container.getAttribute("id");
        container.innerHTML = "";
    } else {
        var container = document.getElementById(elementId);
        if (elementId != "focus") {
            container.innerHTML = "";
        }
    }
    var width = 1200;
    var height = 600;
    var margin = {top: 40, right: 40, bottom: 60, left: 60};
    var data = dataReturn;
    var popTotal = 0;
    for (i = 0; i < data.length; i++) {
        popTotal += data[i].value;
    }
    var formatPercent = d3.format(".0");
    //x and y Scales
    var xScale = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);
    var yScale = d3.scale.linear()
            .range([(height - 40), 0]);
    xScale.domain(data.map(function (d) {
        return d.label;
    }));
    yScale.domain([0, Math.ceil(d3.max(data, function (d) {
            return d.value;
        }) / 1000) * 1000]);
    //x and y Axes
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .tickFormat(formatPercent);
    //
    //create svg container
//    document.getElementById("test").innerHTML = "";
    var svg = d3.select(container)

            //            .attr("class", "svg-container")
            .append("svg")
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//    svg.call(tip);

//create bars
    svg.selectAll(".bar")
            .data(data)/*url bind data here ....." */
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return xScale(d.label);
            })
            .attr("width", xScale.rangeBand())
            .attr("y", function (d) {
                return yScale(d.value);
            })
            .attr("height", function (d) {
                return height - 40 - yScale(d.value);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
    svg.selectAll(".bar")
            .append("title")
            .append("text")
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .text(function (d) {
                return d.county + ": "
                        + d.label + " Population: "
                        + d.value + " male: "
                        + d.male + " female: "
                        + d.female;
            });
    //drawing the x axis on svg
    svg.append("g")
            .attr("class", "xaxis")
            .attr("transform", "translate(0," + (height - 40) + ")")
            .call(xAxis);
    var test = svg.selectAll(".xaxis g text"); // select all the text elements for the xaxis
    test.attr("style", "text-anchor: end;");
    test.attr("transform", "rotate(-15)");
    //drawing the y axis on svg
    svg.append("g")
            .attr("class", "yaxis")
            .call(yAxis);
    svg.append("g")
            .attr("class", "title")
            .append("text")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .attr("font-family", "Arial")
            .attr("text-anchor", "middle")
            .text(data[0].county + "(Population: " + popTotal + ")");
}

/*
 * Function name :createPieChart
 * 
 * 
 * 
 * Parameters: 
 * dataReturn; The data to be displayed is returned as value pairs
 * 
 * 
 * elementId;
 * 
 */
function createPieChart(dataReturn, elementId) {
    if (typeof elementId === "undefined") {
        var container = document.getElementById("graph" + dataReturn[0].countyid);
        container.innerHTML = "";
    } else {
        var container = document.getElementById(elementId);
        if (container.getAttribute("id") != "focus") {
            container.innerHTML = "";
        }
    }

    var popTotal = 0;
    for (i = 0; i < dataReturn.length; i++) {
        popTotal += dataReturn[i].value;
    }
    var pie = new d3pie(container.getAttribute("id"), {
        "header": {
            "title": {
                "text": dataReturn[0].county,
                "fontSize": 24,
                "font": "Arial"
            },
            "subtitle": {
                "text": "(Population: " + popTotal + ")",
                "color": "#999999",
                "fontSize": 12,
                "font": "Arial"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "text": "footer",
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "Arial"
        },
        "size": {
            "canvasWidth": 590,
            "canvasHeight": 500,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": dataReturn
        },
        "labels": {
            "outer": {
                "pieDistance": 32
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "tooltips": {
            "enabled": true,
            "type": "placeholder",
            /*   "string": "{label}: {value}, {percentage}%" */
            "string": "{label}: {value}, {percentage}%"

        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "elastic",
                "speed": 400,
                "size": 0
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    });
}
function createPieChart2(dataReturn2, elementId) {
    if (typeof elementId === "undefined") {
        var container = document.getElementById("graph" + dataReturn2[0].countyid);
        container.innerHTML = "";
    } else {
        var container = document.getElementById(elementId);
        if (container.getAttribute("id") != "focus") {
            container.innerHTML = "";
        }
    }
    var empty;


    var totalHousing = 0;
    var emptyHouses = 0;
    for (i = 0; i < dataReturn2.length; i++) {
        totalHousing += dataReturn2[i].value;
        emptyHouses = dataReturn2[i].vacancyRate;
        /* empty = emptyPropertys(emptyHouses,totalHousing */
    }
    var pie = new d3pie(container.getAttribute("id"), {
        "header": {
            "title": {
                "text": dataReturn2[0].county,
                "fontSize": 24,
                "font": "Arial"
            },
            "subtitle": {
                "text": "(Housing stock: " + totalHousing + " \  Empty houses:" + emptyHouses + "%" + ")",
                "color": "#999999",
                "fontSize": 12,
                "font": "Arial"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "text": "footer",
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "Arial"
        },
        "size": {
            "canvasWidth": 590,
            "canvasHeight": 500,
            "pieOuterRadius": "90%"
        },
        "data": {
            "sortOrder": "value-desc",
            "content": dataReturn2
        },
        "labels": {
            "outer": {
                "pieDistance": 32
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            },
            "truncation": {
                "enabled": true
            }
        },
        "tooltips": {
            "enabled": true,
            "type": "placeholder",
            /*  "string": "{label}: {value}, {percentage}%" */
            /*  "string": "{label}: {value},Vacancy rate:{percentage}% "  */
            "string": "{label}: {value} " + emptyHouses
                    /*      "string": "NoOfHousesInBarony: {value},vacancyRate:{value2}% "  */


        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "elastic",
                "speed": 400,
                "size": 0
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    });
}

function createBarChart2(dataReturn2, elementId) {
    if (typeof elementId === "undefined") {
        var container = document.getElementById("graph" + dataReturn2[0].countyid);
        elementId = container.getAttribute("id");
        container.innerHTML = "";
    } else {
        var container = document.getElementById(elementId);
        if (elementId != "focus") {
            container.innerHTML = "";
        }
    }
    var width = 1200;
    var height = 600;
    var margin = {top: 40, right: 40, bottom: 60, left: 60};
    var data2 = dataReturn2;
    var housingStock = 0;
    for (i = 0; i < data2.length; i++) {
        housingStock += data2[i].value;
    }
    var formatPercent = d3.format(".0");
    //x and y Scales
    var xScale = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1);
    var yScale = d3.scale.linear()
            .range([(height - 40), 0]);
    xScale.domain(data2.map(function (d) {
        return d.label;
    }));
    yScale.domain([0, Math.ceil(d3.max(data2, function (d) {
            return d.value;
        }) / 1000) * 1000]);
    //x and y Axes
    var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .tickFormat(formatPercent);
    //
    //create svg container
//    document.getElementById("test").innerHTML = "";
    var svg = d3.select(container)

            //            .attr("class", "svg-container")
            .append("svg")
            .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("preserveAspectRatio", "xMidYMid meet")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//    svg.call(tip);

//create bars
    svg.selectAll(".bar")
            .data(data2)/*url bind data here ....." */
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
                return xScale(d.label);
            })
            .attr("width", xScale.rangeBand())
            .attr("y", function (d) {
                return yScale(d.value);
            })
            .attr("height", function (d) {
                return height - 40 - yScale(d.value);
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);
    svg.selectAll(".bar")
            .append("title")
            .append("text")
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .text(function (d) {
                return d.county + ": "
                        + d.label + " Housing stock: "
                        + d.value + " vacancy rate: "
                        + d.vacancyRate + "%";
            });
    //drawing the x axis on svg
    svg.append("g")
            .attr("class", "xaxis")
            .attr("transform", "translate(0," + (height - 40) + ")")
            .call(xAxis);
    var test = svg.selectAll(".xaxis g text"); // select all the text elements for the xaxis
    test.attr("style", "text-anchor: end;");
    test.attr("transform", "rotate(-15)");
    //drawing the y axis on svg
    svg.append("g")
            .attr("class", "yaxis")
            .call(yAxis);
    svg.append("g")
            .attr("class", "title")
            .append("text")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("font-size", "3em")
            .attr("font-weight", "bold")
            .attr("font-family", "Arial")
            .attr("text-anchor", "middle")
            .text(data2[0].county + "(Housing stock: " + housingStock + ")");
}


function emptyPropertys(arg1, arg2) {
    return ((arg1 / arg2) * (100)).toFixed(0);
}