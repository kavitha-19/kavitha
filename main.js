jQuery(document).ready(function()
 {  
     //----------custom functions ---------------

     //logo
     var $logo = $('#logo');
     if(location.href.indexOf('#')!= -1)
      {
        $logo.show();
      }

      //show logo
      $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');
        });

    //hide logo
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow');
        });

    //---------------menu---------------

    //needed variables
    var $content = $("#content");


    //Run easytabs
    $content.easytabs({
        animate        : true,
        updateHash     : false,
        transitionIn   : 'slideDown',
        transitionOut  : 'slideUp',
        animationSpeed :  600,
        tabs           : '.tmenu',
        tabActiveClass : 'active',
      });

      //Hover menu effect
      $content.find('.tabs li a').hover(
          function()
           {
               $(this).stop().animate({ marginTop : "-70px"},200);
           },function() {
               $(this).stop().animate({ marginTop: "0px"},300);
              }
      );
  });


  // add this rail gallery effect
$(document).on('click', '#socialShare > .socialBox', function() {

  var self = $(this);
  var element = $('#socialGallery a');
  var c = 0;

  if (self.hasClass('animate')) {
    return;
  }

  if (!self.hasClass('open')) {

    self.addClass('open');

    TweenMax.staggerTo(element, 0.3, {
        opacity: 1,
        visibility: 'visible'
      },
      0.075);
    TweenMax.staggerTo(element, 0.3, {
        top: -12,
        ease: Cubic.easeOut
      },
      0.075);

    TweenMax.staggerTo(element, 0.2, {
        top: 0,
        delay: 0.1,
        ease: Cubic.easeOut,
        onComplete: function() {
          c++;
          if (c >= element.length) {
            self.removeClass('animate');
          }
        }
      },
      0.075);

    self.addClass('animate');

  } else {

    TweenMax.staggerTo(element, 0.3, {
        opacity: 0,
        onComplete: function() {
          c++;
          if (c >= element.length) {
            self.removeClass('open animate');
            element.css('visibility', 'hidden');
          };
        }
      },
      0.075);
  }




});