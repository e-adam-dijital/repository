// Tüm Sayfalar - Header 

$(document).ready(function(){

if($(window).width() > 1200){
setTimeout(function(){
$(".headerContent .icons #divMemberPanel").before(`<div class="siparisTakip"><a href="/">Sipariş Takibi</a></div>`)
$(".headerContent .icons #divMemberPanel").before(`<div class="yardim"><a href="/">Yardım</a></div>`)

$("#header .headerContent .SearchToggle").on("click", function(){
$('.searchContent').toggleClass('active');
return false;
})
}, 200);
$(".navigation #HeaderMenu2 > li:last-child").after(`<li class="ulVar">
<a href="#" target="_self" title="Aksesuar">Bilgi</a>
<div class="Flexscroll">
<ul>
<li><a href="/Hesabim#/Hesabim-Anasayfa" target="_self" title="Hesabım">Hesabım</a></li>
<li><a href="/Hesabim#/Siparislerim" target="_self" title="Siparişlerim">Siparişlerim</a></li>
<li><a href="/Hesabim#/Siparislerim" target="_self" title="SipariTakip">Sipariş Takip</a></li>
<li><a href="/hakkimizda" target="_self" title="Hakkımızda">Hakkımızda</a></li>  
<li><a href="/kvkk-ve-aydinlatma-metni" target="_self" title="kvkk">Kvkk ve Gizlilik Politikası</a></li>  
<li><a href="/iletisim" target="_self" title="İletisim">İletisim</a></li>  
</ul>
</div>
</li>`)
$("#header .headerContent #logo").after(`<div class="SearchToggle"><span>ARA</span></div>`)

$("body .navigation .navUl li.ulVar > a").attr("href", "#")
$(".navigation .HeaderMenu2 > .ulVar").each(function(){
$(this).on("click", function(){
$(".Flexscroll", this).toggle();

})
})
}
  if($(window).width() < 769){
  $(".mobilMenu #HeaderMenu2 li:first-child").before(`<li class="mobilUye"> <a href="#" class="giris">ÜYE GİRİŞİ</a> <a href="#" class="uye">ÜYE OL</a></li>`)
  }
})

$( document ).ready(function() {
  
  $('a.giris').click(function(){
  $('.CloseBtnMenu').click();
  window.mem.init.bind('login');
})
$('a.uye').click(function(){
  $('.CloseBtnMenu').click();
  window.mem.init.bind('login');
  $('a.userSignUp').click();
})
});


// Site Footer

  var windowidth = window.innerWidth; //window width orani
  $(document).ready(function () {
    $("#divNewsLetter").prependTo(".ticiBultenContent");

    $(".ticiFooterMenu .footerCol h3").on("click", function (event) {
      $(this).parents(".footerCol").toggleClass("active");
      event.preventDefault();
    });
  });
  
 
//  Tüm Sayfalar 

    $(document).ready(function () {
     
        var $btn = $('<a>')
        .attr('href', 'https://api.whatsapp.com/send?phone=905527306482&text=Sipariş vermek istiyorum.')
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
	
	
    if ( location.pathname == '/Odeme' || location.pathname == '/SiparisTamamlandi' ) {
      if ( window.innerWidth > 769 ) {
        document.querySelector('.navigation').style.display = 'none';
      }
    }
	
	
      $(document).ready(function(){
		var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
     	if(globalModel.pageType != "homepage"){
		if (isMobile) {
                        //$('#header').prepend('<div class="topBanner">'+'<a href="/yeni-yil-kampanyasi">'+'<img src="/Uploads/EditorUploads/topbanner-mobil.jpg"></a></div>')    
    		}
        else
        {
              //$('#header').prepend('<div class="topBanner">'+'<a href="/yeni-yil-kampanyasi">'+'<img src="/Uploads/EditorUploads/topbanner-pc.jpg"></a></div>')    
        	}
          }
      } )