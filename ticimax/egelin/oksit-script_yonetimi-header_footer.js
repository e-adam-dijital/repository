// Tüm Sayfalar - Header 

$(document).ready(() => {
  
  if($(window).width() > 1199) {
  
	$(".headerUyeOl a").text("Kayıt Ol");
  
  	let logo = $("#logo");
  	let headerCart = $("#divHeaderCart");
  	let search = $("#divTopProductSearch");

  	$(logo).remove();
  	$(headerCart).remove();
  	//$(search).remove();
	
	$(search).addClass("txcol-sm-4");
  
    $(".navigation").before(
      	'<div class="headerCustom hazirBlokContent">'
      	+ '<div class="txrow">'
      	/*
		+ '<div id="search" class="txcol-sm-4">'
		+ $(search).html()
      	+ '</div>'
		*/
      	+ '<div id="logo" class="txcol-sm-4">'
		+ $(logo).html()
      	+ '</div>'
      	+ '<div id="divHeaderCart" class="txcol-sm-4 mycart more">'
		+ $(headerCart).html()
      	+ '<span><a href="/Hesabim#/Favorilerim">Favorilerim</a></span>'
      	+ '</div>'
		+ '</div>'
      	+ '</div>'
    );
	
	$(search).prependTo($(".headerCustom > .txrow"));


  	$("#txtbxArama").attr("placeholder","");
	
  
	let divMemberPanel = $("#divMemberPanel");
  
	$(".htop .ticiContainer").append($(divMemberPanel));

	$(".navigation .navUl > li > .Flexscroll").each(function(){
		switch($(this).prev("a").text().trim()) {
		  case "Erkek Giyim":
			$(this).prepend('<a href="/erkek-giyim"><img src="https://www.oksit.com.tr/Uploads/EditorUploads/yeni-erkek-giyim2.jpg" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  case "Kadın Giyim":
			$(this).prepend('<a href="/kadin"><img src="" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  case "Çocuk Giyim":
			$(this).prepend('<a href="/cocuk"><img src="https://www.oksit.com.tr/Uploads/EditorUploads/yeni-cocuk-giyim.jpg" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  case "Erkek Ayakkabı":
			$(this).prepend('<a href="/erkek-ayakkabi"><img src="https://www.oksit.com.tr/Uploads/EditorUploads/yeni-erkek-ayakkabi2.jpg" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  case "Kadın Ayakkabı":
			$(this).prepend('<a href="/kadin-ayakkabi"><img src="https://www.oksit.com.tr/Uploads/EditorUploads/yeni-kadin-ayakkabi2.jpg" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  case "Çocuk Ayakkabı":
			$(this).prepend('<a href="/cocuk-ayakkabi"><img src="https://www.oksit.com.tr/Uploads/EditorUploads/yeni-cocuk-ayakkabi2.jpg" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
			break;
		  default:
			$(this).prepend('<a href="/"><img src="" style="float: left;margin: 0 80px 0 20px;max-width: 400px;"></a>');
		}
	});
	
	
    $(".navigation .navUl > li > .Flexscroll").append(
		'<div class="dropdownMenuRight" style="float: left; margin-left: 50px; font-size: 14px; line-height: 2;">'
		+ $("#footer .linkler .blink > ul > li:nth-child(4)").html()
		+ $("#footer .linkler .blink > ul > li:nth-child(3)").html()
		+ '</div>');
    
  }

  /*
  $("#mainHolder_divDesign .landing-block:nth-child(2)").after('<div class="tumunu-goruntule"><a href="#">Tüm Kategorileri Görüntüle</a></div>');
  */
  
  if($(".htop").length === 1){
	$(".htop .ticiContainer").prepend($(".usernav"));
  }
  
if($(window).width() <= 1199) {
  
  let divMemberPanel = $("#divMemberPanel");
  
  $("#header").prepend($(divMemberPanel));
  
  $(".headerContent").prepend(
	'<div class="searchClick"><i class="fal fa-search"></i></div>'
	+ '<div class="mycart" style="position: relative; left: 15px; top: 20px; float: left;">'
	+ '<span><a href="/Hesabim#/Favorilerim">&nbsp;</a></span>'
	+ '</div>'
  );
  
  $('.searchClick').click(function(){
	$('.searchContent').toggleClass('active-custom');
  });
  
}

  setTimeout(() => {
	windowLoad();
  }, 1);

});
  

$(window).load(() => {
	windowLoad();
});

function windowLoad(){
  	let arabtn = $(".arabtn");
  
  	$(arabtn).remove();
  
  	$("#divArama").prepend($(arabtn));
  
 	$(".mycart .sepetTecxt").text("Sepet");
}


// Site Footer


//  Tüm Sayfalar 

    
    /* /UyeGiris Başlangıç */
    if(window.location.pathname.replace(/^\/|\/$/g, '') == "UyeGiris") {
      
      $("#divUyeGirisForm .spanTittle").text("Hesabınıza Giriş Yapın");
      
      $("#mainHolder_divUserLoginContent").before(`
        <div class="categoryTitleText userLoginTitleText">
            <ul class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" href="/">
                        <span itemprop="name">Anasayfa</span>
                        <meta itemprop="position" content="1">
                    </a>&gt;
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <span itemprop="name" style="color: #777;">Üye Girişi</span><meta itemprop="position" content="2">
                </li>
            </ul>
            <span style="font-size: 25px;">Üye Girişi</span>
        </div>`);
      
    }
    /* /UyeGiris Bitiş */
    
    /* /iletisim Başlangıç */
    if(window.location.pathname.replace(/^\/|\/$/g, '') == "iletisim") {
      
      if($(window).width() >= 1200) {
    
        var iletisimSolMenuKurumsal = $("#footer .linkler .blink > ul > li:nth-child(4)");
        var iletisimSolMenuMHizmetleri = $("#footer .linkler .blink > ul > li:nth-child(3)");
    
        $(".middleTopBlock").after('<div class="iletisimLeftBlock">' + $(iletisimSolMenuKurumsal).html() + $(iletisimSolMenuMHizmetleri).html() + '</div>');
    
      }
      
      $("#mainHolder_divBlocks").before(`
        <div class="categoryTitleText iletisimTitleText">
            <ul class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" href="/">
                        <span itemprop="name">Anasayfa</span>
                        <meta itemprop="position" content="1">
                    </a>&gt;
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <span itemprop="name" style="color: #777;">İletişim</span><meta itemprop="position" content="2">
                </li>
            </ul>
            <span style="font-size: 25px;">İletişim</span>
        </div>`);
    }
    /* /iletisim Bitiş */
    
    /* /hakkimizda Başlangıç */
    if(window.location.pathname.replace(/^\/|\/$/g, '') == "hakkimizda") {
      
      if($(window).width() >= 1200) {
    
        var iletisimSolMenuKurumsal = $("#footer .linkler .blink > ul > li:nth-child(4)");
        var iletisimSolMenuMHizmetleri = $("#footer .linkler .blink > ul > li:nth-child(3)");
    
        $(".middleTopBlock").after('<div class="iletisimLeftBlock">' + $(iletisimSolMenuKurumsal).html() + $(iletisimSolMenuMHizmetleri).html() + '</div>');
    
      }
      
      $("#mainHolder_divBlocks").before(`
        <div class="categoryTitleText iletisimTitleText">
            <ul class="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <a itemprop="item" href="/">
                        <span itemprop="name">Anasayfa</span>
                        <meta itemprop="position" content="1">
                    </a>&gt;
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                    <span itemprop="name" style="color: #777;">Hakkımızda</span><meta itemprop="position" content="2">
                </li>
            </ul>
            <span style="font-size: 25px;">Hakkımızda</span>
        </div>`);
    }
    /* /hakkimizda Bitiş */
	
	
      document.addEventListener("DOMContentLoaded", function() {
      var btnWhatsapp = $('<a>')
          .attr({'href': 'https://api.whatsapp.com/send?phone=905415104888&text=Sipariş vermek istiyorum.', 'target': '_blank'})
          .addClass('fixed-whatsapp')
          .text('WHATSAPP İLE SİPARİŞ VER')
          .on("click", function (e) {
              $element = $(this);
    
              if (!$element.hasClass("active")) {
                  e.preventDefault();
    
                  $element.addClass("active");
    
                  setTimeout(function () { $element.removeClass("active"); }, 3000);
              }
          });
    
      $('body').append(btnWhatsapp);
      });
	  
	  
      $(document).ready(function(){
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
                        //$('#header').prepend('<div class="topBanner">'+'<a href="https://www.oksit.com.tr/yeni-gelenler">'+'<img src="https://www.oksit.com.tr/Uploads/Slider/-29.gif?t=20211220152708"></a></div>')    
    		}
        else
        {
              //$('#header').prepend('<div class="topBanner">'+'<a href="https://www.oksit.com.tr/yeni-gelenler">'+'<img src="https://www.oksit.com.tr/Uploads/Slider/-30.gif?t=20211220152715"></a></div>')    
        	}
      } )