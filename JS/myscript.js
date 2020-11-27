// on document ready execute method
$(function(){

    // pre loader 

    $(window).on('load',function(){
        $('#preloader').delay(500).fadeOut();
        $('#loadingimg').delay(500).fadeOut('slow');
    });

    // team members slider

    $('#team-members').owlCarousel({
        items: 2,
        smartSpeed: 400,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        dots: false,
        navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });

    // progress animation on scroll

    $('#team-section').waypoint(function(){
        $('.progress-bar').each(function(){
            $(this).animate({
                width:$(this).attr('aria-valuenow') +'%'
            },1000);
        });
        this.destroy();
    });

    var velocity = 0.5;

function update(){ 
var pos = $(window).scrollTop(); 
$('.statement-section').each(function() { 
    var $element = $(this);
    // subtract some from the height b/c of the padding
    var height = $element.height()-18;
    $(this).css('backgroundPosition', '0% ' + Math.round((height - pos) * velocity) +  'px'); 
   }); 
   };

 $(window).bind('scroll', update);




});