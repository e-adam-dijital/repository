/* ==================== */
/* ------FE6--SC------- */
/* ==================== */
var urunDuzeniTipi=0; //Urun duzen tipi
var mobilBlokCozunurluk=768; //Mobil dinamikblok
var sliderZoomCozunurluk=768; //mobilOzelSlider
var isHoverCartProduct=false; //Hover da kapatma
var kategoriMenuAcikGetir=true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk=768; //Urun resim slider 
var windowidth = document.documentElement.clientWidth; //window width orani
var urunDetay_varyasyonSecili=true; //varyasyon secme ve secmeme
//Sayfa Yuklenme sahnesi
$(document).ready(function () {
    //fontyukleme
    setTimeout(function () { loadStyle("https://cdn.ticimax.com/v8100/App_Themes/Konsept-14/fonticon/fontawesomeall.min.css", function () { }); }, 500); setTimeout(function () { loadStyle("https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap&subset=latin-ext", function () { }); }, 500);
    //sayfaislemleri
    if ($('#divSayfalamaUst').length>0) { KategoriIslemleri(); }//Kategori islemleri
    else if (globalModel.pageType == 'productdetail') {UrunDetayIslemleri(); }//Detay islemleri
    else if (globalModel.pageType == 'cart') { SepetEkrani(); }//Sepet islemleri
    if ($('.pageContainer').length > 0) {$('body').addClass('SayfaIcerik');}//Icerik sayfasinda bodye class ekleme
    if ($('.magazalarContent').length > 0) {$('body').addClass('Magazalar');}//Magaza sayfasinda bodye class ekleme
    GlobalIslemler();
});
function GlobalIslemler() {//Tum ekranlar ready sahnesi
    if (!pageInitialized) {
        if (windowidth>767){
            /*siteozel*/
            $('.welcome').after('<div class="icons"></div>');
            $('.welcome').appendTo('.icons');
            $('.mycart').insertBefore('.welcome');
            $('#lang_flag_container').insertAfter('.welcome');
            $('.htop').insertBefore('.headerContent');
        }
        $('.mycart').after('<div class="arabtn" ><i class="fal fa-search"></i></div>');
        if (windowidth<768) {$('.arabtn').insertBefore('#logo'); }
        $('.arabtn').on('click',function(){$('.searchContent').toggleClass('active'); });
        $('body').on('click',function (evt) {if (!$(evt.target).is('.arabtn,.arabtn i,.searchContent,.searchContent *')) {$('.searchContent').removeClass('active'); } });
        $('#divNewsLetter').prependTo('.ebultenGelecek');
    }
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productItem").find("video").parent().addClass("Videolu");
    if ($('.productItem').length > 0) {
        if (typeof InitTimers != "undefined") {
            InitTimers();
        }}
    $( ".productItem").each(function( index ) {if ($(this).find('.divVideoPlayButton').length>0) {$('.productItem').eq(index).find('.divVideoPlayButton').insertAfter('.productItem:eq('+index+') .productDetail'); } });
}
function KategoriIslemleri() {//Kategori ready sahnesi
    $('.categoryTitle .categoryTitleText').prependTo('.categoryContainer');
    if (windowidth > 1041) {$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click',function(event) {$(this).parent().find('.list-group, .slider-range, .amount').slideToggle(); $(this).toggleClass('active'); }); }
}
function UrunDetayIslemleri() {//Urun detay ready sahnesi
    if (productDetailModel.totalStockAmount < 1) {$('.RightDetail').addClass('StokYok');}
    if (!pageInitialized) {
        $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
        //$('.ProductDetailMainRow').wrapInner('<div class="ticiContainer"></div>');
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
        $('.product_social_icon_wrapper').appendTo('.BottomList');
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
        $('.riSingle .riUp').html('<i class="far fa-plus"></i>');
        $('.riSingle .riDown').html('<i class="far fa-minus"></i>');
        $('.buyfast').insertAfter('.basketBtn');
        $('#divAdetCombo').insertBefore('.basketBtn');
        $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');    
        $('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
        $('#divKombinSatinAl').insertAfter('.basketBtn');
        
        $('#divIndirimOrani').insertAfter('#pnlFiyatlar');
        $('#divTaksitAciklama').insertAfter('.PriceList');
        $('#divMarka').insertAfter('.PriceList');
        if (windowidth>767) {
            $('.UFavorilerimeEkle').insertAfter('.basketBtn');
        }else{
            $('#divUrunKodu').insertAfter('.PriceList');
            $('.UFavorilerimeEkle').appendTo('.leftImage');
            $(".basketBtn,.UFavorilerimeEkle a").on('click',function () {if ($("#hddnUrunID").val() == "0") {$('html,body').animate({scrollTop: $('#divUrunEkSecenek').offset().top - 110 }, 'slow'); } });
        }
        setTimeout(function() {tooltips(); },1500);
        $('.FiyatHaberVer a').on('click',function(){setTimeout(function() {tooltips(); },100); });
    }
}
function topMenuCallback() {
    HeaderFixed();
    if (windowidth<768) {mobilFooter();}
    $(".navUl li").each(function () {if ($(this).find("ul").length > 0) {$(this).addClass("ulVar"); }});
    var menuwidth = $('.navigation').width();
    if (/*menuwidth > 1000 || */ $('.navigation .navUl > li').length > 10 || windowidth<1200 /*|| windowidth<1340*/) {
        mobileMenu();
    }else{
        $('.navigation .navUl > li.ulVar').each(function(){
            $(this).find('> ul').wrapAll('<div class="Flexscroll"></div>');
        });
    }
  /*  if (windowidth<1500) {
        if (menuwidth > 900) {mobileMenu();}
    }*/
}
function blockCompleteCallback() {//Blok yuklenme
    if (globalModel.pageType == 'homepage') {//Anasayfa
    }
    if ($('#divSayfalamaUst').length>0) {//Kategori Sayfasi
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay Sayfasi
        UrunDetayPaylas();
        $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
        if (!pageInitialized) {
            $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
            if (windowidth<768) {
                var cList = $('.urunTab ul li'); var cDiv = $('.urunDetayPanel'); for (var i = 0; i <= cList.length; i++) {for (var i = 0; i <= cDiv.length; i++) {$(cDiv[i]).appendTo(cList[i]); } } $(".urunDetayPanel").hide() ;
                $(".urunTab").removeAttr('class').addClass("mobilTab");
                $('#linkOncekiSayfa').appendTo('.leftImage');
            }
        }
        $('.mobilTab >ul>li>a').on('click',function () {
            var openTab = $(this);
            if ($(this).parent().hasClass('active')) {$('.mobilTab >ul>li>a').parent().removeClass('active');}
            else {$('.mobilTab >ul>li>a').parent().removeClass('active');$(this).parent().addClass('active');}
            var tabName = openTab.attr('data-tab') || "";if (tabName === "Commets") {TabGetComments();}else if (tabName === "recommendations") {TabGetRecommendations();}
        });
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
                autoplay: false,
                loop: false,
                autoplayTimeout: 2000,
                navClass: ['ProductListprev', 'ProductListnext'],
                autoplaySpeed: 800,
                autoplayHoverPause: true,
                margin:20,
                nav: true,
                responsive: {0: {items: 2,autoplay: false,loop: true, margin: 5 }, 768:  {items: 3}, 1025:  {items: 3}, 1042: {items: 4},1200: {items: 4}}
            });
    });
    urunDuzeni(urunDuzeniTipi);
    if (globalModel.pageType == 'homepage'){//Anasayfa
    }
    if ($('#divSayfalamaUst').length>0) {//Kategori Sayfasi
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay sayfasi
        if($('#divSatinAl').css('display') == 'none'){$('.RightDetail').addClass('StokYok') }
            $('.centerCount .detaySliderContainer:not(#divIlgiliUrunler) .jCarouselLite ul').each(function () {
                if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                    $(this).owlCarousel({
                        lazyLoad: true,
                        autoplay: false,
                        loop: false,
                        autoplayTimeout: 2000,
                        navClass: ['ProductListprev', 'ProductListnext'],
                        autoplaySpeed: 800,
                        autoplayHoverPause: true,
                        margin:20,
                        nav: true,
                        responsive: {0: {items: 2,autoplay: true,loop: true, margin: 5 }, 768:  {items: 3}, 1025:  {items: 3}, 1042: {items: 4},1200: {items: 4}}
                    });
            });
        $('#IlgiliUrunDiv').insertBefore('#divUrunEkSecenek');
        if ($('.resimlivaryasyon').length>0) {
            $('.TopDet #IlgiliUrunDiv .JKatAdi .bold .satir1').html($('#divUrunEkSecenek .eksecenekLine.resimlivaryasyon .left_line').text());
        }
    }
    if (typeof InitTimers != "undefined") {
        InitTimers();
    }
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

        if (windowidth < 1042) {
            if ($('.FiltreUst').length == 0) {
                $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">'+translateIt("Urunler_Stoktakiler")+'</a></div>');
                $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>'+translateIt("UrunFiltreleme_Filtreleme")+'</span><a onclick="clearAllFilters()"><i class="fal fa-trash-alt"></i></a></div>');
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
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
                    if ($(this).find('li').hasClass('selected')) {var numlen = $(this).find('li.selected').length; $(this).addClass('more'); $(this).find('.moreNum').html(numlen);}
                    else{$(this).removeClass('more'); $(this).find('.moreNum').html(''); }
                });
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function(index, el) {
                    if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) {$('.FiltreUst a').addClass('active'); return false; }
                    else{$('.FiltreUst a').removeClass('active'); }
                });
                if ($('.sortingContent .filterOrderInStock').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected');}else{$('.tukgo .filterOrderInStock').removeClass('selected');}
                if ($('.sortingContent .sortingButton').length > 0) {if ($('.sortingContent .sortingButton > a[onclick="sortingClick(1000)"]').hasClass('selected')) {$('.tukgo .filterOrderInStock').addClass('selected'); }else {$('.tukgo .filterOrderInStock').removeClass('selected'); } }
            }
        }
        
    }
    if (globalModel.pageType == 'productdetail') {$('#divUrunKodu').append('<span>'+translateIt("Global_StokKodu")+'</span>');}
}
function mobileMenu() {//Mobil Menu ve mobil scriptler
    if (windowidth>767) {$('#header,body').addClass('MoreMenu');}
    var menuKopya = $('.navigation').html();
    $('.navigation').remove();
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="mobilMenuBT"><i class="fal fa-bars"></i><span>MENU</span></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div>');
    $('.headerContent').prepend('<div class="mobilMenuAcButton"><!--<span>MENU</span>--><i class="fal fa-bars"></i></div>');
    //Resimsiz Menu
    if ($('.HeaderMenu2').length>0) {
        $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-angle-right"></i></div>');
        $('.ResimsizDown').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('> ul').addClass('active'); } else {$(this).closest('li').find('> ul').removeClass('active'); } });
        $('.ResimsizDown2').on('click',function(event) {if ($(this).find('.fal').hasClass('fa-angle-right')) {$(this).closest('li').find('> ul').addClass('active');$(this).closest('ul').addClass('over'); } else {$(this).closest('li').find('> ul').removeClass('active');$(this).closest('ul').removeClass('over'); } });
        $('.ResimsizDown').each(function(index, el) {var Down1 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down1+'</span></span>'); });
        $('.ResimsizDown2').each(function(index, el) {var Down2 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>'+Down2+'</span></span>'); });
        $('.NoiBack2').on('click',function(event) {$(this).parent().parent().removeClass('active');$(this).closest('.over').removeClass('over'); $('.mobilMenu .navUl > li > ul').animate({scrollTop:0},100); $('.menuIcerikAlan').animate({scrollTop:0},100); });
        $('.NoiBack').on('click',function(event) {$('.mobilMenu .navUl > li > ul').removeClass('active'); $('.menuIcerikAlan').animate({scrollTop:0},100); });
    }
    $('.mobilMenu').after('<div class="mobilaf"></div>');
    if (windowidth<768) {
        $('.headerContent').prepend('<div class="mycartClick"><i class="fal fa-shopping-cart"></i></div>');
        $('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>'+translateIt("GlobalMasterPage_Anasayfa")+'</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-heart"></i><span>'+translateIt("Favorilerim_Baslik")+'</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>'+translateIt("GlobalMasterPage_MobilUyeGirisi")+'</span></a> </li> </ul> </div>');
        if (siteSettings.isAuthenticated == true) {$('.welcC a').attr('href','/hesabim.aspx'); $('.favoC a').attr('href','/Hesabim.aspx/#/Favorilerim'); $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim")); }
        $('#divIcerik').on('touchend',function(){$('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); });
        $('.welcome').insertAfter('.headerContent');
        $('.CartProduct').insertAfter('.mobilMenu');
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) {$('.CartProduct').addClass('SepetBos'); }
        if ($('.homeHeader').length>0) {$('body').addClass('homeBody');}
        $('.searchClick').on('click',function (event) {$('.searchContent').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); $('#txtbxArama').focus(); });
        $('.welcomeOpen').on('click',function () {$('.welcome').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    }
    $('.mobilMenuAcButton').on('click',function (event) {$('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.mobilaf,.CloseBtnMenu').on('click',function (event) {$('body').removeClass('overflow transform'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.mobilaf').removeClass('acik').removeAttr('style'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('.CartProduct').removeClass('animated'); $('#lang_flag_container').removeClass('selector'); $('body #divSayfalamaUst .filterBlock').removeClass('active'); });
    $('.mobilMenuBT').on('click',function (event) {$('.mobilMenu .navUl > li').find('ul').removeClass('active over')});
}
function SepetEkrani() {//Sepet ekrani
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function(){var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>'+wle+'</div>'); },1500);
    if ($('.sepett').find('div').length>0) {$('.mycart').addClass('more');}
    if ($('.BasketDetailCargo').length>0) {$('.mycart').addClass('more');}
    if ($('.odemeMenuContent').length>0) {$('.mycart').addClass('more');}
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
    var image = "http://" + location.host + "" + $('.Images #imgUrunResim').attr('src') + "";
    var description = "";
    $(".product_social_icons").on('click',function () {
        if ($(this).attr("content") == "facebook") {
            if (isMobileDevice()) {
                window.open("http://m.facebook.com/sharer.php?u=" + url + "");
            } else {
                window.open("http://www.facebook.com/sharer.php?s=100&p[medium]=100&p[title]=" + $.trim(title) + "&p[images][0]=" + image + "&p[url]=" + url + "&p[summary]=" + $.trim(title) + "&t=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
            }
        } else if ($(this).attr("content") == "twitter") {
            window.open("http://twitter.com/intent/tweet?text=" + $.trim(title) + "&url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "googleplus") {
            window.open("https://plus.google.com/share?url=" + url + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        } else if ($(this).attr("content") == "pinterest") {
            window.open("http://pinterest.com/pin/create/button/?url=" + url + "&media=" + image + "&description=" + $.trim(title) + "", "sharer", "toolbar=0,status=0,width=630,height=430");
        }
    });
}
function sepetBindRefresh(res){//Sepet kontrol
    if (typeof res.cart.products != 'undefined') {if (res.cart.products.length>0) {$('.mycart').addClass('more');$('.CartProduct').addClass('more'); $('.SepetBlock').addClass('more'); } else {$('.mycart').removeClass('more');$('.CartProduct').removeClass('more'); $('.SepetBlock').removeClass('more'); } }
        if (windowidth < 768) {
        $('.mycart > a').removeAttr('href');
        if ($('.SepetUst').length==0) {
        $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>'+translateIt("GlobalMasterPage_Sepetim")+'</span></div>');

}
}
}
$(document).on('click','.mycartClick,.sepetUrunSayisi',function () {$('.mobilMenu').removeClass('acik'); $('body').addClass('overflow transform'); $('.CartProduct').addClass('animated'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
$(document).on('click','.seClose',function () {$('.CartProduct').removeClass('animated');$('body').removeClass('overflow transform'); });

$(window).on('load',function() {
    if ($(".hesabimBolumuTutucu").length > 0) { HesabimTakip(); }
    if ($(".iletisimContent").length > 0) { Iletisimaspx(); }
});
$(document).ajaxComplete(function() {FavoriIslemCallback(); });
function FavoriIslemCallback(){
    var favSayi = GetFavoriListe().length;
    if (windowidth>767) {$('.favi span').text(favSayi);
}else{$('.favNum').text(favSayi); }
}
function HeaderFixed() {
    if ($(".sepetimBody").length == 0) {
        $(window).on('scroll',function () {
            if (windowidth > 767) {if ($(this).scrollTop() > 0){$('#header').addClass('fixed'); if (globalModel.pageType !== 'homepage'){$('body').addClass('margin'); } } else {$('#header').removeClass('fixed'); if (globalModel.pageType !== 'homepage'){$('body').removeClass('margin'); } }
        }else{if (globalModel.pageType == 'homepage'){if ($(this).scrollTop() > 115){$('#header').addClass('touched'); }else{$('#header').removeClass('touched'); } } }
    });
    }
}
function tooltips(){
    $('.ProductIcon > div > a').attr('SC_toolTip','SC_toolTip');
    $('.ProductIcon > div > a').attr('data-placement','bottom');
    $('.ProductIcon > div > a').each(function(index, el) {
        if ($(this).attr('SC_toolTip') == 'SC_toolTip' && $(this).find('.tooltip').length==0) {
            var titleInner = $(this).attr('title');
            var position = $(this).attr('data-placement');
            $(this).append('<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+titleInner+'</div></div>');
            $(this).find('.tooltip').addClass(position);
            var thisheight = $(this).find('.tooltip').height();
            var thiswidth = $(this).find('.tooltip').width();
            if ($('.tooltip').hasClass('right') || $('.tooltip').hasClass('left')) {$(this).find('.tooltip').css('margin-top',-thisheight/2); }
            if ($('.tooltip').hasClass('top') || $('.tooltip').hasClass('bottom')) {$(this).find('.tooltip').css('margin-left',-thiswidth/2); }
        }
    });
    $("body").on("mouseenter", ".ProductIcon > div > a", function() {$(this).find('.tooltip').addClass('in'); });
    $("body").on("mouseleave", ".ProductIcon > div > a", function() {$(this).find('.tooltip').removeClass('in'); });
}
function mobilFooter(){
    window.blockMenuHeaderScroll = false; $(window).on('touchstart', function(e) {if ($(e.target).closest('.owl-grab').length == 1) {blockMenuHeaderScroll = true;}}); $(window).on('touchend', function() {blockMenuHeaderScroll = false;}); $(window).on('touchmove', function(e) {if (blockMenuHeaderScroll) {e.preventDefault();}}); 
    $('.linkler .blink > ul > li > span').append('<div class="ackapabtn"><i class="fal fa-plus"></i></div>');
    $('.linkler .blink > ul > li > span').on('click',function () {
        if ($(this).find('.fal').hasClass('fa-plus')) {
            $('.linkler .blink > ul > li').find('> ul').slideUp('fast');
            $('.linkler .blink > ul > li .ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).closest('li').find('>ul').slideDown('fast');
            $(this).closest('li').find('.ebultenDiv').slideDown('fast');
            $(this).find('.ackapabtn').html('<i class="fal fa-minus"></i>');
        } else {
            $(this).find('.ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).closest('li').find('> ul').slideUp('fast');
            $(this).closest('li').find('.ebultenDiv').slideUp('fast');
        }
    });
}