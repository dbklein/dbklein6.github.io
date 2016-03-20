$(function(){
  // Execute function on submit
  $("form").submit(swapPic)

  function swapPic(event){
    event.preventDefault();
    var entry;
    // Get entry from form and store as variable entry
    entry = $("#city-type").val();

    // use logic to figure out which city the entry is
    // set the background of the page to the appropriate picture

    if (entry === "New York" || entry === "New York City" || entry === "NYC") {
      $("body").css("background","url(images/nyc.jpg)");
    }

    else if (entry === "San Francisco" || entry === "SF" || entry === "Bay Area") {
      $("body").css("background","url(images/sf.jpg)");
    }

    else if (entry === "Los Angeles" || entry === "LA" || entry === "LAX") {
      $("body").css("background","url(images/la.jpg)");

    }
    else if (entry === "Austin" || entry === "ATX") {
      $("body").css("background","url(images/austin.jpg)");
    }

    else if (entry === "Sydney" || entry === "SYD") {
      $("body").css("background","url(images/sydney.jpg)");
    }
    // in case entry is not one of our covered cities, display citipix_skyline.jpg
    else {
      $("body").css("background","url(images/citipix_skyline.jpg)");
    };

  }

});
