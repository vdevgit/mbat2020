(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /* Ticket
    ========================================================*/

    $(document).ready(function(){
      console.log('ready');
      
      $('.toggle-tickets').click(function() {
          $tickets = $(this).parent().siblings('.collapse');
        
          if ($tickets.hasClass('in')) {
            $tickets.collapse('hide');
            $(this).html('Show Tickets Details');
            $(this).closest('.ticket-card').removeClass('active');
          } else {
            $tickets.collapse('show');
            $(this).html('Hide Tickets Details');
            $(this).closest('.ticket-card').addClass('active');
          }
        });

    });


    $(document).ready(function(){
      $("#testimonial-slider").owlCarousel({
          items:1,
          itemsDesktop:[1000,1],
          itemsDesktopSmall:[979,1],
          itemsTablet:[768,1],
          pagination:false,
          navigation:true,
          navigationText:["",""],
          autoPlay:true
      });
  });



  });      

}(jQuery));