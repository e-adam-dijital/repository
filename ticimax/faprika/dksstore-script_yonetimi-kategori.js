    $(document).ready(function () {
        if ($(window).width() > 1200) {
            $("#divIcerik").before('<div class="divIcerikContainer"> </div>');
            $("#divIcerik").appendTo(".divIcerikContainer");
            var kategoriAd = $(".categoryTitleText .breadcrumb li:last-child span").text()
            $(".categoryTitleText .breadcrumb").before('<h1 class=KategoriTitle> Test </h1>')
            $("#divIcerik .KategoriTitle").text(kategoriAd)
        }
    });
	
	
    $(document).ready(function(){
       
    if($(window).width() < 768){
  var lastScrollTop = 0;
  $(".categoryTitle .Block_item .button.mobilFilterBtn").on("click", function(){
            $(".categoryTitle").css("position", "unset")
  })
  
  window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st < lastScrollTop && st > 1 && $(".categoryTitle .Block_item").hasClass("active") == false){
  
     $(".categoryTitle").css("position", "sticky")
  
   } else if(st >= lastScrollTop && st > 1) {
      $(".categoryTitle").css("position", "unset")
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false);
  }
    })
	
	
    if($(window).width() > 1200){
         let mList = document.getElementById('ProductPageProductList'),
  options = {
  childList: true
  },
  observer = new MutationObserver(mCallback);
  
  function mCallback(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
  $(".ProductListContent #ProductPageProductList > div").removeClass("col-lg-4 col-md-4 col-sm-6 col-xs-6");
  $(".ProductListContent #ProductPageProductList > div").addClass("col-4")
    }
  }
  }
  
  observer.observe(mList, options);
    }
