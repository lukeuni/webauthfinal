// start of google map // 

function initMap() {

// get user position //
    
x = navigator.geolocation;

    // success and failure for get geo position of user. // 
    
x.getCurrentPosition(success, failure);

    // If we manage to get the location then do this stuff. Also style the hell out of the map. //
    
function success(position) {
    var mylat = position.coords.latitude;
    var mylong = position.coords.longitude;
    var venue1 = {lat: 53.2272, lng: -0.5450};
    var venue2 = {lat: 53.2343, lng: -0.5360};
    var coords = new google.maps.LatLng(mylat, mylong);
    var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: coords,
          styles: [
                 {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e5c163"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#575757"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
                
                
            ]
        });
    
    // click on venue and show information about the next show with drop animations. // 
         var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Blink 182 Engine Shed</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Engine Shed Lincoln</b>, part of the university <b>The Engine Shed</b>, is a large ' +
            'concert hall with plenty of space for a blink 182 show bla bla'+'</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

    
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          animation: google.maps.Animation.DROP,

        });
        var venue1 = new google.maps.Marker({
          position: venue1,
          icon: 'https://image.ibb.co/j9AaAR/map_icon_home.png',
          map: map,  
          animation: google.maps.Animation.DROP,
      })
        
        
        var venue2 = new google.maps.Marker({
          position: venue2,
          icon: 'https://image.ibb.co/j9AaAR/map_icon_home.png',
          map: map,
          animation: google.maps.Animation.DROP,

      })
        
// listen for that click and show the info when it is clicked.  //
        
         venue1.addListener('click', function() {
          infowindow.open(map, venue1);
        });
    
        
}


function failure(){
    
}
    
// local storage for theme. //    
      
var mytheme = localStorage.getItem("theme"); 

//fucntions for CD's start for hiding and unhiding top image on event listener//

// the commented out code here is something i came up with to get the fade animation to work with firefox but it wasn't sustainable option. //
    
function cd1Theme() {
  /*var newImage = "/assets/images/backgrounds/hero__st__bg.png";
  $("#sc-track-title")[0].innerHTML = "I MISS YOU";
  $("#hero")[0].style.backgroundImage = "url(" + newImage + ")";
  $("#hero-fading").fadeOut(400, function() {
    $("#hero-fading")[0].style.backgroundImage = "url(" + newImage + ")";
    $("#hero-fading")[0].style.opacity = "1";
    $("#hero-fading")[0].style.display = "block"; */
    $("body").attr('class', '');
    $('body').addClass('cd1Theme');
    window.localStorage.setItem('theme', 1);
  };


function cd2Theme() {
 /* var newImage = "/assets/images/backgrounds/hero__to__bg.png";
    $("#sc-track-title")[0].innerHTML = "I MISS YOU";
    $("#hero")[0].style.backgroundImage = "url(" + newImage + ")";
    $("#hero-fading").fadeOut(400, function() {
    $("#hero-fading")[0].style.backgroundImage = "url(" + newImage + ")";
    $("#hero-fading")[0].style.opacity = "1";
    $("#hero-fading")[0].style.display = "block";*/
    $("body").attr('class', '');
    $('body').addClass('cd2Theme');
    window.localStorage.setItem('theme', 2);
  };
    

function cd3Theme() {
 /* var newImage = "/assets/images/backgrounds/hero__es__bg .png";
  $("#sc-track-title")[0].innerHTML = "I MISS YOU";
  $("#hero")[0].style.backgroundImage = "url(" + newImage + ")";
  $("#hero-fading").fadeOut(400, function() {
    $("#hero-fading")[0].style.backgroundImage = "url(" + newImage + ")";
    $("#hero-fading")[0].style.opacity = "1";
    $("#hero-fading")[0].style.display = "block";*/
    $("body").attr('class', '');
    $('body').addClass('cd3Theme');
    window.localStorage.setItem('theme', 3);
  };
function homeTheme() {
 /* var newImage = "/assets/images/backgrounds/hero__es__bg .png";
  $("#sc-track-title")[0].innerHTML = "I MISS YOU";
  $("#hero")[0].style.backgroundImage = "url(" + newImage + ")";
  $("#hero-fading").fadeOut(400, function() {
    $("#hero-fading")[0].style.backgroundImage = "url(" + newImage + ")";
    $("#hero-fading")[0].style.opacity = "1";
    $("#hero-fading")[0].style.display = "block";*/
    $("body").attr('class', '');
    $('body').addClass('');
    window.localStorage.setItem('theme', 0);
  };



//functions for CD's end //

//event listner on click for mini CD's at top of screen to change theme //
`   `
$(document).ready(function(){
  $('#cd-1').click(function() {
    cd1Theme();
  });
  $('#cd-2').click(function() {
    cd2Theme();
  });
  $('#cd-3').click(function() {
    cd3Theme();
  });
    $('#logo').click(function() {
    homeTheme();
  });
    
 // local storage logic for which theme is being saved and shown. //
    
if (window.localStorage.getItem("theme") == 0) {
    homeTheme();
  }
  if (window.localStorage.getItem("theme") == 1) {
    cd1Theme();
  }
  if (window.localStorage.getItem("theme") == 2) {
    cd2Theme();
  }
  if (window.localStorage.getItem("theme") == 3) {
    cd3Theme();
  }
    
    
    
// sidebar button event listner for clicking it into canvas. This code is no longer used as I decided to use an all CSS approach for my hamburger menu.  //
    
 /*   
  $('.sidebar-btn').click(function(){
  $('.sidebar').toggleClass('visible');
  });
}); */


// scroll function for drop shadow on sticky navbar and shadows // 

$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#nav").addClass("active");
  }
  else {
    $("#nav").removeClass("active");
  }
});

    // Javascript library for showing elements in an interesting way. // 
AOS.init();
    
    // Custom bx slider with auto hide controls. //
    
    $('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: false,
  pager: false,
  responsive: true,
  easing: 'easeInOutQuint',  
  speed: 800,
  startSlide: 0,
  randomStart: false,
  preloadImages: 'visible',
 
        
        // TOUCH
    touchEnabled: true,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: true,
});

}

