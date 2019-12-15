anychart.onDocumentReady(function () {
    // this column represents JS equivalents every JSON object
    var chart = anychart.fromJson(
        {chart: { type: "line",

                // set range marker
                rangeAxesMarkers: [{
                    scale: 1,
                    from: 0,
                    to: 30000,
                    fill: {
                        keys: [ ".1 green", ".5 yellow", ".9 red"],
                        angle: -90,
                        opacity: 0.5
                    }}],

                // set text marker at the top
                "textAxesMarkers": [{
                    "scale": 1,
                    "offsetX": 10,
                    "value": 25000,
                    "fontSize": 15,
                    "text": "Good",
                    "fontWeight": 600},

// set text marker at the center
                    {
                        "scale": 1,
                        "offsetX": 10,
                        "value": 15000,
                        "text": "Average",
                        "fontSize": 15,
                        "fontWeight": 600},

// set text marker at the bottom
                    {
                        "scale": 1,
                        "offsetX": 10,
                        "value": 5000,
                        "text": "Severe",
                        "fontSize": 12,
                        "fontWeight": 600}],



                // data set
                series: [{seriesType: "line",
                    data: [ {x: "2005", value: "10000"},
                        {x: "2006", value: "12000"},
                        {x: "2007", value: "18000"},
                        {x: "2008", value: "19000"},
                        {x: "2009", value: "29000"}
                    ]}],
                title: {enabled: "false",},
                yScale: {minimum: "0", maximum: "30000"},
                xAxes: {title: {enabled: "false"}},
                yAxes: {title: "Sales"},
                container: "container"}}
    ).draw();

    var title = chart.title();
    title.text("Sales Performance");
});

