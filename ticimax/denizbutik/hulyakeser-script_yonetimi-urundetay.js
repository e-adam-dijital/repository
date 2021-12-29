     $(document).ready(function(){
     if($(window).width() > 1200){
     $("#divIcerik").before('<div class="divIcerikContainer"> </div>');
         $("#divIcerik").appendTo(".divIcerikContainer");
        $(".RightDetail").append('<div class= "bilgiContainer">  </div>');
         $("#divUrunOzellikAlani").appendTo(".bilgiContainer");
               $(".leftImage .gallery-container").after(`<div class="PhoneAction">
  <div class="item">
  <div class="pCode">Ürün Kodu<span></span></div>
  </div>
  <div class="item PhoneArea"><a class="wp" href="https://api.whatsapp.com/send?phone=905386683486&text=Sipariş verme hakkında destek almak istiyorum."><span class="dnz-3"></span>
  <div>Whatsapp ile Sipariş</div>
  </a> <a class="phone" href="tel:+905386683486"> <span class="dnz-1"></span>
  <div>Telefon ile Sipariş</div>
  </a></div>
  </div>
  
<div class="Features" style="float: left;">
<div class="item">
<span class="Icon hulyaf-1">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/guvenli-alisveris.jpg">
</span>
<p>Güvenli Alışveriş</p>
</div>
<div class="item">
<span class="Icon hulyaf-2">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/hizli-gonderim.jpg">
</span>
<p>Hızlı Gönderim</p>
</div>
<div class="item">
<span class="Icon hulyaf-3">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/kapida-odeme.jpg">
</span>
<p>Kapıda Ödeme</p>
</div>
<div class="item">
<span class="Icon hulyaf-4">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/taksit-imkani.jpg">
</span>
<p>Taksit İmkanı</p>
</div>
</div>
`);
$(".leftImage .PhoneAction .pCode >span").text(productDetailModel.productId)
     }
     else{
     $(".ProductDetail .TopDet").after(`<div class="PhoneAction">
  <div class="item">
  <div class="pCode">Ürün Kodu<span></span></div>
  <p>Bu ürünün siparişini sizin yerinize Müşteri Hizmetleri veya WhatsApp ekibimizin oluşturmasını isterseniz yukarıda yazan Ürün Kodu'nu aşağıdaki butonlara tıkladıktan sonra ekibimizle görüştüğünüzde paylaşabilirsiniz.</p>
  </div>
  <div class="item PhoneArea"><a class="wp" href="https://api.whatsapp.com/send?phone=905386683486&text=Sipariş verme hakkında destek almak istiyorum."><span class="dnz-3"></span>
  <div>Whatsapp ile Sipariş</div>
  </a> <a class="phone" href="tel:+905386683486"> <span class="dnz-1"></span>
  <div>Telefon ile Sipariş</div>
  </a></div>
  </div>
  
<div class="Features" style="float: left;">
<div class="item">
<span class="Icon hulyaf-1">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/guvenli-alisveris.jpg">
</span>
<p>Güvenli Alışveriş</p>
</div>
<div class="item">
<span class="Icon hulyaf-2">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/hizli-gonderim.jpg">
</span>
<p>Hızlı Gönderim</p>
</div>
<div class="item">
<span class="Icon hulyaf-3">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/kapida-odeme.jpg">
</span>
<p>Kapıda Ödeme</p>
</div>
<div class="item">
<span class="Icon hulyaf-4">
<img src="https://www.hulyakeser.com/Uploads/EditorUploads/taksit-imkani.jpg">
</span>
<p>Taksit İmkanı</p>
</div>
</div>
  `);
$(".PhoneAction .pCode >span").text(productDetailModel.productId)

     }

   })
   
   
  $(document).ready(function(){
  var code = "<div class='product-day-cargo' style=''><i class='fa fa-truck'></i>Siparişiniz 24 saat içinde kargoda</div>"
    $('.BasketBtn').after(code);
  
    var a=0;
  	setInterval(function() {
      if(a == 0){
        $(".product-day-cargo").css({ 'color': '#D62828'});
        a = a+1;
      }
      else{
        $(".product-day-cargo").css({ 'color': 'black'});
        a=0;
      }
   
	}, 1000);

  
  	
});
  

  $(document).ready(function(){
  

  var productName = $(".ProductName span").text();
  if(productName.indexOf("Şal") != -1){
  
    $(".left_line").html("Metre");
  }
  	
});