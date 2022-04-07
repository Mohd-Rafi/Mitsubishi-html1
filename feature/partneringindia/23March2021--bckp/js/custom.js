$(document).ready(function() {

  function GetIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0){
      return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
    } 
      

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)){
      return 11;
    } 
    else{
      return 0; //It is not IE
    }
  }

  if (GetIEVersion() > 0) {
    // alert("This is IE " + GetIEVersion());
    if($(window).width() <= 600){
      //alert("800");
      $('body').addClass('mob600');
    }else if($(window).width() <= 768){
      $('body').addClass('mob768');
    }else if($(window).width() <= 800){
      $('body').addClass('mob800');
    }else if($(window).width() <= 1024){
      //alert("1024");
      $('body').addClass('ipad1024');
    }else{
      //alert("else");
      $('body').removeClass('ipad1024 mob800 mob600 mob768');
    }

  }
    
  else{
     //alert("This is not IE.");
  } 


  var topRightCarousel = $('#top-right-tile');
  $(topRightCarousel).owlCarousel({
      loop:false,
      margin:0,
      nav:false,
      autoplay:true,
      autoplayTimeout:4000,
      autoHeight:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1,
              dots:false
          }
      }
  });

  $('.qualitybox .arrow-icon').click(function(){
      topRightCarousel.trigger('next.owl.carousel');
    });

    // var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    // var slidesPerPage = 4;
    // var syncedSecondary = true;
  
    // sync1.owlCarousel({
    //   items : 1,
    //   slideSpeed : 2000,
    //   nav: true,
    //   autoplay: false,
    //   dots: false,
    //   loop: true,
    //   responsiveRefreshRate : 200,
    // }).on('changed.owl.carousel', syncPosition);
  
    
      // .on('initialized.owl.carousel', function () {
      //   sync2.find(".owl-item").eq(0).addClass("current");
      // })
      sync2.owlCarousel({
      margin: 15,
      dots: false,
      nav: true,
      responsive: {
        0: {
            items: 2,
            dots:true
        },
        480: {
            items: 2,
            dots:true
        },
        768: {
            items: 3,
            dots:true
        },
        1023: {
            items: 4
        }
      }
    })

   
    $('.menutogglebtn').click(function(){
      $(this).toggleClass('active');
      $('.menubox').toggleClass('active');
    });
    $('#sparkbtn').click(function(){
      $(this).toggleClass('active');
      $('.sparkoverlaybox').toggleClass('active');
    });
    $('#medantabtn').click(function(){
      $(this).toggleClass('active');
      $('.medantaoverlaybox').toggleClass('active');
    });

    var Flg=0;
    $('.plusbtn').click(function(){
      $(this).toggleClass('active');
      if(Flg==0){
        $(this).next().fadeIn();
        Flg=1;
      }
      else if(Flg==1){
        $(this).next().fadeOut();
        Flg=0;
      }
    });

    // $(".pluslinkbtn").click(function(){
    //   $(".sparkoverlaybox .displayHidden").css("opacity", "1")
    //   $(".sparkoverlaybox .displayHidden").css("transition", "0.6s")
    //   $(".sparkoverlaybox .displayHidden").css("transition-delay", "1s")
    // });


var navFlg=0;

    $(".pluslinkbtn").click(function(){
      if(navFlg==0){
        $(".sparkoverlaybox .displayHidden").css("opacity", "1")
        $(".sparkoverlaybox .displayHidden").css("transition", "0.6s")
        $(".sparkoverlaybox .displayHidden").css("transition-delay", "1s")
        $(".medantaoverlaybox .displayHidden").css("opacity", "1")
        $(".medantaoverlaybox .displayHidden").css("transition", "0.6s")
        $(".medantaoverlaybox .displayHidden").css("transition-delay", "1s")
       navFlg=1;
      }
      else if(navFlg==1){
        $(".sparkoverlaybox .displayHidden").css("opacity", "0")
        $(".sparkoverlaybox .displayHidden").css("transition", "0s")
        $(".sparkoverlaybox .displayHidden").css("transition-delay", "0s")
        $(".medantaoverlaybox .displayHidden").css("opacity", "0")
        $(".medantaoverlaybox .displayHidden").css("transition", "0s")
        $(".medantaoverlaybox .displayHidden").css("transition-delay", "0s")        
       navFlg=0;
      }
     });

    $('.accordianheading').click(function(){
      $(this).toggleClass('active');
      $(this).parents('.accordianmainbox').find('.accordiancontent').toggleClass('active');
      $(this).parents('.accordianmainbox').siblings().find('.accordianheading ').removeClass('active');
      $(this).parents('.accordianmainbox').siblings().find('.accordiancontent').removeClass('active');
    });

  //   if (window.DeviceOrientationEvent) {
  //     window.addEventListener('orientationchange', function() { location.reload(); }, false);
  // }

  
    // $('.productslider').owlCarousel({
    //   loop:true,
    //   margin:0,
    //   nav:true,
    //   dots:false,
    //   autoHeight:true,
    //   responsive:{
    //     0:{
    //       items:1
    //     },
    //     560:{
    //       items:1
    //     }        
    //   }
    // });
    $(window).resize(function(){
      aboutStories();
    });
    function aboutStories(){
      if($(window).width() < 767){
        $('#about-stories').find('.col-md-4').addClass('px-0');
        $('#about-stories').addClass('owl-carousel');
        $('#about-stories').owlCarousel({
          items: 1,
          autoplay: true,
          loop: true,
          margin:0,
          autoplaySpeed: 3000,
          autoplayHoverPause: false,
          nav: false,
          dots:true,
          responsive:{
            0:{
              items:1
            },
            560:{
              items:1
            },
            992:{
              items:1
            },
            1100:{
              items:1
            }         
          }
        });
      }
    }
    aboutStories();

    $('.newscarousel').owlCarousel({
      items: 5,
      autoplay: true,
      loop: true,
      margin: 10,
      autoplaySpeed: 3000,
      autoplayHoverPause: false,
      nav: false,
      dots:false,
      responsive:{
        0:{
          items:1.3
        },
        560:{
          items:2.3
        },
        992:{
          items:3.2
        },
        1100:{
          items:4.2
        }         
      }
    });
    $('.aboutslider').owlCarousel({
      items: 3,
      autoplay: true,
      loop: true,
      margin: 15,
      smartSpeed: 200,
      slideSpeed : 500,
      autoplaySpeed: 1000,
      nav: false,
      dots:false,
      responsive:{
        0:{
          items:2.3
        },
        560:{
          items:3.3
        },
        992:{
          items:3.3
        }       
      }
    });

    $('.casestudyslider').owlCarousel({
      loop:true,
      margin:0,      
      autoHeight:true,
      nav:false,
      dots:true,
      responsive:{
        0:{
          items:1
        },
        560:{
          items:1
        }         
      }
    });

    $('#Insights-carousel').owlCarousel({
      loop:false,
      margin:30,      
      autoHeight:true,
      nav:true,
      navText: ["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
      dots:false,
      responsive:{
        0:{
          items:1,
          nav:false,
          dots:true,
        },
        768:{
          items:2
        },     
        992:{
          items:3
        },       
      }
    });

    
    if($(window).width() < 767){
      $('#carousel-proInstall').addClass('owl-carousel');
      $('#carousel-proInstall').addClass('no-gutters');
      $('#carousel-proInstall').owlCarousel({
          loop:false,
          margin:0,
          nav:false,
          dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
    }

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active-acc');
        $(this).prev().find('.navbar-toggler-icon').children().removeClass('ti-menu').addClass('ti-close');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active-acc');
        $(this).prev().find('.navbar-toggler-icon').children().removeClass('ti-close').addClass('ti-menu');
    });


    // if ($(window).width() > 767){
    //   $('.myList').simpleLoadMore({
    //     item: '.loadstory',
    //     count:9,
    //     counterInBtn: true,
    //     itemsToLoad: 3,
    //     btnText: 'Load More',
    //   });
    // }


    if ($(window).width() < 767){
      $('.productcontentbox p').slideUp();
      $('.productcontentbox h3').click(function(){
        $(this).next().slideToggle();
      });

      // $('.myList').simpleLoadMore({
      //   item: '.loadstory',
      //   count:3,
      //   counterInBtn: true,
      //   btnText: 'Load More',
      //   itemsToLoad: 1,
      // });
    }

    // video
    $('#function_video').modalVideo();
    $('#top_video_btn, #top_video_btn1, #top_video_btn2, #top_video_btn3, #top_video_btn4, #top_video_btn5, #top_video_btn6, #top_video_btn7').modalVideo();
    $('#top_video_btn_1, #top_video_btn_2, #top_video_btn_3, #top_video_btn_4, #top_video_btn_5, #top_video_btn_6').modalVideo();
    $('#about_us_btn_1, #about_us_btn_2').modalVideo();



      

});

