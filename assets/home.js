/* Master Slider
==================================================================*/

var slider = new MasterSlider();
  slider.setup('masterslider' , {
  width:1400,    // slider standard width
  height:650,   // slider standard height
  fullwidth:true,
  view:"flow",
  autoplay:true,
  loop:true,
  speed:18,
  space:5
});
// adds Arrows navigation control to the slider.
slider.control('arrows' ,{insertTo:'#masterslider'},{autohide:true});  
slider.control('bullets' ,{autohide:false});


/* Parallax Banner
==================================================================*/

$(".parallax-banner").pureparallax({
  overlayBackgroundColor: '#000',
  overlayOpacity : '0.45',
  timeout: 200
});

$(".parallax-titlebar").pureparallax({
  timeout: 100
});


/* Product Carousel
==================================================================*/
	
var owl = $(".products-carousel .carousel");

owl.owlCarousel({
  pagination: false,
  autoPlay: true,
  stopOnHover: true,
});

// Custom Navigation Events
$(".next").click(function(){
  owl.trigger('owl.next');
})
$(".prev").click(function(){
  owl.trigger('owl.prev');
})