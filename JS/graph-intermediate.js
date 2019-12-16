

anychart.onDocumentReady(function () {

    var chart = anychart.fromJson(
        {chart: { type: "line",

                // set range marker
                rangeAxesMarkers: [{
                    scale: 1,
                    from: 0,
                    to: 30,
                    fill: {
                        keys: [ ".1 red", ".5 green", ".9 yellow"],
                        angle: -90,
                        opacity: 0.5
                    }}],

                // set text marker at the top
                "textAxesMarkers": [{
                    "scale": 1,
                    "offsetX": 10,
                    "value": 25,
                    "fontSize": 15,
                    "text": "Dangerous",
                    "fontWeight": 600},

// set text marker at the center
                    {
                        "scale": 1,
                        "offsetX": 10,
                        "value": 15,
                        "text": "Optimal",
                        "fontSize": 18,
                        "fontWeight": 600},

// set text marker at the bottom
                    {
                        "scale": 1,
                        "offsetX": 10,
                        "value": 5,
                        "text": "Poor",
                        "fontSize": 15,
                        "fontWeight": 600}],



                // data set
                series: [{seriesType: "line",
                    data: [ {x: "Falmouth", value: "10"},
                        {x: "Croyd", value: "12"},
                        {x: "Thurso East", value: "18"},
                        {x: "Fistral Beach", value: "19"},
                        {x: "Port Rush", value: "29"}
                    ]}],
                title: {enabled: "false",},
                yScale: {minimum: "0", maximum: "30"},
                xAxes: {title: {enabled: "false"}},
                yAxes: {title: "Sales"},
                container: "container"}}
    ).draw();

    var title = chart.title();
    title.text("Surf Spots");
    chart.getSeries(0).name("Wind speed in Knots: ");
});

