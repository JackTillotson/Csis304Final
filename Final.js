/**
 * Created by jtillotson13 on 4/11/2017.
 */
function query() {

    var url = "https://query.yahooapis.com/v1/public/yql?";
    var criteria = $("#keywords").val();
    criteria = encodeURI(criteria);
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + criteria + "')";
    var jsonChannel;
    var jsonForecast;

    if (criteria.length > 0) {
        $("#results").empty();
        $.getJSON(url,
            {
                q: query,
                format: "json",
                env: "store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            }
        ).done(function(data) {
            jsonChannel = data.query.results.channel;
            jsonForecast = jsonChannel.item.forecast;
            var days = [];
            var highTemp =[];
            var lowTemp =[];

            $("#rawData").val(JSON.stringify(data));
            $("<h3>").html(jsonChannel.description).appendTo("#results");
            //$("<table>").attr("id", "resultsTable").attr("class", "table table-hover").appendTo("#results");
            $("<table><tr><th>Day</th><th>High</th>" +
                "<th>Low</th><th>Conditions</th>" +
                "</tr>").attr("id", "resultsTable").attr("class", "table table-hover").appendTo("#results");
            $.each(jsonForecast, function (i, item) {
                days.push(item.day);
                highTemp.push(item.high);
                lowTemp.push(item.low);
                $("<tr>").append(
                    $("<td>").html(item.day),
                    $("<td>").html(item.high),
                    $("<td>").html(item.low),
                    $("<td>").html(item.text)
                ).appendTo("#resultsTable");
            });

            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'High Temperate',
                        data: highTemp,
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)'
                        ],
                        borderWidth: 1
                    },
                        {
                            label: 'Low Temperate',
                            data: lowTemp,
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)'
                            ],
                            borderColor: [
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)'
                            ],
                            borderWidth: 1
                        }
                        ]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                steps: 11,
                                stepValue: 10,
                                max: 110
                            }
                        }]
                    }
                }
            });


            /** $("<table>").attr("id", "resultsTable").appendTo("#results");
            $("<tr>").append(
                $("<td>").html(
                    $("<a>").attr("temperature", jsonChannel.item.condition.temp)
                ),
                $("<td>").append(jsonChannel.item.condition.temp)
            ).appendTo("#resultsTable");
            */
        });
    }
}


function query1() {

    var url = "https://query.yahooapis.com/v1/public/yql?";
    var criteria = $("#keywords1").val();
    criteria = encodeURI(criteria);
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + criteria + "')";
    var jsonChannel;
    var jsonForecast;

    if (criteria.length > 0) {
        $("#results1").empty();
        $.getJSON(url,
            {
                q: query,
                format: "json",
                env: "store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            }
        ).done(function (data) {
            jsonChannel = data.query.results.channel;
            jsonForecast = jsonChannel.item.forecast;
            var days = [];
            var highTemp =[];
            var lowTemp =[];

            $("#rawData1").val(JSON.stringify(data));
            $("<h4>").html(jsonChannel.description).appendTo("#results1");
            //$("<table>").attr("id", "resultsTable1").attr("class", "table table-hover").appendTo("#results1");
            $("<table><tr><th>Day</th><th>High</th>" +
                "<th>Low</th><th>Conditions</th>" +
                "</tr>").attr("id", "resultsTable1").attr("class", "table table-hover").appendTo("#results1");
            $.each(jsonForecast, function (i, item) {
                days.push(item.day);
                highTemp.push(item.high);
                lowTemp.push(item.low);
                $("<tr>").append(
                    $("<td>").html(item.day),
                    $("<td>").html(item.high),
                    $("<td>").html(item.low),
                    $("<td>").html(item.text)
                ).appendTo("#resultsTable1");
            });

            var ctx = document.getElementById("myChart1");
            var myChart1 = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'High Temperate',
                        data: highTemp,
                        backgroundColor: [
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)',
                            'rgba(255, 0, 0, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)',
                            'rgba(255, 0, 0, 1)'
                        ],
                        borderWidth: 1
                    },
                        {
                            label: 'Low Temperate',
                            data: lowTemp,
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)',
                                'rgba(0, 0, 255, 0.6)'
                            ],
                            borderColor: [
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)',
                                'rgba(0, 0, 255, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                steps: 11,
                                stepValue: 10,
                                max: 110
                            }
                        }]
                    }
                }
            });

        });

    }
}


function query2() {

    var url = "https://query.yahooapis.com/v1/public/yql?";
    var criteria = $("#keywords").val();
    criteria = encodeURI(criteria);
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + criteria + "')";
    var jsonChannel;
    var jsonForecast;

    if (criteria.length > 0) {
        $("#results").empty();
        $.getJSON(url,
            {
                q: query,
                format: "json",
                env: "store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            }
        ).done(function (data) {
            jsonChannel = data.query.results.channel;
            jsonForecast = jsonChannel.item.forecast;


            $("#rawData").val(JSON.stringify(data));
            $("<h4>").html(jsonChannel.description).appendTo("#results");
            $("<table><tr><th>Wind Speed</th><th>Sunrise</th>" +
                "<th>Sunset</th><th>Temperature</th><th>Conditions</th>" +
                "</tr>").attr("id", "resultsTable").attr("class", "table table-hover").appendTo("#results");
            $("<td>").html(jsonChannel.wind.speed + " mph").appendTo("#resultsTable");
            $("<td>").html(jsonChannel.astronomy.sunrise).appendTo("#resultsTable");
            $("<td>").html(jsonChannel.astronomy.sunset).appendTo("#resultsTable");
            $("<td>").html(jsonChannel.item.condition.temp).appendTo("#resultsTable");
            $("<td>").html(jsonChannel.item.condition.text).appendTo("#resultsTable");
        });
    }
}


function query3() {

    var url = "https://query.yahooapis.com/v1/public/yql?";
    var criteria = $("#keywords1").val();
    criteria = encodeURI(criteria);
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + criteria + "')";
    var jsonChannel;
    var jsonForecast;

    if (criteria.length > 0) {
        $("#results1").empty();
        $.getJSON(url,
            {
                q: query,
                format: "json",
                env: "store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            }
        ).done(function (data) {
            jsonChannel = data.query.results.channel;
            jsonForecast = jsonChannel.item.forecast;


            $("#rawData1").val(JSON.stringify(data));
            $("<h4>").html(jsonChannel.description).appendTo("#results1");
            $("<table><tr><th>Wind Speed</th><th>Sunrise</th>" +
                "<th>Sunset</th><th>Temperature</th><th>Conditions</th>" +
                "</tr>").attr("id", "resultsTable1").attr("class", "table table-hover").appendTo("#results1");
            $("<td>").html(jsonChannel.wind.speed + " mph").appendTo("#resultsTable1");
            $("<td>").html(jsonChannel.astronomy.sunrise).appendTo("#resultsTable1");
            $("<td>").html(jsonChannel.astronomy.sunset).appendTo("#resultsTable1");
            $("<td>").html(jsonChannel.item.condition.temp).appendTo("#resultsTable1");
            $("<td>").html(jsonChannel.item.condition.text).appendTo("#resultsTable1");
        });
    }
}



/**
 {"query":{"count":1,"created":"2017-04-15T19:59:17Z",
     "lang":"en-US",
     "results":{"channel":{"units":{"distance":"mi",
     "pressure":"in","speed":"mph",
     "temperature":"F"},
     "title":"Yahoo! Weather - Sherwood, OR, US",
         "link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2492539/",
         "description":"Yahoo! Weather for Sherwood, OR, US",
         "language":"en-us",
         "lastBuildDate":"Sat, 15 Apr 2017 12:59 PM PDT",
         "ttl":"60",
         "location":{"city":"Sherwood",
         "country":"United States",
         "region":" OR"},"wind":{"chill":"50",
         "direction":"35",
         "speed":"7"},
     "atmosphere":{"humidity":"57",
         "pressure":"1011.0",
         "rising":"0",
         "visibility":"16.1"},
     "astronomy":{"sunrise":"6:26 am",
         "sunset":"7:57 pm"},
     "image":{"title":"Yahoo! Weather",
         "width":"142",
         "height":"18",
         "link":"http://weather.yahoo.com",
         "url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},
     "item":{"title":"Conditions for Sherwood, OR, US at 12:00 PM PDT",
         "lat":"45.359859",
         "long":"-122.842911",
         "link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2492539/",
         "pubDate":"Sat, 15 Apr 2017 12:00 PM PDT",
         "condition":{"code":"30",
         "date":"Sat, 15 Apr 2017 12:00 PM PDT",
         "temp":"52",
         "text":"Partly Cloudy"},
         "forecast":[{"code":"30",
             "date":"15 Apr 2017",
             "day":"Sat",
             "high":"58",
             "low":"38",
             "text":"Partly Cloudy"},
             {"code":"12",
                 "date":"16 Apr 2017",
                 "day":"Sun",
                 "high":"64",
                 "low":"41",
                 "text":"Rain"},
             {"code":"39",
                 "date":"17 Apr 2017",
                 "day":"Mon",
                 "high":"57",
                 "low":"48",
                 "text":"Scattered Showers"},
             {"code":"39",
                 "date":"18 Apr 2017",
                 "day":"Tue",
                 "high":"58",
                 "low":"47",
                 "text":"Scattered Showers"},
             {"code":"39",
                 "date":"19 Apr 2017",
                 "day":"Wed",
                 "high":"56",
                 "low":"45",
                 "text":"Scattered Showers"},
             {"code":"47",
                 "date":"20 Apr 2017",
                 "day":"Thu",
                 "high":"57",
                 "low":"45",
                 "text":"Scattered Thunderstorms"},
             {"code":"28",
                 "date":"21 Apr 2017",
                 "day":"Fri",
                 "high":"62",
                 "low":"42",
                 "text":"Mostly Cloudy"},
             {"code":"28",
                 "date":"22 Apr 2017",
                 "day":"Sat",
                 "high":"63",
                 "low":"48",
                 "text":"Mostly Cloudy"},
             {"code":"28",
                 "date":"23 Apr 2017",
                 "day":"Sun",
                 "high":"63",
                 "low":"46",
                 "text":"Mostly Cloudy"},
             {"code":"12",
                 "date":"24 Apr 2017",
                 "day":"Mon",
                 "high":"63",
                 "low":"49",
                 "text":"Rain"}],
             "description":"<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/30.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Partly Cloudy\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Sat - Partly Cloudy. High: 58Low: 38\n<BR /> Sun - Rain. High: 64Low: 41\n<BR /> Mon - Scattered Showers. High: 57Low: 48\n<BR /> Tue - Scattered Showers. High: 58Low: 47\n<BR /> Wed - Scattered Showers. High: 56Low: 45\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2492539/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)\n<BR />\n]]>",
             "guid":{"isPermaLink":"false"}}}}}}
 */