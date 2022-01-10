// Anasayfa

          var html = $('<div class="storyMainCont" id="story">'+
              '<div class="slideLeftBTN">'+
              '<img class="slideLeftBTNimg" src="https://www.oksit.com.tr/Uploads/Slider/-10.jpg?t=20210701133805" >'+
              '</div>'+
              '<div class="hiza">'+
              '<div class="storyCont">'+
              '</div>'+
              '</div>'+
              '<div class="slideRightBTN">'+
              '<img class="slideRightBTNimg" src="https://www.oksit.com.tr/Uploads/Slider/-11.jpg?t=20210701133811" >'+
              '</div>'+
              '</div>');
          $("#mainHolder_divDesign > section:first-child").after(html);
      
          $(".slideRightBTN").on("click",function(){
              var aaRight = document.querySelector("#story > div.hiza");
              aaRight.scrollLeft += 1000;
              $('.slideLeftBTNimg').css({"opacity":"1","transitionDuration":"0.5s"})
      
              var strSyi = document.querySelectorAll("div.storyCont > a.linkstr");
              var totalWidth = strSyi.length * 100;
              var getScrollWidth = totalWidth - 1000;
      
              setTimeout(function () {
                  if (aaRight.scrollLeft == getScrollWidth) {
                      $('.slideRightBTNimg').css({"opacity":"0","transitionDuration":"0.5s"})
                  }
              }, 650);
      
          });
      
          $(".slideLeftBTN").on("click",function(){
              var aaLeft = document.querySelector("#story > div.hiza");
              aaLeft.scrollLeft -= 1000;
              $('.slideRightBTNimg').css({"opacity":"1","transitionDuration":"0.5s"})
      
              setTimeout(function () {
                  if (aaLeft.scrollLeft == 0) {
                      $('.slideLeftBTNimg').css({"opacity":"0","transitionDuration":"0.5s"})
                  }
      
              }, 650);
      
      
          })
      
          // Variables
      
          var Json = [
              {"Name":"Çok Satanlar","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-18.gif?t=20210908125356","Url":"/cok-satanlar"},  
              {"Name":"Erkek Sweat","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-22.jpg?t=20210908125421","Url":"/sweatshirt"},
              {"Name":"Kadın Triko","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-26.jpg?t=20210908125448","Url":"/triko"},
              {"Name":"Erkek Pantolon","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-21.jpg?t=20210908125415","Url":"/pantolon"},
              {"Name":"Kadın Tayt","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-25.jpg?t=20210908125441","Url":"/tayt"},
              {"Name":"Kadın Eşofman","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-24.jpg?t=20210908125434","Url":"/esofman1"},
              {"Name":"Erkek Eşofman","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-20.jpg?t=20210908125409","Url":"/esofman"},
              {"Name":"Erkek Ayakkabı","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-19.jpg?t=20210908125402","Url":"/erkek-ayakkabi"},
              {"Name":"Kadın Ayakkabı","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-23.jpg?t=20210908125428","Url":"/kadin-ayakkabi"},
              {"Name":"Çocuk Ayakkabı","PictureUrl":"https://www.oksit.com.tr/Uploads/Slider/-17.jpg?t=20210908125351","Url":"/cocuk-ayakkabi"} ];
      
      
          // Slide Array
          var stories = new Array();
          stories = Json;
      
          // Each slide items in story
          $.each(stories, function (index, picture) {
      
              var storyItem = $('<a href="'+picture.Url+'" class="linkstr"><div class="storyRing"><div class="colorRing"><img class="storyimg" src="'+picture.PictureUrl+'" alt="'+picture.Name+'"/></div><div class="storyText">'+picture.Name+'</div></div></a>');
      
              $(".storyCont").append(storyItem);
          });
        
    
      $(document).ready(function(){
        setTimeout(function(){  
          $(".ulUrunSlider .owl-stage .owl-item:nth-child(1) .productIcon").append(`<div class="ozelAlan1 kampanyaYazisi" style="font-size: 20px;"><span>Sepette <span>%50</span> İndirim</span> <span>₺69,90</span></div>`)
          $(".ulUrunSlider .owl-stage .owl-item:nth-child(2) .productIcon").append(`<div class="ozelAlan1 kampanyaYazisi" style="font-size: 20px;"><span>Sepette <span>%50</span> İndirim</span> <span>₺99,90</span></div>`)
          $(".ulUrunSlider .owl-stage .owl-item:nth-child(3) .productIcon").append(`<div class="ozelAlan1 kampanyaYazisi" style="font-size: 20px;"><span>Sepette <span>%50</span> İndirim</span> <span>₺159,90</span></div>`)
          $(".ulUrunSlider .owl-stage .owl-item:nth-child(4) .productIcon").append(`<div class="ozelAlan1 kampanyaYazisi" style="font-size: 20px;"><span>Sepette <span>%50</span> İndirim</span> <span>₺99,90</span></div>`)
          $(".ulUrunSlider .owl-stage .owl-item:nth-child(5) .productIcon").append(`<div class="ozelAlan1 kampanyaYazisi" style="font-size: 20px;"><span>Sepette <span>%50</span> İndirim</span> <span>₺69,90</span></div>`)
        }, 300);
        })