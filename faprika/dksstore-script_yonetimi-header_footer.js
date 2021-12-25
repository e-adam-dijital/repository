// Tüm Sayfalar - Header 

    $(document).ready(function () {
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
       $("#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisForm >div >div:last-child").after(
            `<div class="yeniUyelikButon"> Hesabın Yok Mu? <span clas= "uyeButton"> Üye Ol</span> </div>`
        );
        $("#mainHolder_divUserLoginContent.userLoginContent .userDivLeft #divUyeGirisForm .spanTittle").before(
            '<div class= "uyelogo"><a class="logo" href="/"><img src="https://www.dksstore.com/Uploads/EditorUploads/website-logo.png"></a></div>'
        );
        $("#mainHolder_divUserLoginContent.userLoginContent .userDivRight .spanTittle").before(
            '<div class= "uyelogo"><a class="logo" href="/"><img src="https://www.dksstore.com/Uploads/EditorUploads/website-logo.png"></a></div>'
        );
        $("#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .userDivRow").before(
            `<div class= "girisUyeOlContainer"><div class=girisAktif>Giriş Yap</div><div class= "uyeOlAktif">Üye Ol</div></div>`
        );
        $(
            "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:first-child"
        ).addClass("uyeButtonAktif");
        $(
            "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:first-child"
        ).on("click", function () {
            $("#mainHolder_divUserLoginContent.userLoginContent .userDivLeft").css("display", "block");
            $("#mainHolder_divUserLoginContent.userLoginContent .userDivRight").css("display", "none");
            $(
                "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:first-child"
            ).addClass("uyeButtonAktif");
            $(
                "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:last-child"
            ).removeClass("uyeButtonAktif");
        });
        $("#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisForm .yeniUyelikButon span").on(
            "click",
            function () {
                $("#mainHolder_divUserLoginContent.userLoginContent .userDivLeft").css("display", "none");
                $("#mainHolder_divUserLoginContent.userLoginContent .userDivRight").css("display", "block");
                $(
                    "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:first-child"
                ).removeClass("uyeButtonAktif");
                $(
                    "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:last-child"
                ).addClass("uyeButtonAktif");
            }
        );
        $(
            "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:last-child"
        ).on("click", function () {
            $("#mainHolder_divUserLoginContent.userLoginContent .userDivLeft").css("display", "none");
            $("#mainHolder_divUserLoginContent.userLoginContent .userDivRight").css("display", "block");
            $(
                "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:last-child"
            ).addClass("uyeButtonAktif");
            $(
                "#mainHolder_divUserLoginContent.userLoginContent #divUyeGirisContent .girisUyeOlContainer > div:first-child"
            ).removeClass("uyeButtonAktif");
        });

        setTimeout(function () {
            if (window.location.pathname == "/SiparisTamamla" || window.location.pathname == "/Odeme" || window.location.pathname =="/SiparisTamamlandi") {
                $("#header .htop").css("display", "none");
                $("body #header .icons").css("display", "none");
                $("#header #divTopProductSearch").css("display", "none");
                $("#footer").css("display", "none"); 
                $("#header .headerContent").css("display", "flex");
                $("#header .headerContent").css("justify-content", "center");
            }
            if (window.location.pathname == "/UyeGiris" || window.location.pathname == "/UyeGirisOnay.aspx") {
                $("body #header").css("display", "none");
                $("body #footer").css("display", "none");
                $("#htmlGlobal").css("height", "100%");
                $("body").css("height", "100%");
                $("body").css("display", "grid");
                $("body").css("align-items", "center");
            }
            $("#header .headerContentContainer #divArama #btnKelimeAra").val("");
            $("#header .headerContentContainer #divArama #txtbxArama").attr("placeholder", "Aradığınız ürünü yazın...");
        }, 100);
        $(".headerContent .navigation").before('<div class = "headerContentContainer"></div>');
        $("#header .headerContent >div:not(.navigation)").appendTo(".headerContentContainer");

        $(window).scroll(function () {
            $("#header").removeClass("fixed");
            $(".global_body").removeClass("margin");
        });
        if ($(window).width() < 768) {
            $(".bottomHead > ul > li:last-child a").appendTo(".mycartClick");
        }

/*
    $(".navigation #HeaderMenu2 li.ulVar:first-child .Flexscroll > ul > li:last-child").after(`<li class="menuBanner">
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kadin-bot.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kadin-sweat.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kadin-mont.jpg"></a>
     </li>`);
      $(".navigation #HeaderMenu2 li.ulVar:nth-child(2) .Flexscroll > ul > li:last-child").after(`<li class="menuBanner">
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/erkek-bot.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/erkek-sweat.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/erkek-mont.jpg"></a>
     </li>`);
    $(".navigation #HeaderMenu2 li.ulVar:nth-child(3) .Flexscroll > ul > li:last-child").after(`<li class="menuBanner">
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/oglan-bot.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/oglan-sweat.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/oglan-mont.jpg"></a>
     </li>`);
      $(".navigation #HeaderMenu2 li.ulVar:nth-child(4) .Flexscroll > ul > li:last-child").after(`<li class="menuBanner">
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kiz-bot.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kiz-sweat.jpg"></a>
   <a href="/">  <img src="https://www.dksstore.com/Uploads/EditorUploads/kiz-mont.jpg"></a>
     </li>`);*/
    });
	

// Site Footer

 
//  Tüm Sayfalar 

    document.addEventListener("DOMContentLoaded", () => {
      if(document.querySelector("#mainHolder_ucOdeme_liMenuKrediKarti")) {
        document.querySelector("#mainHolder_ucOdeme_liMenuKrediKarti a").click();
      }
    });
	
	
  $(document).ready(function () {
   
      var $btn = $('<a>')
      .attr('href', 'https://api.whatsapp.com/send?phone=905326421226&text=Sipariş vermek istiyorum.')
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
  
  
   $(document).ready(function(){
  
      if($(window).width() > 1200){
    $("#header").before('<a href="/en-yeniler"><img src="https://www.dksstore.com/Uploads/Slider/-3.jpg?t=20211216122917"><</a>')
  }
  else{
      $(".headerContent").before('<a href="/en-yeniler"><img src="https://www.dksstore.com/Uploads/Slider/-4.jpg?t=20211216122924"></a>')
  }
  })
  
  
  if( window.location.pathname == "/Odeme" ) {
  $('.KapidaOdemeContent').after(`<div style="color: red;font-weight: bold;">Kapıda ödeme ücreti +19 TL'dir. Kapıda ödeme sisteminde yanlızca nakit ödeme yapabilirsiniz. Kredi kartı ile ödeme yapılamamaktadır.</div>`); 
  }
    
	
  $(document).ready(function(){
    if(window.location.pathname != "/Sepetim" && window.location.pathname != "/SiparisTamamla" && window.location.pathname != "/Odeme"){
  $("#header").before(`<div class="ps-container--sticky-scroll">
      <ul class="brands">
          <li class="brand"><a href="/benetton">
                  <img src="https://www.dksstore.com/Uploads/EditorUploads/benetton.png" alt="marka">
              </a></li>
          <li class="brand"><a href="/crocs">
             <img src="https://www.dksstore.com/Uploads/EditorUploads/crocs.png" alt="marka">
              </a></li>
          <li class="brand"><a href="/jump">
               <img src="https://www.dksstore.com/Uploads/EditorUploads/jump.png" alt="marka">
              </a></li>
          <li class="brand"><a href="/lumberjack">
                  <img src="https://www.dksstore.com/Uploads/EditorUploads/lumberjack.png" alt="marka">
  
              </a></li>
          <li class="brand"><a href="/u.s.-polo-assn">
                  <img src="https://www.dksstore.com/Uploads/EditorUploads/polo.png" alt="marka">
              </a></li>
          <li class="brand"><a href="/puma">
               <img src="https://www.dksstore.com/Uploads/EditorUploads/puma.png" alt="marka">
              </a></li>
          <li class="brand">
              <a href="/scooter">
              <img src="https://www.dksstore.com/Uploads/EditorUploads/scooter.png" alt="marka">   
              </a>
          </li>
          <li class="brand">
              <a href="/vicco">
                 <img src="https://www.dksstore.com/Uploads/EditorUploads/vicco.png" alt="marka">            
              </a>
          </li>
      </ul>
  </div>`);
    }
  })
  
  $(document).scroll(function() { 
     $(".ps-container--sticky-scroll").addClass("is-pinned")
        if($(window).scrollTop() == 0){
        $(".ps-container--sticky-scroll").removeClass("is-pinned")
      }
  });
  
  
if ( window.location.pathname == "/SiparisTamamla" ) {
    $('#cbHediyePaketi').click(function() {
        if ( $('#cbHediyePaketi').is(":checked") ) {  
            $(".HediyeContent").after(
                `<img src="https://www.dksstore.com/Uploads/EditorUploads/surprise-note-img.png" style="position: absolute;bottom: 0;right: 10%;width: 25%;height: auto;">`
              );
        }else{
            $(".HediyeContent + img").remove()
        }
    });
}