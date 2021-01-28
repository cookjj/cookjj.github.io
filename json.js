$().ready(function(){
    $.getJSON( "/data.json", function( thedata ) {
        $("#text").html(thedata["text"]);
    });

    $.getJSON( "/data.json", function( thedata ) {
        $("#ed0res").html("Edition 0: " + thedata["edition_0_res"]);
    });
});
