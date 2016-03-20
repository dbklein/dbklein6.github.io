$(function(){
  // Execute function on submit
  $("form").submit(swapPic)

  function swapPic(event){
    event.preventDefault();
    // Create entry variable
    var entry;
    // Get entry from form and store as variable entry
    entry = $("#city-type").val().toLowerCase();

    alert(entry);
    // use logic to figure out which city the entry is
    // set the background of the page to the appropriate picture

    if (entry === "new york" || entry === "new york city" || entry === "nyc") {
      $("body").css("background","url(images/nyc.jpg)");
    }

    else if (entry === "san francisco" || entry === "sf" || entry === "bay area") {
      $("body").css("background","url(images/sf.jpg)");
    }

    else if (entry === "los angeles" || entry === "la" || entry === "lax") {
      $("body").css("background","url(images/la.jpg)");

    }
    else if (entry === "austin" || entry === "atx") {
      $("body").css("background","url(images/austin.jpg)");
    }

    else if (entry === "sydney" || entry === "syd") {
      $("body").css("background","url(images/sydney.jpg)");
    }
    // in case entry is not one of our covered cities, display citipix_skyline.jpg
    else {
      $("body").css("background","url(images/citipix_skyline.jpg)");
    };

  }

});
