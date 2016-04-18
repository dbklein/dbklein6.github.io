$(function(){

  // toggle class of selected when clicking on one of the items. selected highlights yellow
  $('.thumbnail').click(function(){
    $(this).toggleClass('selected');
    updateSelectedItemCount();
  });

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
    };

  };
});
