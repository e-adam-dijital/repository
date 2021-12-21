// Tüm Sayfalar - Header 
  $(document).ready(function(){
  $(".mobilMenu #HeaderMenu2 > li:first-child").before(`<li><a href="/" target="_self" title="anasayfa"><img src="/Uploads/EditorUploads/anasayfa.jpg" alt="mobilMenu"></a></li>`)
	 $(".mobilMenu #HeaderMenu2 > li > a").each(function(){
  var kategoriAd = $(this).text();
  console.log(kategoriAd)
  switch (kategoriAd) {
        case 'Elbise':
          $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/elbise.jpg" alt="mobilMenu" />')
            break;

        case 'Takım':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/takim.jpg" alt="mobilMenu" />')
            break;

         case 'Şal':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/sal.jpg" alt="mobilMenu" />')
            break;

          case 'Abiye':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/abiye.jpg" alt="mobilMenu" />')
            break; 
      
       case 'Kaban':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/kaban.jpg" alt="mobilMenu" />')
            break; 
       case 'HK Collection':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/hk-collection.jpg" alt="mobilMenu" />')
            break; 
       case 'Abaya':
       $(this).text("");
          $(this).append('<img src="/Uploads/EditorUploads/abaya.jpg" alt="mobilMenu" />')
            break; 
    
    }
});
})
  
  if ($(window).width() > 1200) {
      $(document).ready(function () {
          $(".headerContent .navigation").before('<div class = "headerContentContainer"></div>');
          $("#header .headerContent >div:not(.navigation)").appendTo(".headerContentContainer");

          $("#header .headerContentContainer #divArama #txtbxArama").attr("placeholder", "Ürün veya Kategori ara..");

          $(window).scroll(function () {
              $("#header").removeClass("fixed");
              $(".global_body").removeClass("margin");
          });
          setTimeout(function () {
            $("#header .headerContentContainer #divArama #btnKelimeAra").val("");
          $("#header #lang_flag_container").appendTo(".header-top-links");
          $("#header .arabtn").html(
              `<a href= "/Hesabim#/Favorilerim"><i class=\"fal fa-search\"></i>Favorilerim</a>`
          ); }, 100);
      });

     
        
      
  }
  
 
//  Tüm Sayfalar 

document.querySelector('#btnKelimeAra').removeAttribute("value");


if($(window).width() < 768){
  $(".headerContent").prepend($("#divMemberPanel"));
  $(".headerContent > #divMemberPanel").css({"top":"17.5px","right":"52.5px","display":"block"});
}

$(document).ready(function () {
	$(".mobilMenu .menuUstBolum .mobilMenuBT").after($("#divTopProductSearch").clone());

	$(".mobilMenu #HeaderMenu2").after(`<div class="mobilContainer"><ul class="mobilMenuHesap">
		<h4>Hesabım</h4>
		<li class="giris"><a href="/UyeGiris">Giriş</a></li>
		<li class="favorii"><a href="/Hesabim#/Favorilerim">Favorilerim</a></li>
		<li class="siparis"><a href="/Hesabim#/Siparislerim">Siparişlerim</a></li>
		<li class="sirarisT"><a href="/siparisTakip#/Hesabim-Anasayfa">Sipariş Takibi</a></li>
		<li class="iletisim"><a href="/iletisim">İletişim</a></li>
		</ul>
		<ul class="mobilMenuSosyal">
		<h4>Bizi Takip Edin</h4>
		<li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
		<li><a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a></li>
		<li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
		<li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
		</ul></div>
	`)
});


/**/


$(document).ready(function () {
 
    var $btn = $('<a>')
    .attr('href', 'https://api.whatsapp.com/send?phone=905386683486&text=Sipariş vermek istiyorum.')
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
