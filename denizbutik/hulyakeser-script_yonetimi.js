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
  
  
/**/


  var html = $('<div class="storyMainCont" id="story">' +
    '<div class="slideLeftBTN">' +
    '<img class="slideLeftBTNimg" src="/Uploads/EditorUploads/left.jpg" >' +
    '</div>' +
    '<div class="hiza">' +
    '<div class="storyCont">' +
    '</div>' +
    '</div>' +
    '<div class="slideRightBTN">' +
    '<img class="slideRightBTNimg" src="/Uploads/EditorUploads/right.jpg" >' +
    '</div>' +
    '</div>');
  $("#mainHolder_divDesign > section:first-child").before(html);

  $(".slideRightBTN").on("click", function () {
    var aaRight = document.querySelector("#story > div.hiza");
    aaRight.scrollLeft += 1000;
    $('.slideLeftBTNimg').css({ "opacity": "1", "transitionDuration": "0.5s" })

    var strSyi = document.querySelectorAll("div.storyCont > a.linkstr");
    var totalWidth = strSyi.length * 100;
    var getScrollWidth = totalWidth - 1000;

    setTimeout(function () {
      if (aaRight.scrollLeft == getScrollWidth) {
        $('.slideRightBTNimg').css({ "opacity": "0", "transitionDuration": "0.5s" })
      }
    }, 650);

  });

  $(".slideLeftBTN").on("click", function () {
    var aaLeft = document.querySelector("#story > div.hiza");
    aaLeft.scrollLeft -= 1000;
    $('.slideRightBTNimg').css({ "opacity": "1", "transitionDuration": "0.5s" })

    setTimeout(function () {
      if (aaLeft.scrollLeft == 0) {
        $('.slideLeftBTNimg').css({ "opacity": "0", "transitionDuration": "0.5s" })
      }

    }, 650);


  })

  // Variables

  var Json = [
    { "Name": "Yeni Gelenler", "PictureUrl": "/Uploads/EditorUploads/0006843.jpeg", "Url": "/hk-collection" },
    { "Name": "Tesettür Abiyeler", "PictureUrl": "/Uploads/EditorUploads/0006844.jpeg", "Url": "/abiye-16" },
    { "Name": "Tarz Abiyeler", "PictureUrl": "/Uploads/EditorUploads/0006842.jpeg", "Url": "/abiye-16" },
    { "Name": "Şık Elbiseler", "PictureUrl": "/Uploads/EditorUploads/0006840.jpeg", "Url": "/elbise-25" },
    { "Name": "Zarif Elbiseler", "PictureUrl": "/Uploads/EditorUploads/0006845.jpeg", "Url": "/elbise-25" },
    { "Name": "Pantolon Takımlar", "PictureUrl": "/Uploads/EditorUploads/0006848.jpeg", "Url": "/takim-18" },
    { "Name": "Etekli Takımlar", "PictureUrl": "/Uploads/EditorUploads/0006847.jpeg", "Url": "/takim-18" },
    { "Name": "Şal", "PictureUrl": "/Uploads/EditorUploads/0006839.jpeg", "Url": "/sal-23" },
    { "Name": "Sosyal Medya", "PictureUrl": "/Uploads/EditorUploads/0006841.jpeg", "Url": "https://www.instagram.com/hulyakeser.officiall/" }
  ];


  // Slide Array
  var stories = new Array();
  stories = Json;

  // Each slide items in story
  $.each(stories, function (index, picture) {

    var storyItem = $('<a href="' + picture.Url + '" class="linkstr"><div class="storyRing"><div class="colorRing"><img class="storyimg" src="' + picture.PictureUrl + '" alt="' + picture.Name + '"/></div><div class="storyText">' + picture.Name + '</div></div></a>');

    $(".storyCont").append(storyItem);
  });
  

/**/


document.querySelector('#btnKelimeAra').removeAttribute("value");


/**/


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
