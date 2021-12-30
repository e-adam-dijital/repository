$(document).ready(() => {
    setTimeout(function(){
  $(".product_social_icon_wrapper #footerSocialCustom a:last-child").attr("href", "https://api.whatsapp.com/send?phone=90&amp;text=Sipari%C5%9F%20vermek%20istiyorum")
}, 300);

	$(".footer-whatsapp-fix a").attr("href", "https://api.whatsapp.com/send?phone=90&amp;text=Sipari%C5%9F%20vermek%20istiyorum")

	
	$(".RightDetail .TopList").prepend($(".categoryTitle .breadcrumb"));

	var UFavorilerimeEkle = $(".UFavorilerimeEkle");

	$(UFavorilerimeEkle).remove();

	$(".PriceList").append($(UFavorilerimeEkle));
	
	setTimeout(() => {
		$(".MiddleList").append($("#IlgiliUrunDiv"));
	}, 1);
	
	$(".product_social_icon_wrapper ul").remove();
	$(".product_social_icon_wrapper").append(
		'<div id="footerSocialCustom" style="float: unset;">'
		+ '<div>'
		+ '<a href="https://www.instagram.com/" target="_blank"><span><img src="/Uploads/Images/instagram.png"></span></a>'
		+ '<a href="https://www.facebook.com/" target="_blank"><span><img src="/Uploads/Images/facebook-app-symbol.png"></span></a>'
		+ '<a href="https://api.whatsapp.com/send?phone=+90&text=Sipari%C5%9F%20vermek%20istiyorum." target="_blank"><span><img src="/Uploads/Images/whatsapp.png"></span></a>'
		+ '</div>'
		+ '</div>');

	if($(".eksecenekLine.selectvaryasyon").length === 0){
	  $("#divSatinAl").css({"position":"absolute","width":"100%"});
	}
	
	$("#IlgiliUrunDiv .JKatAdi .satir1").text("Renk Seçenekleri:");

});


$(window).load(() => {

	if($(window).width() <= 1199) {
	
		setTimeout(() => {
			$(".TabOzellikler").addClass("active");
		}, 100);
		
	}

});


$(document).ready(function () {
	$(".leftImage .owl-stage-outer .owl-item:nth-child(1) a #vdMobileUrunVideo").attr("poster", "");
	$(".leftImage .owl-stage-outer .owl-item:nth-child(1) a #vdMobileUrunVideo").attr("autoplay", "autoplay");
});