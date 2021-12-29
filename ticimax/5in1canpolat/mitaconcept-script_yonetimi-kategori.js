          $(document).ready(function(){
              if($(window).width() > 1200){
        $("#divSayfalamaUst").append('<div class="newFiltre">+ FİLTRELE </div>');
          $("#divSayfalamaUst .newFiltre").on("click", function () {
                        $("#divLeftBlock").css("display", "inline-block");
                });
        $("#divIcerik #divLeftBlock").append('<dvi class="filtreKapat">X</div>')
        
        $("body #divLeftBlock .filtreKapat").on("click", function(){
        
          $("body #divLeftBlock").css("display", "none")
        })
    }   
    else{
    $(".categoryTitle .mobilFilterBtn").text("+ FİLTRELEME")
    }
            var kategoriAd = $(".categoryTitleText .breadcrumb li:last-child span").text()
                  $(".categoryTitleText .breadcrumb").before('<h1 class=KategoriTitle> Test </h1>')
                  $("#divIcerik .KategoriTitle").text(kategoriAd)})