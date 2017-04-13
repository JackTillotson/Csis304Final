/**
 * Created by jtillotson13 on 4/11/2017.
 */
function query() {

    var url = "https://query.yahooapis.com/v1/public/yql?";
    var criteria = $("#keywords").val();
    criteria = encodeURI(criteria);
    var query = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + criteria + "')";
    if (criteria.length > 0) {
        $("#results").empty();
        $.getJSON(url,
            {
                q: query,
                format: "json",
                env: "store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
            }
        ).done(function(data) {
            $("#rawData").val(JSON.stringify(data));
            $("<table>").attr("id", "resultsTable").appendTo("#results");
            $.each(data.items, function(i, item) {
                $("<tr>").append(
                    $("<td>").html(
                        $("<a>").attr("href", item.link).html(item.title)
                    ),
                    $("<td>").html(
                        $("<img>").attr("src", item.media.m)
                    )
                ).appendTo("#resultsTable");
            })
        });
    }
}