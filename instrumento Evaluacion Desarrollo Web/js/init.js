document.addEventListener('DOMContentLoaded', () => {
    
   // Navegation Menu
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);

   // Slider
   var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
       indicators: false,
       height: 500,
       duration: 500,
       interval:3000
    });

});

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


   $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });

var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });




    
