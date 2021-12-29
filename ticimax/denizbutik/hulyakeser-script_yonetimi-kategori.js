        $(document).ready(function(){
        setTimeout(function(){
          if($(window).width() > 1200){
          $(".brandlistselection .sortingContent li.appliedFilter > span").appendTo(".brandlistselection .sortingContent")
        
             var kategoriAd = $(".categoryTitleText .breadcrumb li:last-child span").text()
             console.log(kategoriAd)
       $("#divCenterBlock").before('<h1 class=KategoriTitle> Test </h1>')
                $(".KategoriTitle").text(kategoriAd)
          }
          else{
                     var kategoriAd = $(".categoryTitleText .breadcrumb li:last-child span").text()
             $("#divCenterBlock").before('<h1 class=KategoriTitle> Test </h1>')
                $(".KategoriTitle").text(kategoriAd)
                      $(".appliedFilter.FiltrelemeUrunAdet > span").appendTo(".KategoriTitle")
          }
      }, 300);
       
        })