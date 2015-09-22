var slider = new MasterSlider();
  slider.control('arrows');  
  slider.control('lightbox');
  slider.control('thumblist' , {autohide:false ,dir:'h',align:'bottom', width:130, height:190, margin:5, space:5 , hideUnder:400});
  slider.setup('masterslider' , {
    width:600,
    height:875,
    space:5,
    loop:true,
    view:'basic'
  });

$(document).ready(function(){
  $("a[rel^='prettyPhoto']").prettyPhoto();
});