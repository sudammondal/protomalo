//=============sitebar js=============//
function openNav() {
  document.getElementById("mySidenav").style.width = "290px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//==============header js===========//
var prevScrollpos = window.pageYOffset; 
window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("Header").style.top = "0";
      } else {
        document.getElementById("Header").style.top = "-108px";
      }
      prevScrollpos = currentScrollPos;
    }

    //============= tab items js===============//
    function showhide() {
      var x = document.querySelectorAll("#London");
      var i;
      if ($("#Paris") === "block" || $("#London")==="block") {
        $("#Paris").hide();
        $("#London").hide();
        $("#Tokyo").show();
        } else {
          $("#Paris").show();
        $("#London").show();
        $("#Tokyo").hide();
      }
    }
  
  function button_1(){
  
    $('#London').show();
    $('#London1').show();
    $('#London2').show();
  
    $('#Paris').hide();
    $('#Paris1').hide();
    $('#Paris2').hide();
  
    $('#Tokyo').hide();
    $('#Tokyo1').hide();
    $('#Tokyo2').hide();
  }
  
  function button_2(){
    $('#Paris').show();
    $('#Paris1').show();
    $('#Paris2').show();
  
    $('#Tokyo').hide();
    $('#Tokyo1').hide();
    $('#Tokyo2').hide();
  
    $('#London').hide();
    $('#London1').hide();
    $('#London2').hide();
  }
  function button_3(){
    $('#Tokyo').show();
    $('#Tokyo1').show();
    $('#Tokyo2').show();
  
    $('#Paris').hide();
    $('#Paris1').hide();
    $('#Paris2').hide();
  
    
    $('#London').hide();
    $('#London1').hide();
    $('#London2').hide();
  }

  //================slick slider js===============//
  $(document).ready(function(){
    $('.world_slider_items').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
      autoplay: false,
      variableWidth: false,
    });
  });
  $(document).ready(function(){
    $('.ficture_main').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: false,
          }
          },
            {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
                  dots: false,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  dots: false,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  dots: false,
              }
          }
      ]
    });
  });