function loadData(){
    artist_name = "";
    console.log("runs");
    $.getJSON( "http://anime-coin.com/gallery.json", function( data ) {
            $.each( data.artists , function(key, val) {
                    artist_name = val.name;
                    $.each(val.arts, function(akey, aval){
                        $("#gallery").append("<a href='http://anime-coin.com'><img alt='"+ artist_name + "' src='images/thumbs/" + artist_name + "__" + aval + "' data-image='images/big/" + artist_name + "__" + aval + "' data-description='"+ artist_name + "' style='display:none'</a>");
                    });
                });
                jQuery("#gallery").unitegallery({
                    tile_enable_textpanel:true,
                    tile_textpanel_title_text_align: "center",
                    tile_textpanel_always_on:true,
                });
      }).fail(function() {
        console.log( "error" );
      }).done(function(){
        
      });
}

$(document).ready(function() {
    setInterval(function() {
        $(".loader").fadeOut("slow");
    }, 12000)
          

});
loadData();