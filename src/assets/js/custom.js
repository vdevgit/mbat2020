(function($) {
  
  "use strict";  

  $(window).on('load', function() {

    setTimeout(()=>{
      $("#bootstrapForm").submit(function(event) {

        var vForm = $(this);

        if (vForm[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        } else {        

          console.log("your form is valid and ready to send");           
        }         

        vForm.addClass('was-validated');          

      });
      
    }, 500);



  /* Ticket
    ========================================================*/

    // $(document).ready(function(){
    //   console.log('ready');
      
    //   $('.toggle-tickets').click(function() {
    //       $tickets = $(this).parent().siblings('.collapse');
        
    //       if ($tickets.hasClass('in')) {
    //         $tickets.collapse('hide');
    //         $(this).html('Show Tickets Details');
    //         $(this).closest('.ticket-card').removeClass('active');
    //       } else {
    //         $tickets.collapse('show');
    //         $(this).html('Hide Tickets Details');
    //         $(this).closest('.ticket-card').addClass('active');
    //       }
    //     });

    // });


    $(document).ready(function(){
      $('.pass_show').append('<span class="ptxt">Show</span>');  
    });        
      
    $(document).on('click','.pass_show .ptxt', function(){ 
      
      $(this).text($(this).text() == "Show" ? "Hide" : "Show");      
      $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 
      
    });  





  //   $(document).ready(function(){
  //     $("#testimonial-slider").owlCarousel({
  //         items:1,
  //         itemsDesktop:[1000,1],
  //         itemsDesktopSmall:[979,1],
  //         itemsTablet:[768,1],
  //         pagination:false,
  //         navigation:true,
  //         navigationText:["",""],
  //         autoPlay:true
  //     });
  // });



  });      

}(jQuery));
