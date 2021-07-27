function toggleMobileMenu(event) {
    document.querySelector("#menu").classList.toggle("active");
    document.querySelector(".mobile-bar").classList.toggle('active');
}
$(function (){
    var star = '.star',
        selected = '.selected';
    
    $(star).on('click', function(){
      $(selected).each(function(){
        $(this).removeClass('selected');
      });
      $(this).addClass('selected');
    });
   
  });