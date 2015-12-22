$(document).ready(){
var dir = "img/";
var fileextension = ".png";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        console.log(dir);
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            console.log(filename);
            $("body").append($("<img src=" + dir + filename + "></img>"));
        });
    }
  });
});
