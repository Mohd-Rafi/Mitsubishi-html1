$(document).ready(function(){var o,s;o=window.navigator.userAgent,((s=o.indexOf("MSIE"))>0?parseInt(o.substring(s+5,o.indexOf(".",s))):navigator.userAgent.match(/Trident\/7\./)?11:0)>0&&($(window).width()<=600?$("body").addClass("mob600"):$(window).width()<=768?$("body").addClass("mob768"):$(window).width()<=800?$("body").addClass("mob800"):$(window).width()<=1024?$("body").addClass("ipad1024"):$("body").removeClass("ipad1024 mob800 mob600 mob768"));var a=$("#top-right-tile");$(a).owlCarousel({loop:!1,margin:0,nav:!1,autoplay:!0,autoplayTimeout:4e3,autoHeight:!1,responsive:{0:{items:1},600:{items:1},1000:{items:1,dots:!1}}}),$(".qualitybox .arrow-icon").click(function(){a.trigger("next.owl.carousel")}),$("#sync2").owlCarousel({margin:15,dots:!1,nav:!0,responsive:{0:{items:2,dots:!0},480:{items:2,dots:!0},768:{items:3,dots:!0},1023:{items:4}}}),$(".menutogglebtn").click(function(){$(this).toggleClass("active"),$(".menubox").toggleClass("active")}),$("#sparkbtn").click(function(){$(this).toggleClass("active"),$(".sparkoverlaybox").toggleClass("active")}),$("#medantabtn").click(function(){$(this).toggleClass("active"),$(".medantaoverlaybox").toggleClass("active")});var i=0;$(".plusbtn").click(function(){$(this).toggleClass("active"),0==i?($(this).next().fadeIn(),i=1):1==i&&($(this).next().fadeOut(),i=0)});var t=0;function e(){$(window).width()<767&&($("#about-stories").find(".col-md-4").addClass("px-0"),$("#about-stories").addClass("owl-carousel"),$("#about-stories").owlCarousel({items:1,autoplay:!0,loop:!0,margin:0,autoplaySpeed:3e3,autoplayHoverPause:!1,nav:!1,dots:!0,responsive:{0:{items:1},560:{items:1},992:{items:1},1100:{items:1}}}))}$(".pluslinkbtn").click(function(){0==t?($(".sparkoverlaybox .displayHidden").css("opacity","1"),$(".sparkoverlaybox .displayHidden").css("transition","0.6s"),$(".sparkoverlaybox .displayHidden").css("transition-delay","1s"),$(".medantaoverlaybox .displayHidden").css("opacity","1"),$(".medantaoverlaybox .displayHidden").css("transition","0.6s"),$(".medantaoverlaybox .displayHidden").css("transition-delay","1s"),t=1):1==t&&($(".sparkoverlaybox .displayHidden").css("opacity","0"),$(".sparkoverlaybox .displayHidden").css("transition","0s"),$(".sparkoverlaybox .displayHidden").css("transition-delay","0s"),$(".medantaoverlaybox .displayHidden").css("opacity","0"),$(".medantaoverlaybox .displayHidden").css("transition","0s"),$(".medantaoverlaybox .displayHidden").css("transition-delay","0s"),t=0)}),$(".accordianheading").click(function(){$(this).toggleClass("active"),$(this).parents(".accordianmainbox").find(".accordiancontent").toggleClass("active"),$(this).parents(".accordianmainbox").siblings().find(".accordianheading ").removeClass("active"),$(this).parents(".accordianmainbox").siblings().find(".accordiancontent").removeClass("active")}),$(window).resize(function(){e()}),e(),$(".newscarousel").owlCarousel({items:5,autoplay:!0,loop:!0,margin:10,autoplaySpeed:3e3,autoplayHoverPause:!1,nav:!1,dots:!1,responsive:{0:{items:1.3},560:{items:2.3},992:{items:3.2},1100:{items:4.2}}}),$(".aboutslider").owlCarousel({items:3,autoplay:!0,loop:!0,margin:15,smartSpeed:200,slideSpeed:500,autoplaySpeed:1e3,nav:!1,dots:!1,responsive:{0:{items:2.3},560:{items:3.3},992:{items:3.3}}}),$(".casestudyslider").owlCarousel({loop:!0,margin:0,autoHeight:!0,nav:!1,dots:!0,responsive:{0:{items:1},560:{items:1}}}),$("#Insights-carousel").owlCarousel({loop:!1,margin:30,autoHeight:!0,nav:!0,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],dots:!1,responsive:{0:{items:1,nav:!1,dots:!0},768:{items:2},992:{items:3}}}),$(window).width()<767&&($("#carousel-proInstall").addClass("owl-carousel"),$("#carousel-proInstall").addClass("no-gutters"),$("#carousel-proInstall").owlCarousel({loop:!1,margin:0,nav:!1,dots:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}})),$(".collapse").on("shown.bs.collapse",function(){$(this).prev().addClass("active-acc"),$(this).prev().find(".navbar-toggler-icon").children().removeClass("ti-menu").addClass("ti-close")}),$(".collapse").on("hidden.bs.collapse",function(){$(this).prev().removeClass("active-acc"),$(this).prev().find(".navbar-toggler-icon").children().removeClass("ti-close").addClass("ti-menu")}),$(window).width()<767&&($(".productcontentbox p").slideUp(),$(".productcontentbox h3").click(function(){$(this).next().slideToggle()})),$("#function_video").modalVideo(),$("#top_video_btn, #top_video_btn1, #top_video_btn2, #top_video_btn3, #top_video_btn4, #top_video_btn5, #top_video_btn6, #top_video_btn7").modalVideo(),$("#top_video_btn_1, #top_video_btn_2, #top_video_btn_3, #top_video_btn_4, #top_video_btn_5, #top_video_btn_6").modalVideo(),$("#about_us_btn_1, #about_us_btn_2").modalVideo()});