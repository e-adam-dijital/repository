    $(window).on('load', function(){
        if ($(window).width() < 769) {
            $(".leftImage .Images img").fancybox();
            $(".AltImgCapSmallImg img").click(function (event) {
                window.zoom.V1.clickThumb();
            });
        }
    });
    var test = $("#divThumbList").html();
    $(document).ready(function () {
        setTimeout(function () {
            $(".RightDetail .MiddleList #IlgiliUrunDiv .JKatAdi .satir1").text("Ürünün diğer renkleri:")
        }, 100);
        $(".headerContent .mobilMenuAcButton").on("click", function () {
            if ($("body > div:first-child").hasClass("acik") == true) {
                $("body").css("overflow-y", "hidden");
            }
        });
        $("#divIcerik").before('<div class="divIcerikContainer"> </div>');
        $("#divIcerik").appendTo(".divIcerikContainer");
        $(".RightDetail").append('<div class= "bilgiContainer">  </div>');
        $("#divUrunOzellikAlani").appendTo(".bilgiContainer");
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
                                "background: green !important;background-image: url(https://www.dksstore.com/Uploads/EditorUploads/checkmark_52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
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
                        "background: green !important;background-image: url(https://www.dksstore.com/Uploads/EditorUploads/checkmark_52px.png) !important;background-repeat: no-repeat !important;background-position: center !important;background-size: auto 80% !important;";
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

        $("#divThumbList").html(test);
        $(".leftImage #divThumbList .AltImgCapSmallImg").each(function () {
            var newData = $("img", this).attr("data-cfsrc");
            $("img", this).attr("src", newData);
        });
    });
	
	
    $(document).ready(function () {
    $("#divUrunEkSecenek .eksecenekLine.kutuluvaryasyon:last-child .right_line .size_box").click();
        setTimeout(function () {
            $("#divIlgiliUrunler .ulUrunSlider li").each(function(){
 var gercekTitle =  $(".productItem a", this).attr("title")
 var kelime = gercekTitle.split(/[\s,]+/)
 const sonKelime = kelime[kelime.length - 1]
  $(".productItem a", this).attr("title", sonKelime)
})
 }, 390);
        if ($(window).width() < 1200) {
            setTimeout(function () {
                var galleryThumbs = "";
                var galleryTop = "";
                $(".leftImage .gallery-container .owl-item a img").each(function () {
                    console.log($(this).attr("src"))
                    galleryThumbs =
                    galleryThumbs + ('<div class="swiper-slide"><img src="' + $(this).attr("src") + '"/></div>');
                    galleryTop = galleryTop + ('<div class="swiper-slide"><img src="' + $(this).attr("src") + '"/></div>');
                });
                $("#ProductDetailMain .TopDet .leftImage").append(
                    '<div class="swiper-container gallery-top"><div class="swiper-wrapper">' + galleryTop + " </div><div class='swiper-button-next'></div><div class='swiper-button-prev'></div> <div class='swiper-pagination'></div></div>"
                );

                $("#ProductDetailMain .TopDet .leftImage").append(
                    '<div class="swiper-container gallery-thumbs"><div class="swiper-wrapper">' +
                    galleryThumbs +
                    " </div></div>"
                );
          
                var galleryTop = new Swiper(".gallery-top", {
                    direction: "horizontal",
                    slidesPerView: 1,
                    loop: true,
                    loopedSlides: 50,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
                var galleryThumbs = new Swiper(".gallery-thumbs", {
                    direction: "horizontal",
                    slidesPerView: 4,
                    slideToClickedSlide: true,
                    spaceBetween: 10,
                    loopedSlides: 50,
                    loop: true,
                });
                galleryTop.controller.control = galleryThumbs;
                galleryThumbs.controller.control = galleryTop;

                $(".TopDet .leftImage .swiper-container.swiper-container-horizontal .swiper-wrapper img").on(
                    "click",
                    function () {
                        $(
                            ".TopDet .leftImage .swiper-container.swiper-container-horizontal.gallery-top .swiper-wrapper img"
                        ).fancybox();
                    }
                );
            }, 390);
        }
    });
	
	
document.querySelector("#divTahminiTeslimatSuresi span").textContent = "Tahmini Kargoya Veriliş Süresi";