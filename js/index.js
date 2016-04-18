$(function(){

  // toggle class of selected when clicking on one of the items. selected highlights yellow
  $('.thumbnail').click(function(){
    $(this).toggleClass('selected');
    updateSelectedItemCount();
  });

  function updateSelectedItemCount() {
    var selectedItems = $('.selected').length
    if (selectedItems === 1) {
      $('.numberOfItemsSelected').text(selectedItems + " item selected");
    }
    else {
      $('.numberOfItemsSelected').text(selectedItems + " items selected");
    };

  };
});
