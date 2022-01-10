// Tüm Sayfalar - Header 

    $(document).ready(function () {
        $("body").append('<div class="navHover"></div>');
        $(".navigation").hover(function () {
            $(".navHover").toggle();
        });
  $(".mobilMenu #HeaderMenu2").before('<img src="https://www.siustore.co/Uploads/EditorUploads/basliksiz-1siu.jpg" class="mobilMenuGorsel">')
    });


// Site Footer

    var windowidth = window.innerWidth; //window width orani
    $(document).ready(function () {
        $('#divNewsLetter').prependTo('.ticiBultenContent');

        $(".ticiFooterMenu .footerCol h3").on("click", function (event) {
            $(this).parents(".footerCol").toggleClass("active");
            event.preventDefault();

        });
    });
	

//  Tüm Sayfalar 

$(document).ready(function () {
 
    var $btn = $('<a>')
    .attr('href', 'https://api.whatsapp.com/send?phone=905451502138&text=Sipariş vermek istiyorum.')
    .addClass('fixed-whatsapp')
    .text('WHATSAPP İLE SİPARİŞ VER')
    .on("click", function (e) {
      e.preventDefault();

      var $el = $(this);
      
      if ($el.hasClass("active")) {
        window.location.href = $el.attr('href');
      } else {
        $el.addClass("active");
        setTimeout(function () { $el.removeClass("active"); }, 3000);
      }
    });
    $('body').append($btn);
  
});


if ( $('#divOzelAlan3').length == 0 ){
  $('.urun-detay-yazi-sayac').css('display','none');
}