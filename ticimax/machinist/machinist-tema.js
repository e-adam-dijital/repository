/* ==================== */
/* ------FE8--SC------- */
/* ==================== */
/***/
var urunDuzeniTipi = 0; //Urun duzen tipi
var mobilBlokCozunurluk = 768; //Mobil dinamikblok
var sliderZoomCozunurluk = 768; //mobilOzelSlider
var isHoverCartProduct = false; //Hover da kapatma
var kategoriMenuAcikGetir = true; //Kategorimenu tum kirilim
var urunDetayZoomCozunurluk = 1025; //Urun resim slider 
var windowidth = document.documentElement.clientWidth; //window width orani
var urunDetay_varyasyonSecili = true; //varyasyon secme ve secmeme
var sepeteEkleUyariAktif = true; //sepete ekleme popup
//var ShowListProductInCart = false; // Urun Sepette ve sepet adet ibaresi
//Sayfa Yuklenme sahnesi
function CR() { $("link").eq(0).attr("href", "/CustomCss/ticimax/style.css?b=" + Math.random() + ""); }
$(document).ready(function () {
    try { var control = globalModel.member.memberRole.split(',')[2]; if (control == 'ticimax') { $('body').before('<a onclick="CR()" style="position:fixed;right:0;top:50%; background:#000;color:#fff;padding:5px 15px;z-index:12154865746;font-size:11px;text-align:center; "><i class="fa fa-refresh"></i><p style="margin:0;">Css Yenile</p></a>'); } }
    catch (e) { }
    //sayfaislemleri
    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>');
    if ($('#divSayfalamaUst').length > 0) { KategoriIslemleri(); }//listeleme islemleri
    else if (globalModel.pageType == 'productdetail') { UrunDetayIslemleri(); }//Detay islemleri
    else if (globalModel.pageType == 'cart' || globalModel.pageType == 'ordercomplete' || globalModel.pageType == 'payment' || globalModel.pageType == 'ordercompleted') { SepetEkrani(); }//Sepet islemleri
    if ($('.pageContainer').length > 0) { $('body').addClass('SayfaIcerik'); }//Icerik sayfasinda bodye class ekleme
    if ($('.magazalarContent').length > 0) { $('body').addClass('Magazalar'); }//Magaza sayfasinda bodye class ekleme
    if ($('.userDivRow').length > 0) { $('body').addClass('UyeGiris'); }//Uye giris ekraninda bodye class ekleme
    if ($('.uyeOlContainer').length > 0) { $('body').addClass('UyeOl'); }//Uye ol ekraninda bodye class ekleme
    if ($('.homeHeader').length > 0) { $('body').addClass('HomeBody'); }
    GlobalIslemler();
});
function GlobalIslemler() {//Tum ekranlar ready sahnesi
    if (!pageInitialized) {
        /*siteozel*/
        $('.mycart').insertBefore('.welcome');
        $('#divNewsLetter').prependTo('.ebultenGelecek');
        $('.headerTop').prependTo('#header');
        $('.navigation').insertAfter('.headerContent');
        if (windowidth > 767) {
            $('.headerTop').after('<div class="htEx"><a class="headerCargo" href="Hesabim.aspx#/Siparislerim"><div class="svgIcon"><svg width="25.244" height="15.2" viewBox="0 0 25.244 15.2"><g transform="translate(-4.747 -22.898)" stroke="#000" stroke-width="0.2px"><path d="M7.738,23a.278.278,0,0,0-.243.278v2.231a.278.278,0,1,0,.556,0V23.554h13.94V34.873H14.752a2.616,2.616,0,0,0-5.13,0H8.051v-2.8a.278.278,0,1,0-.556,0v3.073a.278.278,0,0,0,.278.278h1.8a2.618,2.618,0,0,0,5.234,0h8.55a2.618,2.618,0,0,0,5.234,0h1.024a.278.278,0,0,0,.278-.278V30.038a4.727,4.727,0,0,0-1.007-2.83,3.426,3.426,0,0,0-2.674-1.424H22.547V23.276A.278.278,0,0,0,22.269,23H7.738ZM22.547,26.34h2.37v3.88a.278.278,0,0,0,.278.278h4.14v4.375h-.8a2.616,2.616,0,0,0-5.13,0h-.859Zm2.925,0h.738a2.863,2.863,0,0,1,2.24,1.207,4.248,4.248,0,0,1,.877,2.4H25.472ZM5.091,27.417a.281.281,0,1,0,.078.556H9.327a.278.278,0,1,0,0-.556H5.169a.278.278,0,0,0-.052,0Zm2.1,2.2a.279.279,0,1,0,.061.556H9.327a.278.278,0,1,0,0-.556H7.252A.278.278,0,0,0,7.192,29.613Zm5,3.715a2.057,2.057,0,1,1-2.066,2.057A2.051,2.051,0,0,1,12.191,33.328Zm13.784,0a2.057,2.057,0,1,1-2.066,2.057A2.051,2.051,0,0,1,25.976,33.328Zm-13.784,1a1.059,1.059,0,1,0,1.059,1.059A1.065,1.065,0,0,0,12.191,34.326Zm13.784,0a1.059,1.059,0,1,0,1.05,1.059A1.065,1.065,0,0,0,25.976,34.326Zm-13.784.556a.5.5,0,1,1-.5.5A.5.5,0,0,1,12.191,34.882Zm13.784,0a.5.5,0,0,1,0,1.007.5.5,0,0,1,0-1.007Z" transform="translate(0 0)"/></g></svg></div>SİPARİŞİM NEREDE?</a></div>');
            $('#lang_flag_container').prependTo('.htEx');
            $('.mycart').after('<a href="Hesabim.aspx/#/Favorilerim" class="headerFav"><div class="svgIcon"><svg width="21.32" height="20.5" viewBox="0 0 21.32 20.5"><path d="M18.955,3.938H18.9A5.831,5.831,0,0,0,14.035,6.6,5.831,5.831,0,0,0,9.166,3.938H9.115a5.794,5.794,0,0,0-5.74,5.791,12.475,12.475,0,0,0,2.45,6.8,42.931,42.931,0,0,0,8.21,7.908,42.931,42.931,0,0,0,8.21-7.908,12.475,12.475,0,0,0,2.45-6.8A5.794,5.794,0,0,0,18.955,3.938Zm2.132,11.747a39.308,39.308,0,0,1-7.052,6.949,39.367,39.367,0,0,1-7.052-6.955A11.056,11.056,0,0,1,4.81,9.729,4.348,4.348,0,0,1,9.125,5.378h.046a4.3,4.3,0,0,1,2.106.553,4.478,4.478,0,0,1,1.558,1.461,1.44,1.44,0,0,0,2.409,0A4.523,4.523,0,0,1,16.8,5.931a4.3,4.3,0,0,1,2.106-.554h.046A4.348,4.348,0,0,1,23.27,9.729,11.2,11.2,0,0,1,21.087,15.684Z" transform="translate(-3.375 -3.938)"/></svg></div>FAVORİLERİM</a>');
            if(globalModel.languageCode=="tr"){
                $('.mycart').before('<a href="/Form/bayi-basvurusu-8" class="headerWholeSale"><div class="svgIcon"><svg width="22.39" height="22.39" viewBox="0 0 22.39 22.39" stroke="#000" stroke-width="0.2px"><g transform="translate(-1544.9 -177.294)"><g transform="translate(1545 188.814)"><g transform="translate(0 0)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(2.29 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><path  d="M10.445,263.5H.325a.325.325,0,0,0-.325.325v10.12a.325.325,0,0,0,.325.325h10.12a.325.325,0,0,0,.325-.325v-10.12A.325.325,0,0,0,10.445,263.5Zm-9.795.65H4.565v2.6h-1.3v-1.625a.325.325,0,0,0-.65,0v1.95a.325.325,0,0,0,.325.325H4.89a.325.325,0,0,0,.325-.325V264.15H7.18v9.47H.65Zm9.47,9.47H7.83v-9.47h2.29Z" transform="translate(0 -263.5)"/></g><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(13.71 8.82)"/><g transform="translate(11.42 0)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><path  d="M273.945,263.5h-10.12a.325.325,0,0,0-.325.325v10.12a.325.325,0,0,0,.325.325h10.12a.325.325,0,0,0,.325-.325v-10.12A.325.325,0,0,0,273.945,263.5Zm-7.18.65h1.3v2.6h-1.3Zm-2.615,0h1.965v2.925a.325.325,0,0,0,.325.325h1.95a.325.325,0,0,0,.325-.325V264.15h1.965v9.47h-6.53Zm9.47,9.47h-2.29v-9.47h2.29Z" transform="translate(-263.5 -263.5)"/></g></g><g transform="translate(1550.705 177.394)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(2.29 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><g transform="translate(0 0)"><path  d="M165.992,10.77h10.12a.325.325,0,0,0,.325-.325V.325A.325.325,0,0,0,176.112,0h-10.12a.325.325,0,0,0-.325.325v10.12A.325.325,0,0,0,165.992,10.77Zm9.795-.65H173.5V.65h2.29ZM168.932.65h1.3v2.6h-1.3Zm-2.615,0h1.965V3.576a.325.325,0,0,0,.325.325h1.95a.325.325,0,0,0,.325-.325V.65h1.965v9.47h-6.53Z" transform="translate(-165.667)"/></g></g></g></svg></div>BAYİ</a>');
            }else{
                $('.mycart').before('<a href="/Form/wholesale-9" class="headerWholeSale"><div class="svgIcon"><svg width="22.39" height="22.39" viewBox="0 0 22.39 22.39" stroke="#000" stroke-width="0.2px"><g transform="translate(-1544.9 -177.294)"><g transform="translate(1545 188.814)"><g transform="translate(0 0)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(2.29 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><path  d="M10.445,263.5H.325a.325.325,0,0,0-.325.325v10.12a.325.325,0,0,0,.325.325h10.12a.325.325,0,0,0,.325-.325v-10.12A.325.325,0,0,0,10.445,263.5Zm-9.795.65H4.565v2.6h-1.3v-1.625a.325.325,0,0,0-.65,0v1.95a.325.325,0,0,0,.325.325H4.89a.325.325,0,0,0,.325-.325V264.15H7.18v9.47H.65Zm9.47,9.47H7.83v-9.47h2.29Z" transform="translate(0 -263.5)"/></g><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(13.71 8.82)"/><g transform="translate(11.42 0)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><path  d="M273.945,263.5h-10.12a.325.325,0,0,0-.325.325v10.12a.325.325,0,0,0,.325.325h10.12a.325.325,0,0,0,.325-.325v-10.12A.325.325,0,0,0,273.945,263.5Zm-7.18.65h1.3v2.6h-1.3Zm-2.615,0h1.965v2.925a.325.325,0,0,0,.325.325h1.95a.325.325,0,0,0,.325-.325V264.15h1.965v9.47h-6.53Zm9.47,9.47h-2.29v-9.47h2.29Z" transform="translate(-263.5 -263.5)"/></g></g><g transform="translate(1550.705 177.394)"><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(3.59 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(2.29 8.82)"/><circle  cx="0.325" cy="0.325" r="0.325" transform="translate(4.89 8.82)"/><g transform="translate(0 0)"><path  d="M165.992,10.77h10.12a.325.325,0,0,0,.325-.325V.325A.325.325,0,0,0,176.112,0h-10.12a.325.325,0,0,0-.325.325v10.12A.325.325,0,0,0,165.992,10.77Zm9.795-.65H173.5V.65h2.29ZM168.932.65h1.3v2.6h-1.3Zm-2.615,0h1.965V3.576a.325.325,0,0,0,.325.325h1.95a.325.325,0,0,0,.325-.325V.65h1.965v9.47h-6.53Z" transform="translate(-165.667)"/></g></g></g></svg></div>WHOLESALE</a>');
            }
            $('.mycart>a').prepend('<div class="svgIcon"><svg width="22.577" height="22.493" viewBox="0 0 22.577 22.493"><path d="M38.1,36.771H25.382a3.365,3.365,0,0,1-3.273-2.645L19.374,21.385H16.716a.6.6,0,1,1,0-1.2h3.142a.6.6,0,0,1,.585.472l2.837,13.213a2.163,2.163,0,0,0,2.1,1.7H38.1a.6.6,0,0,1,0,1.2Z" transform="translate(-16.118 -20.189)"/><path d="M37.74,34.8H24.846a.6.6,0,0,1,0-1.2H37.74a1.2,1.2,0,0,0,1.189-1.016l.911-5.882H23.109a.6.6,0,1,1,0-1.2H40.536a.6.6,0,0,1,.591.689L40.111,32.77A2.386,2.386,0,0,1,37.74,34.8Z" transform="translate(-18.689 -22.329)"/><path d="M46.053,54.525A2.442,2.442,0,1,1,48.5,52.083a2.442,2.442,0,0,1-2.443,2.442Zm0-3.689A1.247,1.247,0,1,0,47.3,52.083,1.247,1.247,0,0,0,46.053,50.836Z" transform="translate(-27.174 -32.033)"/><path d="M32.1,54.525a2.442,2.442,0,1,1,2.442-2.442A2.442,2.442,0,0,1,32.1,54.525Zm0-3.689a1.247,1.247,0,1,0,1.247,1.247A1.247,1.247,0,0,0,32.1,50.836Z" transform="translate(-21.563 -32.033)"/></svg></div>');
            $('.welcome').prepend('<div class="svgIcon"><svg width="22.19" height="22.19" viewBox="0 0 22.19 22.19"><path d="M11.095,22.19a11.094,11.094,0,1,1,8.484-3.944,11.212,11.212,0,0,1-1.309,1.312,11.1,11.1,0,0,1-7.174,2.631Zm0-20.8A9.709,9.709,0,0,0,3.671,17.351,9.822,9.822,0,0,0,4.818,18.5a9.709,9.709,0,0,0,12.554,0,9.821,9.821,0,0,0,1.147-1.15A9.709,9.709,0,0,0,11.095,1.387Z" transform="translate(0 0)"/><path d="M164.161,72.321a4.161,4.161,0,1,1,4.161-4.161A4.165,4.165,0,0,1,164.161,72.321Zm0-6.934a2.774,2.774,0,1,0,2.774,2.774A2.777,2.777,0,0,0,164.161,65.387Z" transform="translate(-153.066 -61.226)"/><path d="M94.354,234.015a.694.694,0,0,1-.673-.862,6.247,6.247,0,0,0-5.962-7.765h-.183a6.247,6.247,0,0,0-5.962,7.765.693.693,0,1,1-1.345.338A7.63,7.63,0,0,1,87.52,224h.216a7.634,7.634,0,0,1,7.29,9.49A.694.694,0,0,1,94.354,234.015Z" transform="translate(-76.533 -214.292)"/></svg></div>');

            $('.headerContent').append('<div class="searchToggle">ARA</div>');
            $('.searchToggle').on('click',function () { $('.searchContent').toggleClass('active'); $(this).toggleClass('active'); });
            $('.searchDown').appendTo('.searchContent');

            $('.HC-Container').each(function () {//Slider
                if ($(this).find(">div").length > 0 && !$(this).hasClass("owl-carousel"))
                    $(this).owlCarousel({
                        lazyLoad:true,
                        autoplay: false,
                        loop: false,
                        rewind: true,
                        navText: ['<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(24.044 28.571) rotate(180)" /></svg>', '<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(-11.251 -6.194)"/></svg>'],
                        navClass: ['ProductListprev', 'ProductListnext'],
                        margin: 20,
                        nav: true,
                        responsive: { 0: { items: 4, margin: 5 }, 768: { items: 5 }, 1025: { items: 6 }, 1160: { items: 8 }, 1360: { items: 10 } }
                    });
            });
        }

        

        
        setTimeout(function () { $('#btnKelimeAra').val(''); }, 1000);
        
        anasayfaTab();
        
    }
    var breadHtml = $('ul.breadcrumb').html();
    $('ul.breadcrumb').after('<div class="breadList" style="display:none;"><div class="mBread"><ul class="breadcrumbList">' + breadHtml + '</ul></div><div class="clbtn"><i class="far fa-times"></i></div></div>');
    var liS = $(".breadcrumbList li");
    $(".breadcrumbList li").each(function (index) { if (index > 0) { var ul = $("<ul/>"); $(this).appendTo(ul); ul.appendTo(liS[index - 1]); } });
    $('.breadcrumb').on('click',function () { $('.breadList').addClass('breadActive').show(); $(this).addClass('zindex'); });
    $('.clbtn').on('click',function () { $('.breadList').removeClass('breadActive').hide(); $('.breadcrumb').removeClass('zindex'); });
}
function KategoriIslemleri() {//Kategori ready sahnesi
    $("body").addClass("CategoryBody");
    //$('.categoryTitle .categoryTitleText').insertBefore('.leftBlock');
    //$('.leftBlock .category-vertical-filters .panel .panel-heading').on('click',function(event) {$(this).parent().find('.list-group, .FiyatSlider,.panel-search').slideToggle(); $(this).toggleClass('active'); });
}
function UrunDetayIslemleri() {//Urun detay ready sahnesi
    $("body").addClass("ProductBody");
    if (productDetailModel.totalStockAmount < 1) { $('.RightDetail').addClass('StokYok'); }
    if (!pageInitialized) {
        $('.ProductDetailMain').prepend('<div class="TopDet"></div>');
        $('.ProductDetail > .categoryTitle').insertBefore('#divIcerik');
        $('.leftImage').appendTo('.TopDet');
        $('.RightDetail').appendTo('.TopDet');
        //ilk bolum
        $('.RightDetail').prepend('<div class="TopList"></div>');        
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
        $('.urunOzellik').appendTo('.BottomList');
        $('.urunGuvenList').prependTo('.BottomList');
        $('.urunKargoBilgi').appendTo('.BottomList');
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
        $('.PriceList').insertAfter('.ProductName');
        //alt ekler
        $('#divKombinSatinAl').insertAfter('.basketBtn');
        $('.buyfast').insertAfter('.basketBtn');
        $('#divAdetCombo').insertBefore('.basketBtn');
        $('#divTaksitAciklama').insertAfter('#pnlFiyatlar');
        $('#divAdetCombo .left_line').insertBefore('#divAdetCombo');
        $('.pSatisBirimi').insertBefore('.Basketinp');

        $('.categoryTitle:not(.JKatAdi)').prependTo('.productDetailContainer');
        $('#IlgiliUrunDiv').insertBefore('#divUrunEkSecenek')

        urunDetayIocn();
        BedenTablosu();

        $('.TopDet #IlgiliUrunDiv ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad:true,
                autoplay: false,
                loop: false,
                rewind: true,
                navText: ['<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(24.044 28.571) rotate(180)" /></svg>', '<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(-11.251 -6.194)"/></svg>'],
                navClass: ['ProductListprev', 'ProductListnext'],
                margin: 10,
                nav: true,
                responsive: { 0: { items: 2, margin: 5 }, 768: { items: 3 }, 1025: { items: 3 }, 1160: { items: 4 } }
            });
    });
        
        //$('.UWhatsApp').insertAfter('.product_social_icon_wrapper li:last-child');
    }
    $(".basketBtn,.UFavorilerimeEkle a,.UIstekListemeEkle a").on('click',function () { if ($("#hddnUrunID").val() == "0") { $('html,body').animate({ scrollTop: $('#divUrunEkSecenek').offset().top - 110 }, 'slow'); } });
}
function topMenuCallback() {
    $('.navigation .navUl > li:last-child > a').attr('href', 'javascript:void(0)');
    $(".navUl li, .navUl li li").each(function () {
        if ($(this).find("ul").length > 0) {
            $(this).addClass("ulVar");
            $(this).append('<span></span>');
        }
    });
    $("body").on("click", ".HeaderMenu2.navUl .ulVar > span ", function () { $(this).closest('.ulVar').toggleClass("active"); });
    if (!pageInitialized) {

        $('body').on('mouseenter','.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar',function() {
            //$('#divIcerik').addClass('hoverr');
        });
        $('body').on('mouseleave','.navUl > li.ulVar, .yanResimliMenu .resimliYanMenu .lfMenu .lfMenuUl .lfMenuitem.ulVar',function() {
            //$('#divIcerik').removeClass('hoverr');
        });
        $('.navigation .navUl > li.ulVar').each(function () { if ($(this).find('.altMenuSag img').length > 0 || $(this).find('.altMenuSag .altMenuSagEditor *').length > 0) { $(this).find('.altMenu').addClass('picTrue'); } });
    }
    HeaderFixed();
    mobilFooter();
    mobileMenu();
}
function blockCompleteCallback() {//Blok yuklenme
    if (globalModel.pageType == 'homepage') {//Anasayfa   
        
    }
    if ($('#divSayfalamaUst').length > 0) {//listeleme Sayfasi
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay Sayfasi
        UrunDetayPaylas();
        if (!pageInitialized) {
            $('#linkOncekiSayfa').appendTo('ul.breadcrumb');
            if (windowidth < 768) {
                $('#linkOncekiSayfa').appendTo('.leftImage');
            }
        }
        /*detayTabAccordion*/
        var cList = $('.urunTab ul li'); var cDiv = $('.urunDetayPanel'); for (var i = 0; i <= cList.length; i++) { for (var i = 0; i <= cDiv.length; i++) { $(cDiv[i]).appendTo(cList[i]); } } $(".urunDetayPanel").hide();
        $(".urunOzellik").removeAttr('class').addClass("urunOzellikTab");
        $('.urunOzellikTab .urunTab >ul>li>a').on('click',function () {
            var openTab = $(this);
            if ($(this).parent().hasClass('active')) { $('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active'); }
            else { $('.urunOzellikTab .urunTab >ul>li>a').parent().removeClass('active'); $(this).parent().addClass('active'); }
            var tabName = openTab.attr('data-tab') || ""; if (tabName === "Commets") { TabGetComments(); } else if (tabName === "recommendations") { TabGetRecommendations(); }
        });
    }
}
setTimeout(function(){
    $('.urunOzellikTab .urunTab >ul>li').each(function(){
        $(this).on("click", function(){
              $(this).removeClass("active")
        }) 
    })
     }, 2000);
function urunListCallback() {//Slider ve Urunlisteleme
    //$('.leftBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, autoplaySpeed: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    //$('.rightBlock .jCarouselLite ul').each(function () {if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel")) $(this).owlCarousel({autoplay: true,loop: true, autoplayTimeout: 2000, navClass: ['ProductListprev', 'ProductListnext'], autoplaySpeed: 2000, autoplayHoverPause: true, margin: 1, nav: true, responsive: {0: {items: 1},} }); });
    if (globalBlokModel == 1) {//Sol ve Orta blok
        if (urunDuzeniTipi == 0) urunDuzeniTipi = 4; $('.leftBlock').removeClass().addClass('leftBlock LeftMiddle'); $('.centerCount').removeClass().addClass('centerCount LeftMiddle');
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
    if ($('.blockSelect').length > 0) {
    }
    $('.kategoriUrunler .sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad:true,
                autoplay: false,
                loop: false,
                rewind: true,
                navText: ['<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(24.044 28.571) rotate(180)" /></svg>', '<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(-11.251 -6.194)"/></svg>'],
                navClass: ['ProductListprev', 'ProductListnext'],
                margin: 5,
                nav: true,
                responsive: { 0: { items: 2, margin: 5 }, 768: { items: 3 }, 1025: { items: 3 } }
            });
    });
    $('.sliderBannerContainer:not(.NoSlider) .jCarouselLite ul').each(function () {//Slider
        if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
            $(this).owlCarousel({
                lazyLoad:true,
                autoplay: false,
                loop: false,
                rewind: true,
                navText: ['<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(24.044 28.571) rotate(180)" /></svg>', '<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(-11.251 -6.194)"/></svg>'],
                navClass: ['ProductListprev', 'ProductListnext'],
                margin: 10,
                nav: true,
                responsive: { 0: { items: 2, margin: 5 }, 768: { items: 3 }, 1025: { items: 3 }, 1160: { items: 4 } }
            });
    });
    urunDuzeni(urunDuzeniTipi);
    if (globalModel.pageType == 'homepage') {//Anasayfa
    }
    if ($('#divSayfalamaUst').length > 0) {//listeleme
        $('body').on('click', '.blockSelect .sort_hrz', function () { urunDuzeniTipi = 1; urunDuzeni(urunDuzeniTipi); });
        $('body').on('click', '.blockSelect .sort_2',   function () { urunDuzeniTipi = 2; urunDuzeni(urunDuzeniTipi); });
        $('body').on('click', '.blockSelect .sort_3',   function () { urunDuzeniTipi = 3; urunDuzeni(urunDuzeniTipi); });
        $('body').on('click', '.blockSelect .sort_4',   function () { urunDuzeniTipi = 4; urunDuzeni(urunDuzeniTipi); });
        $('body').on('click', '.blockSelect .sort_5',   function () { urunDuzeniTipi = 5; urunDuzeni(urunDuzeniTipi); });
    }
    if ($('#divSayfalamaUst').length > 0) {
        setTimeout(function () {
            if ($(".FiltreToggle").length == 0) { $(".blockSelect").before("<div class='FiltreToggle'>+ FİLTRELE</div>"); }
            if ($(".FiltreClose").length == 0) { $(".filterBlock").prepend("<div class='FiltreClose'><i class='fal fa-times'></i></div>"); }
        }, 1000); $("body").on("click", ".FiltreToggle", function () { $(".filterBlock").addClass("active"); }); $("body").on("click", ".FiltreClose", function () { $(".filterBlock").removeClass("active"); });
    }
    if (globalModel.pageType == 'productdetail') {//UrunDetay sayfasi
        if ($('#divSatinAl').css('display') == 'none') { $('.RightDetail').addClass('StokYok'); }
        $('.detaySliderContainer:not(#divIlgiliUrunler) .jCarouselLite ul, .SonZiyaretEdilenUrunler .jCarouselLite ul').each(function () {
            if ($(this).find("li").length > 0 && !$(this).hasClass("owl-carousel"))
                $(this).owlCarousel({
                    lazyLoad:true,
                    autoplay: false,
                    loop: false,
                    rewind: true,
                    navText: ['<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(24.044 28.571) rotate(180)" /></svg>', '<svg width="10.58" height="18.5" viewBox="0 0 12.793 22.378"><path d="M20.187,17.38,11.72,8.919a1.6,1.6,0,0,1,2.265-2.258l9.593,9.586a1.6,1.6,0,0,1,.047,2.205l-9.633,9.653a1.6,1.6,0,0,1-2.265-2.258Z" transform="translate(-11.251 -6.194)"/></svg>'],
                    navClass: ['ProductListprev', 'ProductListnext'],
                    margin: 10,
                    nav: true,
                    responsive: { 0: { items: 2, margin: 5 }, 768: { items: 3 }, 1025: { items: 3 }, 1160: { items: 4 } }
                });
        });
    }
    InitTimers();
    $(".productItem").find("video").parent().addClass("Videolu");
    $(".productItem").find(".TukendiIco").parent().addClass("StokYok");
    $(".productPrice").find(".regularPrice").parent().addClass("IndirimVar");
    $(".sliderBannerContainer .productItem").find("video").parent().addClass("Videolu");
    $(".panel-search input").length > 0 ? $(".panel-search input").attr("placeholder", translateIt("BlokModul_UrunArama_Ara") + "...") : "";
    $(".FiyatTextBox .filterPrice1").length > 0 ? $(".FiyatTextBox .filterPrice1").attr("placeholder", translateIt("FiyatAlarmListem_IlkFiyat")) : "";
    $(".FiyatTextBox .filterPrice2").length > 0 ? $(".FiyatTextBox .filterPrice2").attr("placeholder", translateIt("FiyatAlarmListem_SonFiyat")) : "";
}
function urunDuzeni(tip) {//Urun duzen tipi 2 3 4 5 veya tek
    if ($('#divSayfalamaUst').length > 0) {
        if ($('.blockSelect .sort_5').length == 0) { $('.blockSelect .sort_4').after('<a href="javascript:;" class="sort_5"><i class="fas fa-th"></i></a>'); }
        if ($('.blockSelect .sort_2').length == 0) { $('.blockSelect .sort_3').before('<a href="javascript:;" class="sort_2"><i class="fas fa-th-large"></i></a>'); }
        if ($('.brandlistselection select').length > 0) { $('#divSayfalamaUst').addClass('Slct'); }
        $('.sort_hrz').removeClass("Active");
        $('.sort_2').removeClass("Active");
        $('.sort_3').removeClass("Active");
        $('.sort_4').removeClass("Active");
        $('.sort_5').removeClass("Active");
        if (tip == 1) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_hrz'); $(".ItemOrj").removeClass().addClass("ItemOrj col-12"); $('.blockSelect .sort_hrz').addClass("Active"); lazyLoad(); }
        else if (tip == 2) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_2'); $(".ItemOrj").removeClass().addClass("ItemOrj col-6"); $('.blockSelect .sort_2').addClass("Active"); lazyLoad(); }
        else if (tip == 3) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_3'); $(".ItemOrj").removeClass().addClass("ItemOrj col-4"); $('.blockSelect .sort_3').addClass("Active"); lazyLoad(); }
        else if (tip == 4) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_4'); $(".ItemOrj").removeClass().addClass("ItemOrj col-3"); $('.blockSelect .sort_4').addClass("Active"); lazyLoad(); }
        else if (tip == 5) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_5'); $(".ItemOrj").removeClass().addClass("ItemOrj col-5li"); $('.blockSelect .sort_5').addClass("Active"); lazyLoad(); }
        else if (tip == 6) { $('.ProductList:not(.markaSlider)').removeClass().addClass('ProductList PlSc_6'); $(".ItemOrj").removeClass().addClass("ItemOrj col-2"); lazyLoad(); }


        if ($('.FiltreUst').length == 0) {
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="tukgo"><a onclick="sortingClick(1000)" class="filterOrderInStock">' + translateIt("Urunler_Stoktakiler") + '</a></div>');
            $('body #divSayfalamaUst .category-vertical-filters.top-filters').prepend('<div class="FiltreUst"><div class="closeFilt"><i class="fal fa-times"></i></div><span>' + translateIt("UrunFiltreleme_Filtreleme") + '</span><a onclick="clearAllFilters()"><i class="fal fa-trash"></i></a></div>');
            if ($('.moreNum').length == 0) {
                $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').find('.panel-heading').append('<div class="moreNum"></div>');
            }
            $('.mobilFilterBtn').on('click',function (event) {
                $('.mobilaf').addClass('acik');
                $('#divSayfalamaUst .filterBlock').addClass('active');
            });
            $('.closeFilt').on('click',function (event) {
                $('.mobilaf').removeClass('acik');
                $('#divSayfalamaUst .filterBlock').removeClass('active');
            });
        }
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($(this).find('li').hasClass('selected')) { var numlen = $(this).find('li.selected').length; $(this).addClass('more'); $(this).find('.moreNum').html(numlen); }
            else { $(this).removeClass('more'); $(this).find('.moreNum').html(''); }
        });
        $('#divSayfalamaUst .category-vertical-filters.top-filters .panel').each(function (index, el) {
            if ($('#divSayfalamaUst .category-vertical-filters.top-filters .panel').hasClass('more')) { $('.FiltreUst a').addClass('active'); return false; }
            else { $('.FiltreUst a').removeClass('active'); }
        });
        if ($('.sortingContent .filterOrderInStock').hasClass('selected')) { $('.tukgo .filterOrderInStock').addClass('selected'); } else { $('.tukgo .filterOrderInStock').removeClass('selected'); }
        if ($('.sortingContent .sortingButton').length > 0) { if ($('.sortingContent .sortingButton > a[onclick="sortingClick(1000)"]').hasClass('selected')) { $('.tukgo .filterOrderInStock').addClass('selected'); } else { $('.tukgo .filterOrderInStock').removeClass('selected'); } }

    }
    if (globalModel.pageType == 'productdetail') { if ($('#divUrunKodu span').length == 0) { $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>'); } }
}
function ekSecenekListesiCallBack() {
    if (globalModel.pageType == 'productdetail') { if ($('#divUrunKodu span').length == 0) { $('#divUrunKodu').prepend('<span>' + translateIt("Global_StokKodu") + '</span>'); } }
    FavoriIslemCallback();
}
function mobileMenu() {//Mobil Menu ve mobil scriptler
    var menuKopya = $(' .navigation').html();
    $('body').prepend('<div class="mobilMenu"><div class="menuUstBolum"><div class="menuBack"><i class="far fa-bars"></i><span>Menu</span></div><div class="CloseBtnMenu"><i class="far fa-times"></i></div></div><div class="menuIcerikAlan">' + menuKopya + '</div></div>');
    $('.headerContent').prepend('<div class="mobilMenuAcButton"><span>Menu</span><i class="far fa-bars"></i></div><div class="searchClick"><i class="fal fa-search"></i></div><div class="welcomeOpen"><i class="fal fa-user"></i></div><div class="mycartClick"><i class="fal fa-shopping-cart" ></i></div>');
    $('.menuIcerikAlan').after('<div class="mobilMenuEx"><span>Canlı Destek Hattı - +90(533) 593 77 31</span><ul><li><a href="#"><img src="/CustomCss/ticimax/images/icon/delivery.svg" />SİPARİŞİM NEREDE?</a></li><li><a href="#"><img src="/CustomCss/ticimax/images/icon/wholesale.svg" />WHOLESALE</a></li></ul></div>');
    $("#lang_flag_container").insertBefore(".mobilMenuEx span");
    //Resimli Menu
    if ($('.mobilMenu .ResimliMenu1').length > 0) {
        $('.mobilMenu .ResimliMenu1 li .altMenu').closest('li').append('<div class="ResimliDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .ResimliMenu1 li .altmenuSol li ul').closest('li').append('<div class="ResimliDown2"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .altMenuMarkalar').parent().parent().addClass('Markalar'); var MarkaName = $('.Markalar').find(' > a').html();
        $('.mobilMenu .altMenuMarkalar').prepend('<span><div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div><a>' + MarkaName + '</a></span>');
        $('.ResimliDown').on('click',function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').find('.altMenu').addClass('active'); } else { $(this).closest('li').find('.altMenu').removeClass('active'); } });
        $('.ResimliDown2').on('click',function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').find('.ResimliMenu1AltUl').addClass('active'); } else { $(this).closest('li').find('.ResimliMenu1AltUl').removeClass('active'); } });
        $('.ResimliDown2').each(function (index, el) { var ClickMeNa = $(this).parent('li').find('>a').text(); $(this).closest('li').find('.ResimliMenu1AltUl').prepend('<span><div class="DownBtn"><i class="fal fa-long-arrow-left"></i></div> <a href="">' + ClickMeNa + '</a></span>'); });
        $('.mobilMenu .altmenuSol > span').prepend('<div class="UpBtn"><i class="fal fa-long-arrow-left"></i></div>');
        $('.DownBtn').on('click',function (event) { $('.mobilMenu .ResimliMenu1AltUl').removeClass('active'); $('.altMenuler').animate({ scrollTop: 0 }, 100); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
        $('.UpBtn').on('click',function (event) { $('.altMenu').removeClass('active'); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
    }
    //Resimsiz Menu
    if ($('.HeaderMenu2').length > 0) {
        $('.mobilMenu .HeaderMenu2 > li > ul').closest('li').append('<div class="ResimsizDown"><i class="fal fa-angle-right"></i></div>');
        $('.mobilMenu .HeaderMenu2 > li > ul li ul').closest('li').append('<div class="ResimsizDown2"><i class="fal fa-angle-right"></i></div>');
        $('.ResimsizDown').on('click',function (event) {
            $(this).closest('li').find('> ul').toggleClass('active');
        });
        $('.ResimsizDown2').on('click',function (event) {
            $(this).closest('li').find('> ul').toggleClass('active');
        });
        //$('.ResimsizDown2').on('click',function (event) { if ($(this).find('.fal').hasClass('fa-angle-right')) { $(this).closest('li').find('> ul').addClass('active'); $(this).closest('ul').addClass('over'); } else { $(this).closest('li').find('> ul').removeClass('active'); $(this).closest('ul').removeClass('over'); } });
        //$('.ResimsizDown').each(function (index, el) { var Down1 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down1 + '</span></span>'); });
        //$('.ResimsizDown2').each(function (index, el) { var Down2 = $(this).parent('li').find('>a').text(); $(this).closest('li').find('> ul').prepend('<span><div class="NoiBack2"><i class="fal fa-long-arrow-left"></i></div> <span>' + Down2 + '</span></span>'); });
        //$('.NoiBack2').on('click',function (event) { $(this).parent().parent().removeClass('active'); $(this).closest('.over').removeClass('over'); $('.mobilMenu .navUl > li > ul').animate({ scrollTop: 0 }, 100); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
        //$('.NoiBack').on('click',function (event) { $('.mobilMenu .navUl > li > ul').removeClass('active'); $('.menuIcerikAlan').animate({ scrollTop: 0 }, 100); });
    }
    $('.mobilMenu').after('<div class="mobilaf"></div>');
    if ($("#TavsiyeEt,#divYorumYazGiris,.divYorumYaz,.frmTelefonSiparis").length == 0) {
        $('body:not(.sepetimBody)').append('<div class="bottomHead"> <ul> <li class="homeC"> <a href="/"><i class="fal fa-home"></i><span>' + translateIt("GlobalMasterPage_Anasayfa") + '</span></a> </li> <li class="favoC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-heart"></i><span>' + translateIt("Favorilerim_Baslik") + '</span><div class="favNum"></div></a> </li> <li class="cartC"> <a href="/sepetim.aspx"><i class="fal fa-shopping-cart"></i><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></a> </li> <li class="welcC"> <a href="javascript:void(0)" onclick="GirisKontrol(0)"><i class="fal fa-user"></i><span>' + translateIt("GlobalMasterPage_MobilUyeGirisi") + '</span></a> </li> </ul> </div>');
    }
    if (siteSettings.isAuthenticated == true) { $('.welcC a').attr('href', '/hesabim.aspx'); $('.favoC a').attr('href', '/Hesabim.aspx/#/Favorilerim'); $('.welcC span').html(translateIt("GlobalMasterPage_MobilHesabim")); }
    $('#divIcerik').on('touchend', function () { $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); });
    if (windowidth < 750) {
        //$('.welcome').insertAfter('.headerContent');
        $('.CartProduct').insertAfter('.mobilMenu');
        if ($('.CartProduct span').hasClass('spanustSepetteUrunYok')) { $('.CartProduct').addClass('SepetBos'); }
    }
    $('.searchClick').on('click',function (event) { $('.breadcrumb').removeClass('zindex'); $('.breadList').removeClass('breadActive').hide(); $('.searchContent').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); $('#txtbxArama').focus(); });
    $('.welcomeOpen').on('click',function () { $('.breadcrumb').removeClass('zindex'); $('.breadList').removeClass('breadActive').hide(); $('.welcome').toggleClass('active'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.CartProduct').removeClass('animated'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('.menuBack').on('click',function () { $('.ResimliMenu1AltUl').removeClass('active'); $('.altMenu').removeClass('active'); $('.navUl > li ul').removeClass('active'); });
    $('.mobilMenuAcButton').on('click',function (event) { $('.breadcrumb').removeClass('zindex'); $('.breadList').removeClass('breadActive').hide(); $('body').addClass('overflow transform'); $('.mobilMenu').addClass('acik'); $('.mobilaf').addClass('acik').removeAttr('style');; $('.CartProduct').removeClass('animated'); $('.welcome').removeClass('active'); $('.searchContent').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
    $('body').on('click', '.headerCartBtn,.headerOrderBtn', function () { $('body').removeClass('overflow transform'); $('.CartProduct').removeClass('animated'); $('.mobilaf').removeClass('acik'); });
}
function SepetEkrani() {//Sepet ekrani
    $('.mycart').addClass('more');
    $('.navigation .navUl').wrapAll('<div></div>');
    $('.Mic').insertAfter('.navUl');
    setTimeout(function () { var wle = $('.welcome').html(); $('.welcome').html(''); $('.welcome').append('<div>' + wle + '</div>'); }, 1500);
}
function HesabimTakip() {//Siparis Takip -- Hesabim
    $('body').addClass('HesabimTakip');
}
function Iletisimaspx() {//Iletisim Sayfasi
    $('body').addClass('Iletisimaspx');
    var uyead = globalModel.member.memberName;
    var uyemail = globalModel.member.memberEMail;
    $('#mainHolder_txtbxAdSoyad').attr('value', uyead);
    $('#mainHolder_txtbxMail').attr('value', uyemail);
    $('.iletisimLeft,.iletisimRight').wrapAll('<div class="AdBan"></div>');
    $('.iletisimForm').insertAfter('.AdBan');
    $('.iletisimLeftAdres').insertAfter('.iletisimLeftFirmaAdi');
}
function UrunDetayPaylas() {
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
        } else if ($(this).attr("content") == "whatsapp") {
            if (windowidth > 768) {
                window.open(link, "toolbar=0,status=0,width=630,height=430");
            } else {
                window.location.href = "whatsapp://send?phone=905555555555&text=" + socialAppMessage;
            }
        }
    });
}
function sepetBindRefresh(res) {//Sepet kontrol
    if (typeof res.cart.products != 'undefined') {
        if (res.cart.products.length > 0) { $('.mycart').addClass('more'); $('.CartProduct').addClass('more'); $('.SepetBlock').addClass('more'); $('.headerOrderBtn').text(translateIt('SiparisTamamla_Baslik')); } else { $('.mycart').removeClass('more'); $('.CartProduct').removeClass('more'); $('.SepetBlock').removeClass('more'); }
        $('.CartProduct .SProduct li').each(function () {
            if ($(this).find('.sptAdet').length == 0) { $(this).find('a:eq(0) .SepettopAd').after('<div class="sptAdet"></div>'); }
            $(this).find('.SepettopAd span:eq(0)').wrapAll('<div class="urunAd"></div>');
            $(this).find('.SepettopAd span:eq(1)').wrapAll('<div class="varyAd"></div>');
            $(this).find('.SepetTopAdet').appendTo($(this).find('.sptAdet'));
            $(this).find('.sepetTopSatisBirimi').appendTo($(this).find('.sptAdet'));
            $(this).find('.sptAdet').appendTo($(this).find('.SepettopAd'));
        });
    }
    if ($('.welcome .useLogin').length==0 && windowidth > 767 && siteSettings.isAuthenticated == true) {UseLogin();}
    if (windowidth<768) {
    $('.mycart > a').removeAttr('href');
    if ($('.SepetUst').length==0) {
    $('.CartProduct').prepend('<div class="SepetUst"><div class="seClose"><i class="fal fa-times"></i></div><span>' + translateIt("GlobalMasterPage_Sepetim") + '</span></div>');
    }
  }
}
$(document).on('click','.mycartClick,.sepetUrunSayisi',function () { $('.breadcrumb').removeClass('zindex'); $('.breadList').removeClass('breadActive').hide(); $('.mobilMenu').removeClass('acik'); $('body').addClass('overflow transform'); $('.CartProduct').addClass('animated'); $('.mobilMenu').removeClass('acik'); $('.altMenu').removeClass('active'); $('.ResimliMenu1AltUl').removeClass('active'); $('.mobilMenu .KatMenu1 > li ul').removeClass('active'); $('.mobilMenu .navUl ul').removeClass('active'); $('.mobilMenu .lfMenuAltContent').removeClass('active'); $('.mobilAcilirMenu').html('<i class="fal fa-angle-right"></i>'); $('.searchContent').removeClass('active'); $('.welcome').removeClass('active'); $('#lang_flag_container').removeClass('selector'); });
$(document).on('click','.seClose',function () {$('.CartProduct').removeClass('animated');$('body').removeClass('overflow transform'); });
$(window).on('load', function() {
    if ($(".hesabimBolumuTutucu").length > 0) { HesabimTakip(); }
    if ($(".iletisimContent").length > 0) { Iletisimaspx(); }
});
function mobilFooter() {
    window.blockMenuHeaderScroll = false; $(window).on('touchstart', function (e) { if ($(e.target).closest('.owl-grab').length == 1) { blockMenuHeaderScroll = true; } }); $(window).on('touchend', function () { blockMenuHeaderScroll = false; }); $(window).on('touchmove', function (e) { if (blockMenuHeaderScroll) { e.preventDefault(); } });
    $('.linkler .blink > ul > li').each(function () {
        if ($(this).find('>ul').length > 0) {
            $(this).find('> span').append('<div class="ackapabtn"><i class="fal fa-plus"></i></div>');
        }
    });
    $('.linkler .blink > ul > li .ackapabtn').on('click',function () {
        if ($(this).find('.fal').hasClass('fa-plus')) {
            $('.linkler .blink > ul > li').find('> ul').slideUp('fast');
            $('.linkler .blink > ul > li .ackapabtn').html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('>ul').slideDown('fast');
            $(this).html('<i class="fal fa-minus"></i>');
        } else {
            $(this).html('<i class="fal fa-plus"></i>');
            $(this).parent().parent().find('> ul').slideUp('fast');
        }
    });

    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        var clickableElements = ".Addtobasket";
        jQuery(clickableElements).attr("style", "cursor: pointer;");
        jQuery(clickableElements).bind("touchend", function (e) {
            jQuery(this).trigger("click");
        });
    }
}
function UseLogin() {
    if (windowidth > 768) { $('.welcome').append('<div class="useLogin"> <div class="useName"><span>' + globalModel.member.memberName + '</span></div> <ul> <li class=""><a href="/Hesabim.aspx#/Siparislerim"><i class="fal fa-angle-right"></i><span>' + translateIt("Siparislerim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/Uyelik-Bilgilerim"><i class="fal fa-angle-right"></i><span>' + translateIt("Hesabim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/Favorilerim"><i class="fal fa-angle-right"></i><span>' + translateIt("Favorilerim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/AdresDefterim"><i class="fal fa-angle-right"></i><span>' + translateIt("AdresDefterim_Baslik") + '</span></a></li> <li class=""><a href="/Hesabim.aspx#/IadeTaleplerim"><i class="fal fa-angle-right"></i><span>' + translateIt("IadeTaleplerim_Baslik") + '</span></a></li> <li class=""><a class="kargomNeredeIframe control-item" data-fancybox-type="iframe" href="/kargomnerede.aspx" vspace="500"><i class="fal fa-angle-right"></i><span>' + translateIt("Siparislerim_KargomNerede") + '</span></a></li> <li class="cikisbtn"><a href="/UyeCikis.ashx" onclick="uyeCikisYap()"><i class="fal fa-angle-right"></i><span>' + translateIt("Global_CikisYap") + '</span></a></li> </ul> </div> <style type="text/css"> .useLogin { display: block !important; background: #fff; float: left; padding:0; z-index: 99999; position: absolute; top: 100%; right: 0; box-shadow: 0 0 16px -10px #000; opacity: 0; visibility: hidden;margin-left: -100px; -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; transition: all 0.3s ease; } .welcome:after { position: absolute; left: 0; right: 0; bottom: -15px; height: 15px;} .welcome:hover .useLogin { visibility: visible; opacity: 1; top: 130%; } .useLogin:before, .useLogin:after { bottom: 100%; right: 10px; border: solid transparent;height: 0; width: 0; position: absolute; pointer-events: none; } .useLogin:before { border-color: transparent; border-bottom-color: #f0f0f0; border-width: 9px; margin-left: -9px; } .useLogin:after { border-color: transparent; border-bottom-color: #fff; border-width: 8px; margin-left: -8px; right: 11px; } .useLogin ul{text-align: left;display: block;float: none;} .useLogin ul li{display: block;padding: 0;white-space: nowrap;} .useLogin ul li a{color: #000;font-size: 12px;line-height: 27px;padding: 0 15px;display: block;} .useLogin ul li a i{line-height: 27px;margin-right: 6px;font-size: 15px;font-weight: 300;display: inline-block;vertical-align:top;} .useLogin ul li.cikisbtn{background: #e6e6e6;margin-top: 10px;transition: .1s ease-in-out;}.useLogin .useName{display: block;margin-top: 10px;font-size: 12px;line-height: 27px;padding: 0 15px;font-weight:500;text-align: left;cursor: default;color:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li a:hover{color:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li.cikisbtn:hover{background:' + $('.CartProduct .headerOrderBtn').css('background-color') + ';} .useLogin ul li.cikisbtn a:hover{color: #fff;} .welcome:after {content: "";} .useLogin:before, .useLogin:after {content:"";} </style>'); }
}
function urunDetayIocn() {



    $('.RightDetail .riSingle a.riDown').html('<svg viewBox="0 0 11 1"><g transform="translate(-7 -12)"><path d="M7.5,18h10" transform="translate(0 -5.5)"/></g></svg>');
    $('.RightDetail .riSingle a.riUp').html('<svg viewBox="0 0 11 11"><g transform="translate(-7 -7)"><path d="M18,7.5v10" transform="translate(-5.5)"/><path d="M7.5,18h10" transform="translate(0 -5.5)"/></g></svg>');



    $('#divKritikStok .box1').before('<div class="boxIcon"><svg viewBox="0 0 4.996 21.16"><g transform="translate(-37.543 -13.42)"><path d="M42.2,13.42H37.878a.335.335,0,0,0-.335.335V27.941a.335.335,0,0,0,.335.335H42.2a.335.335,0,0,0,.335-.335V13.755A.335.335,0,0,0,42.2,13.42Zm-.335,14.186H38.213V14.09h3.656Z"/><path d="M42.2,61.667H37.878a.335.335,0,0,0-.335.335v4.326a.335.335,0,0,0,.335.335H42.2a.335.335,0,0,0,.335-.335V62A.335.335,0,0,0,42.2,61.667Zm-.335,4.326H38.213V62.337h3.656Z" transform="translate(0 -32.083)"/></g></svg></div>');
    $('.UTelefonlaSiparis .box1').before('<div class="boxIcon"><svg viewBox="0 0 21.143 21.183"><path d="M23.309,18.11v3.038A2.025,2.025,0,0,1,21.1,23.173a20.042,20.042,0,0,1-8.74-3.109,19.748,19.748,0,0,1-6.076-6.076,20.042,20.042,0,0,1-3.109-8.78A2.025,2.025,0,0,1,5.191,3H8.229a2.025,2.025,0,0,1,2.025,1.742,13,13,0,0,0,.709,2.846,2.025,2.025,0,0,1-.456,2.137L9.222,11.011A16.2,16.2,0,0,0,15.3,17.087L16.584,15.8a2.025,2.025,0,0,1,2.137-.456,13,13,0,0,0,2.846.709,2.025,2.025,0,0,1,1.742,2.056Z" transform="translate(-2.667 -2.5)"/></svg></div>');
    $('.UFavorilerimeEkle .box1').before('<div class="boxIcon"><svg viewBox="0 0 20.18 19.404"><path d="M18.122,3.938h-.049A5.519,5.519,0,0,0,13.465,6.46,5.519,5.519,0,0,0,8.857,3.938H8.808A5.484,5.484,0,0,0,3.375,9.419a11.808,11.808,0,0,0,2.319,6.437,40.635,40.635,0,0,0,7.771,7.485,40.635,40.635,0,0,0,7.771-7.485,11.808,11.808,0,0,0,2.319-6.437A5.484,5.484,0,0,0,18.122,3.938ZM20.14,15.056a37.206,37.206,0,0,1-6.675,6.578A37.261,37.261,0,0,1,6.79,15.051,10.465,10.465,0,0,1,4.733,9.419,4.116,4.116,0,0,1,8.818,5.3h.044a4.067,4.067,0,0,1,1.994.524A4.239,4.239,0,0,1,12.33,7.207a1.363,1.363,0,0,0,2.28,0,4.281,4.281,0,0,1,1.475-1.383A4.067,4.067,0,0,1,18.078,5.3h.044a4.116,4.116,0,0,1,4.084,4.118A10.6,10.6,0,0,1,20.14,15.056Z" transform="translate(-3.375 -3.938)"/></svg></div>');
    $('.UIstekListemeEkle .box1').before('<div class="boxIcon"><svg viewBox="0 0 26.193 20.595"><g transform="translate(-33.5 -38.598)"><path d="M42.961,53.273a.637.637,0,0,1-.454-.363.545.545,0,0,1,.454-.545l12.443-1a2.542,2.542,0,0,0,2.089-1.635l2-5.45c0-.091,0-.272-.091-.272H40.054a.454.454,0,1,1,0-.908H59.219a1.451,1.451,0,0,1,1,.454,1.36,1.36,0,0,1,.091,1.181l-2,5.45A3.451,3.451,0,0,1,55.4,52.274l-12.353,1Z" transform="translate(-0.709 -0.459)"/><path d="M45.943,60.886a2.544,2.544,0,1,1,2.543-2.547v0A2.544,2.544,0,0,1,45.943,60.886Zm0-4.178a1.635,1.635,0,1,0,1.635,1.635h0A1.635,1.635,0,0,0,45.943,56.708Z" transform="translate(-0.971 -1.695)"/><path d="M58.443,60.886A2.544,2.544,0,0,1,55.9,58.343,2.635,2.635,0,0,1,58.443,55.8a2.544,2.544,0,0,1,2.543,2.543,2.452,2.452,0,0,1-2.358,2.543Q58.536,60.89,58.443,60.886Zm0-4.178a1.635,1.635,0,1,0,1.635,1.635h0a1.635,1.635,0,0,0-1.635-1.635Z" transform="translate(-2.204 -1.696)"/><path d="M45.051,55.131a3.156,3.156,0,0,1-2.888-1.817v-.182l-.271-.636h0L37.922,39.508H33.951a.454.454,0,0,1,0-.908h4.332a.45.45,0,0,1,.451.272L42.8,52.315h0l.18.545a2.166,2.166,0,0,0,2.076,1.362h11.19a.454.454,0,0,1,0,.908Z"/></g></svg></div>');
    $('.UKarsilastirma .box1').before('<div class="boxIcon"><svg viewBox="0 0 13.262 17.691"><g transform="translate(-391 -905.499)"><path d="M16.333,11.421a.6.6,0,0,0,0,.848l2.8,2.805H8.469a.6.6,0,0,0,0,1.2H19.124l-2.8,2.805a.606.606,0,0,0,0,.848.6.6,0,0,0,.843,0l3.8-3.823h0a.672.672,0,0,0,.124-.189.572.572,0,0,0,.046-.23.6.6,0,0,0-.17-.419l-3.8-3.823A.587.587,0,0,0,16.333,11.421Z" transform="translate(383.125 894.247)"/><path d="M12.687,11.421a.6.6,0,0,1,0,.848L9.9,15.074H20.55a.6.6,0,0,1,0,1.2H9.9l2.8,2.805a.606.606,0,0,1,0,.848.6.6,0,0,1-.843,0L8.052,16.1h0a.673.673,0,0,1-.124-.189.572.572,0,0,1-.046-.23.6.6,0,0,1,.17-.419l3.8-3.823A.587.587,0,0,1,12.687,11.421Z" transform="translate(383.118 903.093)"/></g></svg></div>');
    $('.UindirimliUrun .box1').before('<div class="boxIcon"><svg viewBox="0 0 18.856 17.982"><path d="M11.928,3l2.759,5.589,6.169.9-4.464,4.348,1.054,6.143-5.518-2.9-5.518,2.9,1.054-6.143L3,9.491l6.169-.9Z" transform="translate(-2.5 -2.5)"/></svg></div>');
    $('.FiyatHaberVer .box1').before('<div class="boxIcon"><svg viewBox="0 0 27.585 27.204"><g transform="translate(-17.463 -17.896)"><path d="M45.031,34.429l-1.268-3.324,1.006-3.367a.494.494,0,0,0-.131-.481l-2.8-2.274-.831-3.455a.424.424,0,0,0-.35-.306l-3.542-.612-2.493-2.58a.4.4,0,0,0-.481-.087l-3.367,1.225-3.411-1.05a.52.52,0,0,0-.481.175L24.607,21l-3.5.831a.371.371,0,0,0-.306.35l-.612,3.455-2.58,2.449a.494.494,0,0,0-.131.481l1.268,3.324L17.741,35.26a.494.494,0,0,0,.131.481l2.8,2.274L21.5,41.47a.424.424,0,0,0,.35.306l3.542.612,2.493,2.58a.4.4,0,0,0,.306.131h.175l3.367-1.225,3.411,1.05a.52.52,0,0,0,.481-.175L37.9,41.995l3.5-.831a.371.371,0,0,0,.306-.35l.612-3.455L44.9,34.91A.494.494,0,0,0,45.031,34.429ZM41.62,36.834a.378.378,0,0,0-.131.262l-.569,3.367-3.367.787a.24.24,0,0,0-.219.131l-2.187,2.624L31.824,43h-.262l-3.236,1.137-2.405-2.449a.241.241,0,0,0-.219-.131l-3.411-.569-.831-3.324a.241.241,0,0,0-.131-.219L18.66,35.26l.962-3.28a.279.279,0,0,0,0-.262L18.4,28.525l2.493-2.318a.378.378,0,0,0,.131-.262l.569-3.367,3.367-.787a.24.24,0,0,0,.219-.131l2.187-2.624,3.324,1.006h.262L34.185,18.9l2.405,2.449a.241.241,0,0,0,.219.131l3.411.569.831,3.324a.241.241,0,0,0,.131.219l2.668,2.187-.962,3.28a.279.279,0,0,0,0,.262l1.225,3.193Z"/><path d="M38.749,32.336a.443.443,0,0,0-.743.481L46.8,46.681a.459.459,0,0,0,.394.219l.219-.087a.43.43,0,0,0,.131-.612Z" transform="translate(-11.517 -8.01)"/><path d="M33.949,47.3A3.149,3.149,0,1,0,37.1,50.449,3.164,3.164,0,0,0,33.949,47.3Zm0,5.423a2.286,2.286,0,0,1-2.274-2.274,2.274,2.274,0,0,1,4.548,0A2.286,2.286,0,0,1,33.949,52.723Z" transform="translate(-7.505 -16.545)"/><path d="M55.949,36.3A3.149,3.149,0,1,0,59.1,39.449,3.164,3.164,0,0,0,55.949,36.3Zm0,5.423a2.286,2.286,0,0,1-2.274-2.274,2.274,2.274,0,1,1,4.548,0A2.286,2.286,0,0,1,55.949,41.723Z" transform="translate(-19.883 -10.355)"/></g></svg></div>');
    $('.UrunKargoBedava .box1').before('<div class="boxIcon"><svg viewBox="0 0 27.34 21.359"><g transform="translate(-2 -9)"><path d="M52.971,36.961H51.262a.427.427,0,0,1,0-.854h1.282V29.836l-1.632-2.328a3.845,3.845,0,0,0-3.165-1.653H44.854v10.68a.427.427,0,0,1-.854,0V25.427A.427.427,0,0,1,44.427,25h3.319a4.7,4.7,0,0,1,3.845,2.016L53.3,29.456a.427.427,0,0,1,.1.243v6.835A.427.427,0,0,1,52.971,36.961Z" transform="translate(-24.058 -9.165)"/><path d="M4.136,36.961H2.427A.427.427,0,0,1,2,36.534V25.427a.427.427,0,0,1,.854,0v10.68H4.136a.427.427,0,0,1,0,.854Z" transform="translate(0 -9.165)"/><path d="M31.243,51.854H18.427a.427.427,0,0,1,0-.854H31.243a.427.427,0,0,1,0,.854Z" transform="translate(-9.165 -24.058)"/><path d="M20.369,27.8H9.262a.427.427,0,0,1,0-.854h10.68V9.854H2.854V26.942H4.136a.427.427,0,0,1,0,.854H2.427A.427.427,0,0,1,2,27.369V9.427A.427.427,0,0,1,2.427,9H20.369a.427.427,0,0,1,.427.427V27.369A.427.427,0,0,1,20.369,27.8Z"/><path d="M8.99,50.981a2.99,2.99,0,1,1,2.99-2.99A2.99,2.99,0,0,1,8.99,50.981Zm0-5.126a2.136,2.136,0,1,0,2.136,2.136A2.136,2.136,0,0,0,8.99,45.854Z" transform="translate(-2.291 -20.621)"/><path d="M50.99,50.981a2.99,2.99,0,1,1,2.99-2.99A2.99,2.99,0,0,1,50.99,50.981Zm0-5.126a2.136,2.136,0,1,0,2.136,2.136A2.136,2.136,0,0,0,50.99,45.854Z" transform="translate(-26.349 -20.621)"/><path d="M53.553,35.272H48.427A.427.427,0,0,1,48,34.845V31.427A.427.427,0,0,1,48.427,31h3.417a.427.427,0,0,1,.38.235l1.709,3.417a.427.427,0,0,1-.38.619Zm-4.7-.854h4.007L51.58,31.854H48.854Z" transform="translate(-26.349 -12.602)"/></g></svg></div>');
    setTimeout(function () {
        $('.UGelinceHaberVer .box1').before('<div class="boxIcon"><svg viewBox="0 0 15.863 19.856"><g transform="translate(-6.775 -3.93)"><path d="M18.7,28.336a.643.643,0,0,0-.63.506,1.244,1.244,0,0,1-.248.541.938.938,0,0,1-.8.293.954.954,0,0,1-.8-.293,1.244,1.244,0,0,1-.248-.541.643.643,0,0,0-.63-.506h0a.647.647,0,0,0-.63.789,2.217,2.217,0,0,0,2.308,1.841,2.213,2.213,0,0,0,2.308-1.841.65.65,0,0,0-.63-.789Z" transform="translate(-2.332 -7.18)"/><path d="M22.439,18.635c-.764-1.007-2.268-1.6-2.268-6.109,0-4.63-2.045-6.491-3.95-6.938-.179-.045-.308-.1-.308-.293V5.151A1.217,1.217,0,0,0,14.722,3.93h-.03A1.217,1.217,0,0,0,13.5,5.151V5.3c0,.184-.129.248-.308.293-1.911.452-3.95,2.308-3.95,6.938,0,4.511-1.5,5.1-2.268,6.109a.985.985,0,0,0,.789,1.578h13.9A.986.986,0,0,0,22.439,18.635Zm-1.935.288H8.931a.218.218,0,0,1-.164-.362A6.012,6.012,0,0,0,9.809,16.9a11.246,11.246,0,0,0,.71-4.377,7.611,7.611,0,0,1,1.037-4.308,3.184,3.184,0,0,1,1.921-1.37,1.739,1.739,0,0,0,.923-.521.392.392,0,0,1,.591-.01,1.8,1.8,0,0,0,.933.531,3.184,3.184,0,0,1,1.921,1.37,7.611,7.611,0,0,1,1.037,4.308,11.246,11.246,0,0,0,.71,4.377,6.081,6.081,0,0,0,1.067,1.682A.205.205,0,0,1,20.5,18.923Z"/></g></svg></div>');
    }, 200)



    $('div.YorumYazbtnContent > a').prepend('<div class="boxIcon"><svg viewBox="0 0 16.994 16.991"><path d="M22.242,6.82a2.606,2.606,0,0,0-3.682,0l-.612.612L7.933,17.446v.01a.253.253,0,0,0-.05.077.052.052,0,0,0,0,.015h0L6.019,22.662a.294.294,0,0,0,.07.307.285.285,0,0,0,.207.079.292.292,0,0,0,.093-.017l5.11-1.839h.015a.253.253,0,0,0,.077-.05h0L21.627,11.107l.614-.616A2.61,2.61,0,0,0,22.242,6.82ZM18.15,8.044l1.221,1.221-9.6,9.6L8.549,17.639ZM7.16,21.225a3.029,3.029,0,0,1,.665.665l-1.051.386Zm1.229.471a3.741,3.741,0,0,0-.456-.58,3.639,3.639,0,0,0-.58-.456l.9-2.481,1.308,1.308L10.87,20.8ZM11.411,20.5l-1.227-1.221,9.6-9.6L21.005,10.9ZM21.826,10.079l-.406.412L19.993,9.063,18.559,7.629l.406-.406a2.021,2.021,0,0,1,2.861,2.855Z" transform="translate(-6.001 -6.058)"/></svg></div>');
    $('div.TavsiyeEtBtnContent > a').prepend('<div class="boxIcon"><svg viewBox="0 0 22.635 20"><g transform="translate(-0.081 -5.859)"><g transform="translate(0.081 5.859)"><g transform="translate(0 0)"><path d="M22.716,15.54a2.781,2.781,0,0,1-.138.424c-.127.249-.279.487-.41.735a.315.315,0,0,0-.05.227,2.244,2.244,0,0,1-.372,2.292.245.245,0,0,0-.052.277,2.2,2.2,0,0,1-.295,2.14.537.537,0,0,0-.107.492,2.4,2.4,0,0,1-.567,2.356,2.079,2.079,0,0,1-1.134.6,6.549,6.549,0,0,1-1.163.125H9.813a2.639,2.639,0,0,1-1.453-.474.544.544,0,0,0-.431-.109,3.1,3.1,0,0,1-.034.415.907.907,0,0,1-.832.814,1.789,1.789,0,0,1-.2,0H1.132a.97.97,0,0,1-1.047-.888c0-.021,0-.041,0-.062V15.939a1.011,1.011,0,0,1,1.061-1.075H7.617a3.625,3.625,0,0,1,.453.086.308.308,0,0,0,.227-.027,7.034,7.034,0,0,0,.66-.737,30.159,30.159,0,0,0,2.353-3.866,1.392,1.392,0,0,0,.17-.723c-.029-.746-.029-1.494-.057-2.24a1.238,1.238,0,0,1,.655-1.179,2.41,2.41,0,0,1,2.623.145,1.5,1.5,0,0,1,.4.6c.279.68.544,1.376.78,2.077a4.491,4.491,0,0,1,.1,2.353c-.118.6-.2,1.2-.306,1.8-.034.2-.027.227.181.227h4.9a2.1,2.1,0,0,1,1.134.27,1.712,1.712,0,0,1,.755,1.079c.018.07.041.138.061.206v.614Zm-8.209-1.224c.177-1.05.356-2.077.519-3.1a4.569,4.569,0,0,0,.1-1.106,9.085,9.085,0,0,0-.884-2.793.68.68,0,0,0-.506-.453,1.533,1.533,0,0,0-1.134.1.406.406,0,0,0-.247.413q.045,1.238.045,2.476a1.684,1.684,0,0,1-.1.578,3.969,3.969,0,0,1-.331.68c-.68,1.113-1.36,2.231-2.059,3.33A4.266,4.266,0,0,1,8.7,15.8c-.322.209-.646.422-.959.642a.307.307,0,0,0-.125.209v6.724c0,.134.057.147.172.161a3.267,3.267,0,0,1,.644.134,1.778,1.778,0,0,1,.4.243,2,2,0,0,0,1.156.347h8.534a3.887,3.887,0,0,0,.506-.029,1.479,1.479,0,0,0,1.047-.605,1.037,1.037,0,0,0,.059-1.274,2.762,2.762,0,0,0-.524-.4.406.406,0,0,1,.145-.156,1.467,1.467,0,0,0,1.057-1.018.918.918,0,0,0-.29-1.054,3.77,3.77,0,0,0-.508-.279.652.652,0,0,1,.2-.195,1.4,1.4,0,0,0,.862-.614,1,1,0,0,0-.453-1.619.2.2,0,0,1-.118-.122.168.168,0,0,1,.145-.188h0a1.41,1.41,0,0,0,1.081-1.217.907.907,0,0,0-.494-1.045,1.661,1.661,0,0,0-.63-.118h-6.1Zm-7.738,1.51c-.073,0-.127-.011-.179-.011H1.221a.156.156,0,0,0-.193.195v8.713a.172.172,0,0,0,.211.213h5.3c.227,0,.227,0,.227-.238V15.835Z" transform="translate(-0.081 -5.859)"/></g></g></g></svg></div>');
    $('.ProductIcon2 > div.hidden-phone > a').prepend('<div class="boxIcon"><svg viewBox="0 0 19.856 19.856"><g transform="translate(-2.5 -2.5)"><path d="M9,9.6V3H20.313V9.6" transform="translate(-2.229)"/><path d="M6.771,21.985H4.886A1.886,1.886,0,0,1,3,20.1V15.386A1.886,1.886,0,0,1,4.886,13.5H19.97a1.886,1.886,0,0,1,1.886,1.886V20.1a1.886,1.886,0,0,1-1.886,1.886H18.084" transform="translate(0 -3.901)"/><path d="M9,21H20.313v7.542H9Z" transform="translate(-2.229 -6.687)"/></g></svg></div>');



    $('.UGelinceHaberVer').on('click',function () {
        setTimeout(function () {
            $('.UGelinceHaberVer .box1').before('<div class="boxIcon"><svg viewBox="0 0 15.863 19.856"><g transform="translate(-6.775 -3.93)"><path d="M18.7,28.336a.643.643,0,0,0-.63.506,1.244,1.244,0,0,1-.248.541.938.938,0,0,1-.8.293.954.954,0,0,1-.8-.293,1.244,1.244,0,0,1-.248-.541.643.643,0,0,0-.63-.506h0a.647.647,0,0,0-.63.789,2.217,2.217,0,0,0,2.308,1.841,2.213,2.213,0,0,0,2.308-1.841.65.65,0,0,0-.63-.789Z" transform="translate(-2.332 -7.18)"/><path d="M22.439,18.635c-.764-1.007-2.268-1.6-2.268-6.109,0-4.63-2.045-6.491-3.95-6.938-.179-.045-.308-.1-.308-.293V5.151A1.217,1.217,0,0,0,14.722,3.93h-.03A1.217,1.217,0,0,0,13.5,5.151V5.3c0,.184-.129.248-.308.293-1.911.452-3.95,2.308-3.95,6.938,0,4.511-1.5,5.1-2.268,6.109a.985.985,0,0,0,.789,1.578h13.9A.986.986,0,0,0,22.439,18.635Zm-1.935.288H8.931a.218.218,0,0,1-.164-.362A6.012,6.012,0,0,0,9.809,16.9a11.246,11.246,0,0,0,.71-4.377,7.611,7.611,0,0,1,1.037-4.308,3.184,3.184,0,0,1,1.921-1.37,1.739,1.739,0,0,0,.923-.521.392.392,0,0,1,.591-.01,1.8,1.8,0,0,0,.933.531,3.184,3.184,0,0,1,1.921,1.37,7.611,7.611,0,0,1,1.037,4.308,11.246,11.246,0,0,0,.71,4.377,6.081,6.081,0,0,0,1.067,1.682A.205.205,0,0,1,20.5,18.923Z"/></g></svg></div>');
        }, 200);
    });
    FavoriIslemCallback();
}

function FavoriIslemCallback() {
    if (globalModel.pageType == 'productdetail') {//urundetaysayfasi
        setTimeout(function () {
            if ($('.UFavorilerimeEkle #aFavoriEkleBtn').length > 0) {
                $('.UFavorilerimeEkle .boxIcon').html('<svg viewBox="0 0 20.18 19.404"><path d="M18.122,3.938h-.049A5.519,5.519,0,0,0,13.465,6.46,5.519,5.519,0,0,0,8.857,3.938H8.808A5.484,5.484,0,0,0,3.375,9.419a11.808,11.808,0,0,0,2.319,6.437,40.635,40.635,0,0,0,7.771,7.485,40.635,40.635,0,0,0,7.771-7.485,11.808,11.808,0,0,0,2.319-6.437A5.484,5.484,0,0,0,18.122,3.938ZM20.14,15.056a37.206,37.206,0,0,1-6.675,6.578A37.261,37.261,0,0,1,6.79,15.051,10.465,10.465,0,0,1,4.733,9.419,4.116,4.116,0,0,1,8.818,5.3h.044a4.067,4.067,0,0,1,1.994.524A4.239,4.239,0,0,1,12.33,7.207a1.363,1.363,0,0,0,2.28,0,4.281,4.281,0,0,1,1.475-1.383A4.067,4.067,0,0,1,18.078,5.3h.044a4.116,4.116,0,0,1,4.084,4.118A10.6,10.6,0,0,1,20.14,15.056Z" transform="translate(-3.375 -3.938)"/></svg>');
            } else {
                $('.UFavorilerimeEkle .boxIcon').html('<svg viewBox="0 0 20.18 19.404"><path d="M18.122,3.938h-.049A5.519,5.519,0,0,0,13.465,6.46,5.519,5.519,0,0,0,8.857,3.938H8.808A5.484,5.484,0,0,0,3.375,9.419a11.808,11.808,0,0,0,2.319,6.437,40.635,40.635,0,0,0,7.771,7.485,40.635,40.635,0,0,0,7.771-7.485,11.808,11.808,0,0,0,2.319-6.437A5.484,5.484,0,0,0,18.122,3.938Z" transform="translate(-3.375 -3.938)"/></svg>');
            }
        }, 10)
    }
}

function anasayfaTab() {
    $('#anasayfatab .anasayfaTabAlt').first().addClass('active'); $('#anasayfatab ._tabHead li').first().addClass('_tabHead_active'); $('#anasayfatab ._tabHead li').on('click',function (event) { $('#anasayfatab ._tabHead li').removeClass('_tabHead_active'); $(this).addClass('_tabHead_active'); var secili = $(this).index(); $('#anasayfatab .anasayfaTabAlt').removeClass('active'); $('#anasayfatab .anasayfaTabAlt').eq(secili).addClass('active'); });
}
function HeaderFixed() {
    var sepetsayfakontrol = $("body").find(".BasketPage").length;
    if (sepetsayfakontrol == 0) {
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass('myfixed');
            }
            else {
                $('#header').removeClass('myfixed');
            }
        });
    }
}

//Beden Tablosu
function BedenTablosu() {
    $('#divUrunEkSecenek').after('<div class="bedenT"><a class="fancybox bedenTablosu" href="#bedenTablosu"><i class="far fa-cut"></i> Beden Tablosu</a></div>');
    if($(".breadcrumb li:nth-child(2) > a > span").text() == "Erkek"){
        $(".PriceList").append("<div style='display:none;' id='bedenTablosu'><img class='img-responsive' src='/Uploads/EditorUploads/revize-machinist-beden-erkek.png' /></div>");
      }
      else if($(".breadcrumb li:nth-child(2) > a > span").text() == "Kadın"){
        $(".PriceList").append("<div style='display:none;' id='bedenTablosu'><img class='img-responsive' src='/Uploads/EditorUploads/revize-machinist-beden-kadin.png' /></div>");
      }
      
    //var tt = $('#divUrunEkSecenek .eksecenekLine.kutuluvaryasyon .right_line').width();
    //$('.bedenTablosu').css('left',''+tt+'px');
    $(".fancybox").fancybox();
}
