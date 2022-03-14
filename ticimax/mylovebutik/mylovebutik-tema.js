/* ==================== */
/* ------FE6--SC------- */
/* ==================== */
var urunDuzeniTipi=0; //Urun duzen tipi
var mobilBlokCozunurluk=768; //Mobil dinamikblok
var sliderZoomCozunurluk=768; //mobilOzelSlider
var isHoverCartProduct=false; //Hover da kapatma
var kategoriMenuAcikGetir=true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk=1025; //Urun resim slider 
var windowidth=window.innerWidth; //window width orani
var urunDetay_varyasyonSecili=true; //varyasyon secme ve secmeme
var sepeteEkleUyariAktif = true; //sepete ekleme popup
//var ShowListProductInCart = false; // Urun Sepette ve sepet adet ibaresi
//Sayfa Yuklenme sahnesi
$(document).ready(function () {
    //sayfaislemleri
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>');
    if ($('#divSayfalamaUst').length>0) { KategoriIslemleri(); }//listeleme islemleri
    else if (globalModel.pageType == 'productdetail') {UrunDetayIslemleri(); }//Detay islemleri
    else if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete'|| globalModel.pageType == 'payment'|| globalModel.pageType == 'ordercompleted') { SepetEkrani(); }//Sepet islemleri
    if ($('.pageContainer').length > 0) {$('body').addClass('SayfaIcerik');}//Icerik sayfasinda bodye class ekleme
    if ($('.magazalarContent').length > 0) {$('body').addClass('Magazalar');}//Magaza sayfasinda bodye class ekleme
    if ($('.userDivRow').length > 0)    {$('body').addClass('UyeGiris');}//Uye giris ekraninda bodye class ekleme
    if ($('.uyeOlContainer').length > 0)    {$('body').addClass('UyeOl');}//Uye ol ekraninda bodye class ekleme
    if ($('.homeHeader').length>0) {$('body').addClass('HomeBody');}
    if($('#divSayfalamaUst').length>0){
        $('.Block_Alt').html('<span class="filtreKapat"><i class="fas fa-times"></i></span>');
        $(".Block_Alt").on('click',function(){
            $(".filterBlock").removeClass("active");
        });
    }
    GlobalIslemler();
});
function GlobalIslemler() {//Tum ekranlar ready sahnesi
    if (!pageInitialized) {
        /*siteozel*/
        $('.htop').insertBefore('.headerContent');
        $('#divNewsLetter').prependTo('.ebultenGelecek');
        if (windowidth>767) {
            $('#logo').before('<div class="logoArea"><div class="leftDiv"></div><div class="centerDiv"></div><div class="rightDiv"></div></div>');
            $('#logo').appendTo('.logoArea .leftDiv');
            $('.searchContent').appendTo('#header');
            $('.welcome').appendTo('.logoArea .rightDiv');
            $('.mycart').appendTo('.logoArea .rightDiv');
            $('.welcome').after('<a class="headerSearchIcon" href="javascript:;"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 64 64"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:2px}</style></defs><path class="cls-1" d="M44 27a17 17 0 1 1-17-17 17 17 0 0 1 17 17zm9.85 26.92L39.23 39.29"></path></svg></a>');
            $('.navigation').appendTo('.logoArea .centerDiv');            
        }
        $('.searchContent').append('<div class="searchClose"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-close" viewBox="0 0 64 64"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px}</style></defs><path class="cls-1" d="M19 17.61l27.12 27.13m0-27.12L19 44.74"></path></svg></div>');
        $('.headerSearchIcon').on('click',function () { $('.searchContent').addClass('active'); });
        $('.searchClose').on('click',function () { $('.searchContent').removeClass('active'); });

        if (windowidth < 768) {
            $("#lang_flag_container").insertBefore(".menuUstBolum");
        }

    }
    setTimeout(function(){
        $('#btnKelimeAra').val('');
    },100);
    var breadHtml = $('ul.breadcrumb').html();
    $('ul.breadcrumb').after('<div class="breadList" style="display:none;"><div class="mBread"><ul class="breadcrumbList">'+breadHtml+'</ul></div><div class="clbtn"><i class="far fa-times"></i></div></div>');
    var liS = $(".breadcrumbList li");
    $(".breadcrumbList li").each(function(index){if (index > 0){var ul = $("<ul/>"); $(this).appendTo(ul); ul.appendTo(liS[index-1]); } });
    $('.breadcrumb').on('click',function(){$('.breadList').addClass('breadActive').show();$(this).addClass('zindex'); });
    $('.clbtn').on('click',function(){$('.breadList').removeClass('breadActive').hide();$('.breadcrumb').removeClass('zindex'); });
    SayfaTasarim();
}
function KategoriIslemleri() {//Kategori ready sahnesi
    $("body").addClass("CategoryBody");
    //$('.categoryTitle .categoryTitleText').insertBefore('.leftBlock');
    //$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click',function(event) {$(this).parent().find('.list-group, .FiyatSlider,.panel-search').slideToggle(); $(this).toggleClass('active'); });
}
function UrunDetayIslemleri() {//Urun detay ready sahnesi
    $("body").addClass("ProductBody");

    if (productDetailModel.totalStockAmount < 1) {$('.RightDetail').addClass('StokYok');}
    if (!pageInitialized) {
        $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
        $('.ProductDetail > .categoryTitle').insertBefore('#divIcerik');
        $('.leftImage').appendTo('.TopDet');
        $('.RightDetail').appendTo('.TopDet');
        //ilk bolum
        $('.RightDetail').prepend('<div class="TopList"></div>');
        $('.PriceList').prependTo('.TopList');
        $('.ProductName').prependTo('.TopList');
        //ikinci bolum
        $('.TopList').after('<div class="MiddleList"></div>');
        $('#divSatinAl').appendTo('.MiddleList');
        $('#divUrunEkSecenek').prependTo('.MiddleList');
        $('#divStokYok').prependTo('.MiddleList');
        //ucuncu bolum
        $('.MiddleList').after('<div class="BottomList"></div>');
        $('.ProductIcon').appendTo('.BottomList');
        $('.ProductIcon2 ').appendTo('.BottomList');
        $('#divEkstraBilgiler').appendTo('.BottomList');
        //$('.product_social_icon_wrapper').appendTo('.BottomList');
        //ek acilirlar
        $('.markaresmi').insertBefore('.ProductName');
        $('#divOnyazi').insertAfter('.ProductName');
        $('#divMagazaStok').insertAfter('.ProductName');
        $('#divTahminiTeslimatSuresi').insertAfter('.ProductName');
        $('#divIndirimOrani').insertAfter('.ProductName');
        $('#divParaPuan').insertAfter('.ProductName');
        $('#divToplamStokAdedi').insertAfter('.ProductName');
        $('#divUrunStokAdedi').insertAfter('.ProductName');
        $('#divTedarikci').insertAfter('.ProductName');
        $('#divBarkod').insertAfter('.ProductName');
        $('.puanVer').insertAfter('.ProductName');
        $('#divMarka').insertAfter('.ProductName');
        $('#divUrunKodu').insertAfter('.ProductName');
        //alt ekler
        $('.RightDetail .riSingle .riUp').html('<i class="far fa-plus"></i>');
        $('.RightDetail .riSingle .riDown').html('<i class="far fa-minus"></i>');
        $('#divKombinSatinAl').appendTo('.MiddleList');
        $('.buyfast').insertAfter('.basketBtn');
        $('#divAdetCombo').insertBefore('.basketBtn');
        $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');
        $('#divAdetCombo .left_line').insertBefore('#divAdetCombo');
        $('.pSatisBirimi').insertBefore('.Basketinp');    
        //$('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
        $('#divTahminiTeslimatSuresi').insertAfter('#divSatinAl');
        $('.urunOzellik').appendTo('.BottomList');

        
        
        if (windowidth < 768) {
        $('.UFavorilerimeEkle').prependTo('.leftImage');
        $('.categoryTitle').insertAfter('.leftImage');
        }


        if($('#divVideoGoruntulemeAlan').find('> video').length>0){
            $('#divVideoGoruntulemeAlan').addClass('active');
        }

    }
    $(".basketBtn,.UFavorilerimeEkle a,.UIstekListemeEkle a").on('click',function () {if ($("#hddnUrunID").val() == "0") {$('html,body').animate({scrollTop: $('#divUrunEkSecenek').offset().top - 110 }, 'slow'); } });
}
function topMenuCallback() {
    $(".navUl li").each(function () {if ($(this).find("ul").length > 0) {$(this).addClass("ulVar"); }});
    if (!pageInitialized) {
        $("body").on("mouseenter", ".navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar", function(){
            //$('#divIcerik').addClass('hoverr');
        });
        $("body").on("mouseleave", ".navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar", function(){
            //$('#divIcerik').removeClass('hoverr');
        });
        $('.navigation .navUl > li.ulVar').each(function() {if ($(this).find('.altMenuSag img').length>0 || $(this).find('.altMenuSag .altMenuSagEditor *').length>0) {$(this).find('.altMenu').addClass('picTrue'); } });
    }
    HeaderFixed();
    mobilFooter();
    mobileMenu();
    //if (windowidth>767) {
    //    $('#header').before('<div class="deskMenu"><div class="deskMenuSol"><div class="deskUst"><div class="deskClose"><i class="far fa-times"></i></div><div class="deskLogo"><a href="/"><img src="/customcss/images/logo.png"></a></div></div><div class="deskAlt"></div></div></div>');
    //    $('.navigation').appendTo('.deskMenu .deskAlt');
    //    $('.navigation .navUl > li').each(function(){if ($(this).find('>ul').length>0) {$(this).append('<div class="deskEkBtn off"></div>'); } });
    //    $('.deskEkBtn').on('click',function(){
    //        if ($(this).hasClass('off')) {
    //            $('.navigation .navUl > li >ul').slideUp();
    //            $('.navigation .navUl > li').removeClass('active');
    //            $('.deskEkBtn').removeClass('on').addClass('off');
    //            $(this).parent().addClass('active');
    //            $(this).parent().find('>ul').slideDown();
    //            $(this).removeClass('off').addClass('on');
    //        }else{
    //            $(this).parent().removeClass('active');
    //            $(this).parent().find('>ul').slideUp();
    //            $(this).removeClass('on').addClass('off');
    //        }
    //    });
    //    $('.navigation .navUl > li').each(function(){if ($(this).find('>ul li.ulVar').length>0) {$(this).find('>ul li.ulVar').append('<div class="deskEkBtnn off"></div>'); } });
    //    $('.deskEkBtnn').on('click',function(){
    //        if ($(this).hasClass('off')) {
    //            $('.navigation .navUl > li > ul > li >ul').slideUp();
    //            $('.navigation .navUl > li > ul > li').removeClass('active');
    //            $('.deskEkBtn').removeClass('on').addClass('off');
    //            $(this).parent().addClass('active');
    //            $(this).parent().find('>ul').slideDown();
    //            $(this).removeClass('off').addClass('on');
    //        }else{
    //            $(this).parent().removeClass('active');
    //            $(this).parent().find('>ul').slideUp();
    //            $(this).removeClass('on').addClass('off');
    //        }
    //    });

    //    $('body').on('click','.desmenuBtn',function(){
    //        $('.deskMenu').addClass('active');
    //    });
    //    $('.deskClose').on('click',function(){
    //        $('.deskMenu').removeClass('active');
    //    });
    //    $('body').on('click',function (evt) {
    //        if (!$(evt.target).is('.deskClose,.deskClose *,.deskMenu,.deskMenu *,desmenuBtn,.desmenuBtn *')) {
    //            $('.deskMenu').removeClass('active');
    //        }
    //    });
    //    $('.deskMenuSag').insertAfter('.deskMenuSol');
        
    //    var menusagres = $('.deskMenuSag').html();

    //    $(".deskMenu .deskMenuSol .deskAlt .navigation .navUl > li").each(function (index) {
    //        $(this).attr("data-img2", $(this).find(">a").html().split("/")[2]);
    //        $(this).attr("data-img", $(this).find(">a").html().split("/")[1]);
    //        $(this).find(">a").html($(this).find(">a").html().split("/")[0]);
    //    });
    //    $('.deskMenuSag').append('<div class="affter"></div>');
    //    setTimeout(function () {
    //        $('.deskMenu .deskMenuSol .deskAlt .navigation .navUl > li > .deskEkBtn').on('click',function(){
                
    //            $(".deskMenuSag ul li a img").animate({opacity: '0'}, 'fast');
    //            $(".deskMenuSag .affter").animate({width: '100%'}, 'fast');
    //            $(".deskMenuSag ul li").css('display', 'none');

    //            setTimeout(function () {
    //                $('.deskMenuSag').addClass('active');
    //                $(".deskMenuSag.active .affter").animate({width: '0'}, 'slow');
    //                $(".deskMenuSag.active ul li a img").animate({opacity: '1'}, 'fast');
    //                $(".deskMenuSag ul li").css('display', 'block');

    //            }, 500);
                
    //            var link = $(this).parent('li').find('a').attr('href');
    //            console.log(link);
    //            console.log($(this));
    //            $(this).closest(".deskMenu").find("> .deskMenuSag").find("ul li a").attr("href", link);
    //            $(this).closest(".deskMenu").find("> .deskMenuSag").find("ul li a.deskMenuRes1 img").attr("src", "/Uploads/EditorUploads/" + $(this).parent('li').attr("data-img"));
    //            $(this).closest(".deskMenu").find("> .deskMenuSag").find("ul li a.deskMenuRes2 img").attr("src", "/Uploads/EditorUploads/" + $(this).parent('li').attr("data-img2"));
                
    //        });          
    //    }, 1000);

    //}

    //if (windowidth<768) {

    //    $('.deskMenuSag').appendTo('.mobilMenu .menuIcerikAlan');
    //    $('.deskMenuSag').append('<div class="affter"></div>');

    //    $(".mobilMenu .navUl > li").each(function (index) {
    //        $(this).attr("data-img2", $(this).find(">a").html().split("/")[2]);
    //        $(this).attr("data-img", $(this).find(">a").html().split("/")[1]);
    //        $(this).find(">a").html($(this).find(">a").html().split("/")[0]);
    //    });

    //    $('.mobilMenu .navUl > li > .ResimsizDown').on('click',function(){

    //        $(".deskMenuSag ul li a img").animate({opacity: '0'}, 'fast');
    //        $(".deskMenuSag .affter").animate({width: '100%'}, 'fast');
    //        $(".deskMenuSag ul li").css('display', 'none');

    //        setTimeout(function () {
    //            $('.deskMenuSag').addClass('active');
    //            $(".deskMenuSag.active .affter").animate({width: '0'}, 'slow');
    //            $(".deskMenuSag.active ul li a img").animate({opacity: '1'}, 'fast');
    //            $(".deskMenuSag ul li").css('display', 'block');

    //        }, 500);

    //        var link = $(this).parent('li').find('a').attr('href');
    //        $(this).closest(".mobilMenu").find(".deskMenuSag").find("ul li a").attr("href", link);
    //        $(this).closest(".mobilMenu").find(".deskMenuSag").find("ul li a.deskMenuRes1 img").attr("src", "/Uploads/EditorUploads/" + $(this).parent('li').attr("data-img"));
    //        $(this).closest(".mobilMenu").find(".deskMenuSag").find("ul li a.deskMenuRes2 img").attr("src", "/Uploads/EditorUploads/" + $(this).parent('li').attr("data-img2"));
    //    });
    //}
}
function blockCompleteCallback() {//Blok yuklenme
    if (globalModel.pageType == 'homepage') {//Anasayfa
    }
    if ($('#divSayfalamaUst').length>0) {//listeleme Sayfasi
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay Sayfasi
        UrunDetayPaylas();

        if (!pageInitialized) {
            $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
            if (windowidth<768) {
                $('#linkOncekiSayfa').appendTo('.leftImage');
            }
        }
        /*detayTabAccordion*/
        var cList = $('.urunTab ul li'); var cDiv = $('.urunDetayPanel'); for (var i = 0; i <= cList.length; i++) {for (var i = 0; i <= cDiv.length; i++) {$(cDiv[i]).appendTo(cList[i]); } } $(".urunDetayPanel").hide() ;
        $(".urunOzellik").removeAttr('class').addClass("urunOzellikTab");
        $('.urunOzellikTab .urunTab >ul>li>a').on('click',function () {
            var openTab = $(this);
            if ($(this).parent().hasClass('active')) {setTimeout(function(){$('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active');}, 10);}
            else {$('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active');$(this).parent().addClass('active');}
            var tabName = openTab.attr('data-tab') || "";if (tabName === "Commets") {TabGetComments();}else if (tabName === "recommendations") {TabGetRecommendations();}
        });

        $(".product_social_icon_wrapper").insertBefore(".urunOzellikTab");
    }
}
function urunListCallback() {//Slider ve Urunlisteleme
    //$('.leftBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, autoplaySpeed: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    //$('.rightBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplaySpeed: 2000, autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    if (globalBlokModel == 1) {//Sol ve Orta blok
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 3; $('.leftBlock').removeClass().addClass('leftBlock LeftMiddle'); $('.centerCount').removeClass().addClass('centerCount LeftMiddle');
    }
    else if (globalBlokModel == 2) {//Sol orta sag
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 2; $('.leftBlock').removeClass().addClass("leftBlock LeftMiddleRight"); $('.rightBlock').removeClass().addClass("rightBlock LeftMiddleRight"); $('.centerCount').removeClass().addClass("centerCount LeftMiddleRight");
    }
    else if (globalBlokModel == 3) {//Sag orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.rightBlock').removeClass().addClass("rightBlock MiddleRight"); $('.centerCount').removeClass().addClass("centerCount MiddleRight");
    }
    else if (globalBlokModel == 4) {//Sadece orta
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 3; $('.centerCount').removeClass().addClass("centerCount Middle");
    }
    if ($('.blockSelect').length>0) {
        $('body').on('click', '.blockSelect .sort_hrz',function(){urunDuzeniTipi = 1;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_2',function(){urunDuzeniTipi = 2;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_3',function(){urunDuzeniTipi = 3;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_4',function(){urunDuzeniTipi = 4;urunDuzeni(urunDuzeniTipi); }); $('body').on('click', '.blockSelect .sort_5',function(){urunDuzeniTipi = 5;urunDuzeni(urunDuzeniTipi);});
    }
    $('.sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad: true,
                autoplay: true,
                loop: true,
                rewind:true,
                navClass: ['ProductListprev', 'ProductListnext'],
                margin:20,
                nav: true,
                responsive:{0:{items:2,margin:5},768:{items:3},1025:{items:3},1160:{items: 4},1450:{items: 5}}
            });
    });
    $('.homepageslide ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad: true,
                autoplay: false,
                loop: false,
                rewind:true,
                autoplayTimeout: 7000,
                navClass: ['ProductListprev', 'ProductListnext'],
                autoplaySpeed: 800,
                autoplayHoverPause: false,
                margin:0,
                nav: true,
                responsive: {0:{items:1}, 768:{items: 1}}
            });
    });
    urunDuzeni(urunDuzeniTipi);
    if (globalModel.pageType == 'homepage'){//Anasayfa
    }
    if ($('#divSayfalamaUst').length>0) {//listeleme
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay sayfasi
        if($('#divSatinAl').css('display') == 'none'){$('.RightDetail').addClass('StokYok'); }
        $('.detaySliderContainer .jCarouselLite ul').each(function () {
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    lazyLoad: true,
                    autoplay: false,
                    loop: false,
                    rewind:true,
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin:20,
                    nav: true,
                    responsive:{0:{items:2,margin:5},768:{items:3},1025:{items:3},1160:{items: 4},1450:{items: 5}}
                });
        });
        if ($('.bedenT').length==0) {
            BedenTablosu();
        }
        
        $('.AltImgCapSmallImg img').on('click',function(){
            setTimeout(function(){
                $('#imgUrunResim').click();
            },750);
        });
        varyantIsim();
    }
    InitTimers();
    $(".productItem").find("video").parent().addClass("Videolu");
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
    $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");


    UrunDon();
    Sepetteindirim();
}
function urunDuzeni(tip) {//Urun duzen tipi 2 3 4 5 veya tek
    if ($('#divSayfalamaUst').length>0) {
        if ($('.blockSelect .sort_5').length==0) {$('.blockSelect .sort_4').after('<a href="javascript:;" class="sort_5"><i class="fas fa-th"></i></a>');}
        if ($('.blockSelect .sort_2').length==0) {$('.blockSelect .sort_3').before('<a href="javascript:;" class="sort_2"><i class="fas fa-th-large"></i></a>');}
        if ($('.brandlistselection select').length > 0) {$('#divSayfalamaUst').addClass('Slct');}
        $('.sort_hrz').removeClass("Active"); 
        $('.sort_2').removeClass("Active");
        $('.sort_3').removeClass("Active");
        $('.sort_4').removeClass("Active");
        $('.sort_5').removeClass("Active");
        if (tip == 1) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_hrz'); $(".ItemOrj").removeClass().addClass("ItemOrj col-12"); $('.blockSelect .sort_hrz').addClass("Active"); lazyLoad();}
        else if (tip == 2) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_2'); $(".ItemOrj").removeClass().addClass("ItemOrj col-6"); $('.blockSelect .sort_2').addClass("Active"); lazyLoad();}
        else if (tip == 3) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_3'); $(".ItemOrj").removeClass().addClass("ItemOrj col-4"); $('.blockSelect .sort_3').addClass("Active"); lazyLoad();}
        else if (tip == 4) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_4'); $(".ItemOrj").removeClass().addClass("ItemOrj col-3"); $('.blockSelect .sort_4').addClass("Active"); lazyLoad();}
        else if (tip == 5) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_5'); $(".ItemOrj").removeClass().addClass("ItemOrj col-5li"); $('.blockSelect .sort_5').addClass("Active"); lazyLoad();}
        else if (tip == 6) {$('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_6'); $(".ItemOrj").removeClass().addClass("ItemOrj col-2"); lazyLoad(); }


        if (windowidth>1042) {
            if ($('.deskFilterbtn').length==0) {
                $('.brandlistselection').prepend('<div class="deskFilterbtn">'+translateIt("UrunFiltreleme_Filtreleme")+'</div>');
            }
            $('.deskFilterbtn').on('click',function(){
                $('.filterBlock').addClass('active');
            });
            $('body').on('click',function (evt) {
                if (!$(evt.target).is('.deskFilterbtn,.filterBlock,.filterBlock *')) {
                    $('.filterBlock').removeClass('active')
                }
            });
        }
        if ($('.FiltreUst').length == 0) {
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">'+translateIt("Urunler_Stoktakiler")+'</a></div>');
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>'+translateIt("UrunFiltreleme_Filtreleme")+'</span><a onclick="clearAllFilters()"><i class="fal fa-trash"></i></a></div>');
            if ($('.moreNum').length==0) {
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
            }
            $('.mobilFilterBtn').on('click',function(event) {
                $('.mobilaf').addClass('acik');
                $('#divSayfalamaUst .filterBlock').addClass('active');
            });
            $('.closeFilt').on('click',function(event) {
                $('.mobilaf').removeClass('acik');
                $('#divSayfalamaUst .filterBlock').removeClass('active');
            });
        }
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
            if ($(this).find('li').hasClass('selected')) {var numlen = $(this).find('li.selected').length; $(this).addClass('more'); $(this).find('.moreNum').html(numlen);}
            else{$(this).removeClass('more'); $(this).find('.moreNum').html(''); }
        });
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
            if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) {$('.FiltreUst a').addClass('active'); return false; }
            else{$('.FiltreUst a').removeClass('active'); }
        });
        if ($('.sortingContent .filterOrderInStock').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected');}else{$('.tukgo .filterOrderInStock').removeClass('selected');}
        if ($('.sortingContent .sortingButton').length > 0) {if ($('.sortingContent .sortingButton:nth-child(5) > a').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected'); }else {$('.tukgo .filterOrderInStock').removeClass('selected'); } }
        
    }
    if (globalModel.pageType == 'productdetail') {if ($('#divUrunKodu span').length==0) {$('#divUrunKodu').prepend('<span>'+translateIt("Global_StokKodu")+'</span>'); } }
}
function ekSecenekListesiCallBack(){
    if (globalModel.pageType == 'productdetail') {if ($('#divUrunKodu span').length==0) {$('#divUrunKodu').prepend('<span>'+translateIt("Global_StokKodu")+'</span>'); } }
    $('.AltImgCapSmallImg img').on('click',function(){
        setTimeout(function(){
            $('#imgUrunResim').click();
        },750);
    });
    if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        var clickableElements = "#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .right_line .size_box:not(.nostok)";
        jQuery(clickableElements ).attr("style", "cursor: pointer;");
        jQuery(clickableElements ).bind( "touchend", function(e) {
          jQuery(this).trigger("click");
      });
    }
    $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .right_line .size_box:not(.nostok)').on('click',function(){
        var ekimgIsimClick = $(this).find('img').attr('alt');
        $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line span').html(ekimgIsimClick);
    });
}
function mobileMenu() {//Mobil Menu ve mobil scriptler
    var menuKopya = $(' .navigation').html();
    //$('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"><i class="far fa-bars"></i><span>Menu</span></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '<div class="MenuWelcome UyeGiris"><ul><li><a href="javascript:void(0)" onclick="GirisKontrol(0)">Üye Girişi</a></li><li><a href="javascript:void(0);" onclick="GirisKontrol(1)" title="Üye Ol">Üye Ol</a></li><li><a href="/hesabim.aspx">Hesabım</a></li><li><a href="/UyeCikis.ashx" onclick="uyeCikisYap()" rel="nofollow" title="Çıkış Yap">Çıkış Yap</a></li></ul></div><div class="menuSocial"><ul><li><a href="https://www.facebook.com/"><svg id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg></a></li><li><a href="https://www.instagram.com/"><svg viewBox="0 0 512 512"><path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/><path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/><path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg></a></li></ul></div></div></div>');
    $('.headerContent').prepend('<div class="mobilMenuAcButton"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-hamburger" viewBox="0 0 64 64"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:2px}</style></defs><path class="cls-1" d="M7 15h51M7 32h43M7 49h51"></path></svg></div><div class="searchClick"><i class="fal fa-search"></i></div><div class="welcomeOpen"><i class="fal fa-user"></i></div><div class="mycartClick"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 64 64"><defs><style>.cls-1 { fill: none; stroke: #000; stroke-miterlimit: 10; stroke-width: 2px; }</style></defs><path class="cls-1" d="M14 17.44h46.79l-7.94 25.61H20.96l-9.65-35.1H3"></path><circle cx="27" cy="53" r="2"></circle><circle cx="47" cy="53" r="2"></circle></svg></div>');
    if (globalModel.isAuthenticated) { // uye girisi yapildiysa
        $(".MenuWelcome").addClass("UyeGirisYapildi");
        $(".MenuWelcome").removeClass("UyeGiris");
    } else {

    }
    //Resimli Menu
    if ($('.mobilMenu .ResimliMenu1').length>0) {
        $('.mobilMenu .ResimliMenu1 li .altMenu').closest('li').append('<div class="ResimliDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .ResimliMenu1 li .altmenuSol li ul').closest('li').append('<div class="ResimliDown2"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .altMenuMarkalar').parent().parent().addClass('Markalar'); var MarkaName = $('.Markalar').find(' > a').html();
        $('.mobilMenu .altMenuMarkalar').prepend('<span><div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div><a>'+MarkaName+'</a></span>');
        $('.ResimliDown').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('.altMenu').addClass('active'); } else {$(this).closest('li').find('.altMenu').removeClass('active'); } });
        $('.ResimliDown2').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('.ResimliMenu1AltUl').addClass('active'); } else {$(this).closest('li').find('.ResimliMenu1AltUl').removeClass('active'); } });
        $('.ResimliDown2').each(function(index, el) {var ClickMeNa = $(this).parent('li').find('>a').text(); $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<span><div class="DownBtn"><i class="fal fa-long-arrow-left"></i></div> <a href="">'+ClickMeNa+'</a></span>'); });
        $('.mobilMenu .altmenuSol > span').prepend('<div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div>');
        $('.DownBtn').on('click',function(event) {$('.mobilMenu .ResimliMenu1AltUl').removeClass('active'); $('.altMenuler').animate({scrollTop:0},100); $('.menuIcerikAlan').animate({scrollTop:0},100); });
        $('.UpBtn').on('click',function(event) {$('.altMenu').removeClass('active'); $('.menuIcerikAlan').animate({scrollTop:0},100);});
    }
    //Resimsiz Menu
    if ($('.HeaderMenu2').length>0) {
        $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-chevron-down"></i></div>');
        $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-chevron-down"></i></div>');
        $('.ResimsizDown').on('click',function(event) {
            if ($(this).find('.fal').hasClass('fa-chevron-down')) {
                $(this).closest('li').find('> ul').slideDown();
                $(this).find('.fal').removeClass('fa-chevron-down'); 
                $(this).find('.fal').addClass('fa-chevron-up'); 
            } else {
                $(this).closest('li').find('> ul').slideUp(); 
                $(this).find('.fal').removeClass('fa-chevron-up'); 
                $(this).find('.fal').addClass('fa-chevron-down'); 
            } 
        });
        $('.ResimsizDown2').on('click',function(event) {
            if ($(this).find('.fal').hasClass('fa-chevron-down')) {
                $(this).closest('li').find('> ul').slideDown(); 
                $(this).find('.fal').removeClass('fa-chevron-down'); 
                $(this).find('.fal').addClass('fa-chevron-up'); 
                $(this).closest('ul').addClass('over'); 
            } else {
                $(this).closest('li').find('> ul').slideUp();
                $(this).closest('ul').removeClass('over');
                $(this).find('.fal').removeClass('fa-chevron-up'); 
                $(this).find('.fal').addClass('fa-chevron-down'); 
            } 
        });
        $('.ResimsizDown').each(function(index, el) {
            var Down1 = $(this).parent('li').find('>a').text(); 
            $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down1+'</span></span>'); 
        });
        $('.ResimsizDown2').each(function(index, el) {
            var Down2 = $(this).parent('li').find('>a').text(); 
            $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down2+'</span></span>'); 
        });
        $('.NoiBack2').on('click',function(event) {
            $(this).parent().parent().removeClass('active');
            $(this).closest('.over').removeClass('over'); 
            $('.mobilMenu .navUl > li > ul').animate({scrollTop:0},100); $('.menuIcerikAlan').animate({scrollTop:0},100); 
        });
        $('.NoiBack').on('click',function(event) {
            $('.mobilMenu .navUl > li > ul').removeClass('active'); 
            $('.menuIcerikAlan').animate({scrollTop:0},100); 
        });
    }

    $('.mobilMenu').after('<div class="mobilaf"></div>');
    $('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>'+translateIt("GlobalMasterPage_Anasayfa")+'</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-heart"></i><span>'+translateIt("Favorilerim_Baslik")+'</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>'+translateIt("GlobalMasterPage_MobilUyeGirisi")+'</span></a> </li> </ul> </div>');
    if (siteSettings.isAuthenticated == true) {$('.welcC a').attr('href','/hesabim.aspx'); $('.favoC a').attr('href','/Hesabim.aspx/#/Favorilerim'); $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim")); }
    $('#divIcerik').on('touchend',function(){$('.welcome').removeClass('active'); $('.searchContent').removeClass('active');});
    if (windowidth<750) {
        //$('.welcome').insertAfter('.headerContent');
        $('.CartProduct').insertAfter('.mobilMenu');
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) {$('.CartProduct').addClass('SepetBos'); }
    }
    $('.searchClick').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.searchContent').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); $('#txtbxArama').focus(); });
    $('.welcomeOpen').on('click',function () {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.welcome').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.menuBack').on('click',function(){$('.ResimliMenu1AltUl').removeClass('active'); $('.altMenu').removeClass('active'); $('.navUl > li ul').removeClass('active'); });
    $('.mobilMenuAcButton').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.mobilaf,.CloseBtnMenu').on('click',function (event) {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('body').removeClass('overflow transform'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.mobilaf').removeClass('acik').removeAttr('style'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('.CartProduct').removeClass('animated'); $('#lang_flag_container').removeClass('selector'); $('body #divSayfalamaUst .filterBlock').removeClass('active'); });
    $('body').on('click','.headerCartBtn,.headerOrderBtn',function(){$('body').removeClass('overflow transform'); $('.CartProduct').removeClass('animated');$('.mobilaf').removeClass('acik'); });
}
function SepetEkrani() {//Sepet ekrani
    $('.mycart').addClass('more');
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function(){var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>'+wle+'</div>'); },1500);
}
function HesabimTakip() {//Siparis Takip -- Hesabim
    $('body').addClass('HesabimTakip');
}
function Iletisimaspx() {//Iletisim Sayfasi
    $('body').addClass('Iletisimaspx');
    var uyead = globalModel.member.memberName;
    var uyemail = globalModel.member.memberEMail;
    $('#mainHolder_txtbxAdSoyad').attr('value',uyead);
    $('#mainHolder_txtbxMail').attr('value',uyemail);
    $('.iletisimLeft,.iletisimRight').wrapAll('<div class="AdBan"></div>');
    $('.iletisimForm').insertAfter('.AdBan');
    $('.iletisimLeftAdres').insertAfter('.iletisimLeftFirmaAdi');
}
function UrunDetayPaylas () {
    var title = $(".ProductName h1 span").text();
    var url = window.location.href;
    var image = location.origin + "" + $('.Images #imgUrunResim').attr('src') + "";
    var description = "";
    var link = "https://web.whatsapp.com/send?phone=905555555555&text=" + url + " Ürünü satın almak istiyorum";
    var socialAppMessage = "Bu ürünü satın almak istiyorum" + encodeURIComponent(productDetailModel.productName) + " - " + encodeURIComponent(window.location.href);
    $(".product_social_icons").on('click',function () {
        if ($(this).attr("content") == "facebook") {
            if (isMobileDevice()) {
                window.open("https://m.facebook.com/sharer.php?u=" + url + "");
            } else {
                window.open("https://www.facebook.com/sharer.php?s=100&p[medium]=100&p[title]=" + $.trim(title) + "&p[images][0]=" + image + "&p[url]=" + url + "&p[summary]=" + $.trim(title) + "&t=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
            }
        } else if ($(this).attr("content") == "twitter") {
            window.open("https://twitter.com/intent/tweet?text=" + $.trim(title) + "&url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "pinterest") {
            window.open("https://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        }else if ($(this).attr("content") == "whatsapp") {
            if (windowidth > 768) {
                window.open(link, "toolbar=0,status=0,width=630,height=430");
            } else {
                window.location.href = "whatsapp://send?phone=905555555555&text=" + socialAppMessage;
            }
        }
    });
}
function sepetBindRefresh(res){//Sepet kontrol
    if (typeof res.cart.products != 'undefined') {if (res.cart.products.length>0) {$('.mycart').addClass('more');$('.CartProduct').addClass('more'); $('.SepetBlock').addClass('more');$('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik')); } else {$('.mycart').removeClass('more');$('.CartProduct').removeClass('more'); $('.SepetBlock').removeClass('more'); } }
    if (windowidth < 768) {
        $('.mycart > a').removeAttr('href');
        if ($('.SepetUst').length==0) {
            $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></div>');
        }
    }
}
$(document).on('click','.mycartClick,.sepetUrunSayisi',function () {$('.breadcrumb').removeClass('zindex');$('.breadList').removeClass('breadActive').hide();$('.mobilMenu').removeClass('acik'); $('body').addClass('overflow transform'); $('.CartProduct').addClass('animated'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
$(document).on('click','.seClose',function () {$('.CartProduct').removeClass('animated');$('body').removeClass('overflow transform'); });


$(window).on('load', function() {
    if ($(".hesabimBolumuTutucu").length > 0) { HesabimTakip(); }
    if ($(".iletisimContent").length > 0) { Iletisimaspx(); }
});
function mobilFooter(){
    window.blockMenuHeaderScroll = false; $(window).on('touchstart', function(e) {if ($(e.target).closest('.owl-grab').length == 1) {blockMenuHeaderScroll = true;}}); $(window).on('touchend', function() {blockMenuHeaderScroll = false;}); $(window).on('touchmove', function(e) {if (blockMenuHeaderScroll) {e.preventDefault();}}); 
    $('.linkler .blink > ul > li').each(function(){
        if ($(this).find('>ul').length>0) {
            $(this).find('> span').append('<div class="ackapabtn"><i class="fal fa-plus"></i></div>');
        }
    });
    $('.linkler .blink > ul > li .ackapabtn').on('click',function() {
        if ($(this).find('.fal').hasClass('fa-plus')) {
            $('.linkler .blink > ul > li').find('> ul').slideUp('fast');
            $('.linkler .blink > ul > li .ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('>ul').slideDown('fast');
            $(this).html('<i class="fal fa-minus"></i>');
        }else {
            $(this).html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('> ul').slideUp('fast');
        }
    });
}
function varyantIsim(){
    $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').append('<span></span>');
    var ekimgIsim = $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .right_line .size_box.selected img').attr('alt');
    $('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line span').html(ekimgIsim);
}
function BedenTablosu() {
    $('.kutuluvaryasyon').before('<div class="bedenT"><a class="fancybox bedenTablosu" href="#bedenTablosu"><img src="https://www.mylovebutik.com/customcss/images/bdnicon.png"> Hangi Bedensin?</a></div>');
    $(".PriceList").append("<div style='display:none;' id='bedenTablosu'><img class='img-responsive' src='https://www.mylovebutik.com/Uploads/EditorUploads/BedenTablosu.jpg' /></div>");
}
function HeaderFixed() {
    var sepetsayfakontrol = $("body").find(".BasketPage").length;
    if (sepetsayfakontrol == 0) {
        $(window).on('scroll',function(){
            if ($(this).scrollTop() > 145) {
                $('#header').addClass('fixed');
                $('body').addClass('margin');
            }
            else {
                $('#header').removeClass('fixed');
                $('body').removeClass('margin');
            }
            if ($(this).scrollTop() > 155) {
                $('#header').addClass('gectop');
            }
            else {
                $('#header').removeClass('gectop');
            }
        });
    }
}

    
$(document).ready(function() {
    if (globalModel.isAndroidDevice || globalModel.isiosDevice) {
        $('#footer').hide();
    }
});

function Sepetteindirim() {
    $('.productItem .productIcon .firsatIcon').parent().parent().addClass('Firsatsin');
        if (globalModel.languageCode == "en") {
            sepettekiFiyat = sepettekiFiyatEn;
            }   
    if (IndirimOrani > 0) {
            $('.productItem.Firsatsin').each(function(item){
                if (windowidth<767) {
            $('.productItem').css('padding-bottom','35px');
        }
                var price = $(this).find('.productDetail .productPrice .discountPrice span:first').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
                if (globalModel.currency == "try"){console.log("1-"+price); price = price.replace(/\s/g,'').replace('.','').replace(',', '.');}
                else if(globalModel.currency == "usd"){console.log("2-"+price); price = price.replace(',', ''); }
                else if(globalModel.currency == "eur"){console.log("3-"+price); price = price.replace('.', '').replace(',', '.'); }
                else{price = price.replace(',','.'); }
                var new_price = globalModel.currencySymbol + (price * IndirimOrani).toFixed(2).replace('.', ',');
                if ($(this).find('.KatSepetFiyat').length==0) {
                    $(this).find('.productDetail').append('<div class="KatSepetFiyat" style="/*float:left;*/"></div>');
                }
                $(this).find('.KatSepetFiyat').html('');
                //$(this).find('.KatSepetFiyat').html('<span class="sp1">'+sepettekiFiyat+'</span><span class="sp2">'+ new_price + '</span>');
                $(this).find('.KatSepetFiyat').html(`
                <div class="kampanyaYazisi">
                <span>Sepette <span class="sp1Custom" style="margin: 0;padding: 0;">${sepettekiFiyat.replace("-", "")}</span> İndirim</span>
                <span class="sp2Custom">${new_price}</span>
                </div>
                `);
              });
            if ($('.DetayFirsatUrunu').length>0) {
                var price2 = $('.IndirimliFiyatContent .indirimliFiyat .spanFiyat,#divIndirimsizFiyat .right_line .spanFiyat').text().replace(/^\s+|\s+$/g, '').trim().replace(globalModel.currencySymbol, "");
                if (globalModel.currency == "try"){price2 = price2.replace(/\s/g,'').replace('.','').replace(',', '.');}
                else if(globalModel.currency == "usd"){price2 = price2.replace(',', ''); }
                else if(globalModel.currency == "eur"){price2 = price2.replace('.', '').replace(',', '.'); }
                else{price2 = price2.replace(',','.'); }
                var value2 = parseFloat(price2);
                var new_price2 = globalModel.currencySymbol + (value2 * IndirimOrani).toFixed(2).replace('.', ',');
                if ($('.sPricCustom').length==0) {
                    $('.RightDetail').addClass('SpricV');
                    $('#divUrunEkSecenek').addClass('SpricV');
                    //$('#pnlFiyatlar').after('<div class="sPric"><span>'+sepettekiFiyat+'</span><span class="detay2">'+new_price2+'</span></div>');
                    $('#pnlFiyatlar').after(`
                    <div class="sPricCustom kampanyaYazisi">
                    <span>Sepette <span class="detay2" style="margin: 0;padding: 0;">${sepettekiFiyat.replace("-", "")}</span> İndirim</span>
                    <span class="detay2Custom">${new_price2}</span>
                    </div>
                    `);
               }
            }
        }
}

function UrunDon(){
    $('.productItem').each(function(){
        //$(this).find('.discountIcon').insertAfter($(this).find('.productPrice.IndirimVar .discountPrice'));
        $(this).find('.newIcon').appendTo($(this).find('.productDetail'));
        $(this).find('.boxBedenlerContent').appendTo($(this).find('.productDetail'));
    });
}

function SayfaTasarim(){
    if ($('#mainHolder_divDesign').length>0) {
        UrunDon();
    }
}