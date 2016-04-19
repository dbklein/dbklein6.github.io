$(function(){
  // toggle 'selected' class on click
  $('.thumbnail').click(function(){
    $(this).toggleClass('selected');
    updateSelectedItemCount();
    // need to check the checkbox in the input so that it shows up on formspree
  });

  // show caption on hover
  $('.thumbnail').hover(function(){
    $(this).find('.caption').toggleClass('slideDown');
  });

  // show number of items selected in the order below the gallery
  function updateSelectedItemCount() {
    var selectedItems = $('.selected').length
    if (selectedItems === 0) {
      $('.numberOfItemsSelected').text("Click on a piece of gear to add it to your order.");
    }
    else if (selectedItems === 1) {
      $('.numberOfItemsSelected').text("Order: " + selectedItems + " item");
    }
    else {
      $('.numberOfItemsSelected').text("Order: " + selectedItems + " items");
    }
    };

  // create the array of items
  // on load, create the five thumbnails

  // var items = [
  //   {
  //     name: "Backpack",
  //     image: "../images/backpack.jpg",
  //   },
  //   {
  //     name: "Bike",
  //     image: "../images/bike.jpg",
  //   },
  //   {
  //     name: "Flip Flops",
  //     image: "images/flipflops.jpg",
  //   },
  //   {
  //     name: "Snacks",
  //     image: "images/snacks.jpg",
  //   },
  //   {
  //     name: "Sunglasses",
  //     image: "images/sunglasses.jpg",
  //   },
  //   {
  //     name: "Towel",
  //     image: "images/towel.jpg",
  //   }
  // ]

  // window.onload = function() {
  //   items.forEach(function(item, index){
  //     $(".gallery div").css("background-image", "url( " + item.image + " )");
  //   });
  // };

});
