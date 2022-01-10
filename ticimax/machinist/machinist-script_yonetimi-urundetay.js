 var windowidth = window.innerWidth;
 
 $(document).ready(function () {
$("#divUrunOzellikAlani .urunTab > ul > li").on("click", function(){
if($(this).hasClass("active") == false){

$(".urunDetayPanel").toggleClass("panelToggle");
  }
})
   
   $('.leftImage').append('<div class="UD_Share"><ul><li class="whts"><a href="javascript:void(0);"><i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp ile Sipariş Ver</a></li></ul> </div>');
   $('.whts > a').click(function () {
       if (windowidth > 768) {                
         var site = window.location.href;
         window.open("https://web.whatsapp.com/send?phone=905335937731&text=" + site + "")
 
       } else {
         var socialAppMessage =  encodeURIComponent(productDetailModel.productName) + " - " + encodeURIComponent(window.location.href);
         window.location.href = "whatsapp://send?phone=905335937731&text=" + socialAppMessage;
    }
   });
 });
 
 
     $(document).ready(function () {
         $("body #formGlobal").before('<div class= "sepeteEklendi"> Ürün Alışveriş Sepetinize Eklendi </div>');
         $("body #formGlobal").before('<div class= "yetersizStok"> Yeterli stok bulunmamaktadır! </div>');
 
         $(".RightDetail .MiddleList .basketBtn .Addtobasket").on("touchend click", function () {
             setTimeout(function () {
                 if ($("#divUrunEkSecenek .tooltipp").hasClass("tooltipp") == true) {
                     $(".eksecenekLine.kutuluvaryasyon:nth-child(2) .right_line .size_box").on(" touchend click", function () {
                       $("body .icons .CartProduct.more").css("visibility", "visible")
                       $("body .icons .CartProduct.more").css("opacity", "1")
                         setTimeout(function () {
 
                             $("body .sepeteEklendi").fadeIn(1000);
                             $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("");
                             $("body").removeClass("ticiDialog");
                             document.querySelector("html body .basketBtn input").style.cssText =
                                 "background: green !important;background-image: url(https://www.machinist.com.tr/Uploads/EditorUploads/checkmark-52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
                             setTimeout(function () {
                                 $("html body .sepeteEklendi").fadeOut(1500);
                                 $("body").removeClass("ticiDialog");
                                 $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("SEPETE EKLE");
                                 document.querySelector("html body .basketBtn input").style.cssText =
                                     "background-image: unset !important;";
                             }, 3000);
                         }, 390);
 
 
                     })
                 }
                 var sepetKontrol = $(".ticimaxDialogTxt p").text();
                 if (sepetKontrol == "Ürün(ler) sepetinize eklendi.") {
                   $("body .icons .CartProduct.more").css("visibility", "visible")
                   $("body .icons .CartProduct.more").css("opacity", "1")
                     $("body .sepeteEklendi").fadeIn(1000);
                     $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("");
                     $("body").removeClass("ticiDialog");
                     document.querySelector("html body .basketBtn input").style.cssText =
                         "background: green !important;background-image: url(https://www.machinist.com.tr/Uploads/EditorUploads/checkmark-52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
                     setTimeout(function () {
                         $("html body .sepeteEklendi").fadeOut(1500);
                         $("body").removeClass("ticiDialog");
                         $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("SEPETE EKLE");
                         document.querySelector("html body .basketBtn input").style.cssText =
                             "background-image: unset !important;";
                     }, 3000);
                 } else if (sepetKontrol == "Yeterli stok bulunmamaktadır!") {
                     $("body .yetersizStok").fadeIn(1000);
                     $("body").removeClass("ticiDialog");
                     setTimeout(function () {
                         $("body").removeClass("ticiDialog");
                         $("html body .yetersizStok").fadeOut(1500);
                     }, 3000);
                 }
             }, 390);
         });
     });