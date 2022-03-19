// Tüm Sayfalar - Header 

function waitForElement(querySelector, timeout = 5000) {
    return new Promise((resolve, reject) => {
        var timer = false;
        if (document.querySelectorAll(querySelector).length) return resolve();
        const observer = new MutationObserver((mutations) => {

            for (var i = 0; i < mutations.length; i++) {
                for (var j = 0; j < mutations[i].addedNodes.length; j++) {
                    // mutations[i].addedNodes[j].nodeType === 1
                    // mutations[i].addedNodes[j].tagName === 'DIV'
                    if(
						mutations[i].addedNodes[j].nodeName != "#text" &&
            (
              (
						    mutations[i].addedNodes[j].className &&
						    mutations[i].addedNodes[j].className.split(" ").includes( // String(.className), .classList
                querySelector.split(" ")[querySelector.split(" ").length - 1].replace(/:(.*)/, "").replace(/(.*)[#|\.]/, "") // (.*$)
              )
              ||
              // "body" gibi yerleri seçebilmek için eklendi:
              mutations[i].addedNodes[j].nodeName == querySelector.split(" ")[querySelector.split(" ").length - 1].replace(/:(.*)/, "").replace(/(.*)[#|\.]/, "").toUpperCase()
            )
                        )
                    ){
                        if (document.querySelectorAll(querySelector).length) {
                            observer.disconnect();
                            if (timer !== false) clearTimeout(timer);
                            return resolve(mutations[i].addedNodes[j]);
                        }
                    }
                }
            }

        });
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
        });
        if (timeout)
            timer = setTimeout(() => {
                observer.disconnect();
                reject();
            }, timeout);
    });
}


document.addEventListener("DOMContentLoaded", function(){
  document.querySelector(".mobilMenuAcButton").addEventListener("click", function(){
    if(!document.querySelector(".mobilMenu")){
      setTimeout(function(){
        divTopProductSearchElement = document.querySelector("#divTopProductSearch.searchContent");
        divTopProductSearchElement.style.display = "block";
          document.querySelector(".mobilMenu .menuUstBolum").append(divTopProductSearchElement);
      }, 1);
    }
  });
});

// /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
/* Menüye favori ikonu ekle */
var ikon_favoriObserveElement;

if(window.innerWidth <= 768){ // isMobileDevice() (ticimax.structureV2.min.js)
  ikon_favoriObserveElement = ".headerContent .mycartClick";
}else{
  ikon_favoriObserveElement = ".icons .arabtn";
}

waitForElement(ikon_favoriObserveElement)
.then(function (element) {
  element.insertAdjacentHTML("beforebegin", `
    <div class="ikon_favori" style="margin: 0 0 0 25px;float: right;font-size: 18px;">
    <a href="/Hesabim#/Favorilerim"><i class="fal fa-heart"></i></a>
    </div>
  `);
});
/**/


/* Site Header */



// Site Footer


 
//  Tüm Sayfalar 

