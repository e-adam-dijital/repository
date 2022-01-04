// Tüm Sayfalar - Header 

if(window.location.pathname == "/SiparisTamamla" || window.location.pathname == "/Odeme"){
      $("head").append('<style>.navigation {display: none;}</style>');
}


/* Site Header */

$('.headerTop').prependTo('#header');

              $(document).ready(function () {
                  var templateTab = $("#TicimaxTab1").html();
                  $.get("/Templates/100/Urun/UrunItem.html", function (data) {
                      Handlebars.registerPartial("productItem", data);
                      var filterModel = createProductFilterModel();
                      filterModel.filter.CategoryIdList.push(1);
                      filterModel.paging.PageItemCount = 8;
                      createProductDiv(1, filterModel, templateTab, "tab1_1");
                  });
              });
              function tab1_2() {
                  if ($('#tab1_2 .ProductList').length == 0) {
                      var templateTab = $("#TicimaxTab1").html();
                      var filterModel = createProductFilterModel();
                      filterModel = createProductFilterModel();
                      filterModel.filter.CategoryIdList.push(1);
                      filterModel.paging.PageItemCount = 8;
                      createProductDiv(2, filterModel, templateTab, "tab1_2");
                  }
              }
              function tab1_3() {
                  if ($('#tab1_3 .ProductList').length == 0) {
                      var templateTab = $("#TicimaxTab1").html();
                      var filterModel = createProductFilterModel();
                      filterModel = createProductFilterModel();
                      filterModel.filter.CategoryIdList.push(1);
                      filterModel.paging.PageItemCount = 8;
                      createProductDiv(3, filterModel, templateTab, "tab1_3");
                  }
              }
              function tab1_4() {
                  if ($('#tab1_4 .ProductList').length == 0) {
                      var templateTab = $("#TicimaxTab1").html();
                      var filterModel = createProductFilterModel();
                      filterModel = createProductFilterModel();
                      filterModel.filter.CategoryIdList.push(1);
                      filterModel.paging.PageItemCount = 8;
                      createProductDiv(3, filterModel, templateTab, "tab1_4");
                  }
              }
			  

// Site Footer

 
//  Tüm Sayfalar 

  $(document).ready(function(){
    if ( window.innerWidth > 769 ){
    $("#header .headerTop").append(`
  <div class="scroolText" style="position:relative; overflow: hidden;width:100%;height:35px;color: #fff;">
<span style="position:absolute;top:0;left:0;padding:0 1000px;">
    <span style="padding-left:150px;">GÖMLEKLERDE %20 İNDİRİM!</span>
    </span>
</div>
  `);
}else{
    $("#header").prepend(`
  <div class="scroolText" style="position:relative; overflow: hidden;width:100%;height:35px;color: #fff; background:black;">
<span style="position:absolute;top:0;left:0;padding:0 500px;">
    <span>GÖMLEKLERDE %20 İNDİRİM!</span>
    </span>
</div>
  `);
}
    })
	
	
$(document).ready(function () {
 
    var $btn = $('<a>')
    .attr('href', 'https://api.whatsapp.com/send?phone=905335937731&text=Sipariş vermek istiyorum.')
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


document.addEventListener("DOMContentLoaded", () => {
	if(window.innerWidth < 768 ) {
		$(".mobilaf,.CloseBtnMenu").on("click", function (event) {
			$("body").removeClass("overflow transform");
			$(".mobilMenu").removeClass("acik");
			$(".altMenu").removeClass("active");
			$(".ResimliMenu1AltUl").removeClass("active");
			$(".mobilMenu .KatMenu1 > li ul").removeClass("active");
			$(".mobilMenu .navUl ul").removeClass("active");
			$(".mobilMenu .lfMenuAltContent").removeClass("active");
			$(".mobilAcilirMenu").html('<i class="fal fa-angle-right"></i>');
			$(".mobilaf").removeClass("acik").removeAttr("style");
			$(".searchContent").removeClass("active");
			$(".welcome").removeClass("active");
			$(".CartProduct").removeClass("animated");
			$("#lang_flag_container").removeClass("selector");
			$("body #divSayfalamaUst .filterBlock").removeClass("active");
		});
	}
});


var sepetUrunSayisi;
  
var sepetUrunSayisiGuncelle = () => {
  try{
    sepetUrunSayisi = getCartLocalStorage().cart.cart.pCount;
  }catch{
    try{
      sepetUrunSayisi = refreshSepet().cart.pCount;
    }catch{
      sepetUrunSayisi = 0;
    }
  }
  
  if(!document.querySelector(".mycartClick .fa-shopping-cart .sepetUrunSayisiCustom")){
    $(".mycartClick .fa-shopping-cart").append('<span id="spnTopSepetToplamUrunCustom" class="sepetUrunSayisiCustom">'+sepetUrunSayisi+'</span>');
  }else{
    $(".mycartClick .fa-shopping-cart .sepetUrunSayisiCustom").text(sepetUrunSayisi);
  }
  if(!document.querySelector(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom")){
    $(".bottomHead .cartC .fa-shopping-cart").append('<span id="spnTopSepetToplamUrunCustom" class="sepetUrunSayisiCustom">'+sepetUrunSayisi+'</span>');
  }else{
    $(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom").text(sepetUrunSayisi);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  sepetUrunSayisiGuncelle();

  setInterval(() => {
    if(document.querySelector(".mycart a .sepetUrunSayisi")){
      $(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom").text($(".mycart a .sepetUrunSayisi").text());
    }else if(
      document.querySelector(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom")
      &&
      document.querySelector(".mycartClick .fa-shopping-cart .sepetUrunSayisiCustom")
    ){
  	  $(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom").text($(".mycartClick .fa-shopping-cart .sepetUrunSayisiCustom").text());
    }
  }, 1000);
  
  /*
  if(document.querySelector("#divSatinAl > div > div > input")){
    document.querySelector("#divSatinAl > div > div > input").addEventListener("click", () => {
      $(".bottomHead .cartC .fa-shopping-cart .sepetUrunSayisiCustom").text(sepetUrunSayisi + 1);
    });
  }
  */
});
/*
window.addEventListener("load", () => {
  sepetUrunSayisiGuncelle();
});
*/