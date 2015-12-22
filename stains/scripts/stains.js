var folder = "img/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.jpg|\.png|\.gif/) ) {
                $("#photos").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});
