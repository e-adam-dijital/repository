    $(document).ready(function(){
   $(".RightDetail").append('<div class= "bilgiContainer">  </div>');
        $("#divUrunOzellikAlani").appendTo(".bilgiContainer");
  })
  
  
        $(document).ready(function () {
  
        $("body #formGlobal").before('<div class= "sepeteEklendi"> Ürün Alışveriş Sepetinize Eklendi </div>');
        $("body #formGlobal").before('<div class= "yetersizStok"> Yeterli stok bulunmamaktadır! </div>');

        $(".RightDetail .MiddleList .basketBtn .Addtobasket").on("touchend click", function () {
            setTimeout(function () {         
                    
                      $("body .icons .CartProduct.more").css("visibility", "visible")
                      $("body .icons .CartProduct.more").css("opacity", "1")
                        setTimeout(function () {

                            $("body .sepeteEklendi").fadeIn(1000);
                            $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("");
                            $("body").removeClass("ticiDialog");
                            document.querySelector("html body .basketBtn input").style.cssText =
                                "background: green !important;background-image: url(https://www.mitaconcept.com/Uploads/EditorUploads/checkmark-52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
                            setTimeout(function () {
                                $("html body .sepeteEklendi").fadeOut(1500);
                                $("body").removeClass("ticiDialog");
                                $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("SEPETE EKLE");
                                document.querySelector("html body .basketBtn input").style.cssText =
                                    "background-image: unset !important;";
                            }, 3000);
                        }, 390);

                var sepetKontrol = $(".ticimaxDialogTxt p").text();
                if (sepetKontrol == "Ürün(ler) sepetinize eklendi.") {
                  $("body .icons .CartProduct.more").css("visibility", "visible")
                  $("body .icons .CartProduct.more").css("opacity", "1")
                    $("body .sepeteEklendi").fadeIn(1000);
                    $(".RightDetail .MiddleList .basketBtn .Addtobasket").val("");
                    $("body").removeClass("ticiDialog");
                    document.querySelector("html body .basketBtn input").style.cssText =
                        "background: green !important;background-image: url(https://www.mitaconcept.com/Uploads/EditorUploads/checkmark-52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
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