
    // header active
    $(document).ready(function(){
        $('.nav-center li a').click(function(){
            //remove all pre-existing active classes
            $('.nav-center li a.active').removeClass('active');
            $(this).addClass('active');
        });
    });



//   header script

function closeDiv() {
	document.getElementById("Dropdown2").style.display = "none";
}

function openNav() {
	document.getElementById("mySidebar").style.width = "320px";
	document.getElementById("mySidebar").style.transition = "0.5s";
	document.getElementById("mySidebar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.75) ";
	document.getElementById("SidebarUl").style.opacity = "1";
	document.getElementById("SidebarUl").style.transition = "0.2s";
}
var abc;

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("mySidebar").style.boxShadow = "none ";
	document.getElementById("SidebarUl").style.opacity = "0 ";
	document.getElementById("SidebarUl").style.transition = "0.1s";
	var sd = document.getElementsByClassName("MobileNav2");
	for (let i = 0; i < sd.length; i++) {
		sd[i].style.width = "0";
		sd[i].style.left = "-100px";
	}

}

function OpenLi(clickedID) {
	var elementid = document.getElementById(clickedID);
	let str = clickedID;
	str = str.substring(1);
	// alert(str);
	// if ("NavItem1" == clickedID) {
	var Imgid = document.getElementById(str);
	Imgid.style.width = "320px";
	Imgid.style.left = "0";
	abc = Imgid;
	// }
}

function backtoNav() {
	var ccc = abc;
	ccc.style.width = "0";
	ccc.style.left = "-100px";

}

// top x
$(document).ready(function(){
	$(".cross-top-bar").click(function(){
	  $(".top-h-breadcrumb").hide();
	});
  });



//  ============  product page slider =============

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:'<i class="far fa-chevron-left prod_slider_prev"></i>',
    // nextArrow:'<i class="far fa-chevron-right prod_slider_next"></i>',
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // prevArrow:'<i class="far fa-chevron-left prod_slider_prev"></i>',
    // nextArrow:'<i class="far fa-chevron-right prod_slider_next"></i>',
    dots: false,
    focusOnSelect: true,
    verticalSwiping:true,
});


//   mega menu slider
$('.mega-menu-slider').slick({
	  nextArrow:'<img class="mega-slider-arrow" src="./assets/images/slider-menu-arrow.svg" alt="img">',
	arrows:true,
	slidesToShow: 2,
	infinite: true,
	autoplay:true,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 1680,
		  settings: {
			
		  }
		}
	  ]
  });

// home offering-slider
$('.offering-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows:false,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 1199,
			settings: {
			  slidesToShow: 3
			}
		  },
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
  });


  $('.pro-detail-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true
  });



  $(document).ready(function(){
	$('.quick-buttons button').click(function(){
		//remove all pre-existing active classes
		$('.quick-buttons button.active').removeClass('active');
		$(this).addClass('active');
	});
});


