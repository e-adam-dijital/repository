    document.addEventListener("DOMContentLoaded", () => {
      /* observerImages işleminin onload alternatihi: */
      var divThumbListImage;
      var divThumbListDataZoomImage;
      var divThumbListImages = document.querySelectorAll("#divThumbList img"); //.SmallImages img
    
      divThumbListImages.forEach((element) => {
        divThumbListImage = element.getAttribute("src").replace("/thumb","/buyuk");
        element.setAttribute("src", divThumbListImage) ;
        
        divThumbListDataZoomImage = element.getAttribute("src").replace("/UrunResimleri","/UrunResimleri/buyuk");
        element.setAttribute("data-zoom-image", divThumbListDataZoomImage);
      });
      
      
      //$( "#divThumbList img" ).mouseenter(function(){
      /*$("#divThumbList img").ezPlus({ zoomType: 'inner', cursor: 'crosshair' }); // $(this) - scrollZoom: true*/
      //});
    });
    
    
    const targetImagesNode = document.getElementById('divThumbList');
    
    const configImages = { childList: true }; // attributes: true, subtree: true 
    
    // Callback function to execute when mutations are observed
    const callbackImages = function(mutationsList, observer) {
      /* Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              console.log('A child node has been added or removed.');
          }
          else if (mutation.type === 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
      */
    
      var divThumbListImage;
      var divThumbListDataZoomImage;
      var divThumbListImages = document.querySelectorAll("#divThumbList img"); /*.SmallImages img*/
    
      divThumbListImages.forEach((element) => {
        divThumbListImage = element.getAttribute("src").replace("/thumb","/buyuk");
        element.setAttribute("src", divThumbListImage) ;
        
        divThumbListDataZoomImage = element.getAttribute("src").replace("/UrunResimleri","/UrunResimleri/buyuk");
        element.setAttribute("data-zoom-image", divThumbListDataZoomImage);
      });
    
      
      //$( "#divThumbList img" ).mouseenter(function(){
      /*$("#divThumbList img").ezPlus({ zoomType: 'inner', cursor: 'crosshair' }); // $(this) - scrollZoom: true*/
      //});
    };
    
    // Create an observer instance linked to the callback function
    const observerImages = new MutationObserver(callbackImages);
    
    // Start observing the target node for configured mutations
    observerImages.observe(targetImagesNode, configImages);
    
    if(window.innerWidth >= 769) {
      var divUrunOzellikAlani = document.querySelector("#divUrunOzellikAlani");
    
      document.querySelector(".RightDetail").appendChild(divUrunOzellikAlani);
    }
	

/* <script src="https://unpkg.com/counterup2@2.0.2/dist/index.js">	</script> */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.counterUp=t():e.counterUp=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n,divideNumbers:()=>r});const n=(e,t={})=>{const{action:n="start",duration:i=1e3,delay:u=16}=t;if("stop"===n)return void o(e);if(o(e),!/[0-9]/.test(e.innerHTML))return;const l=r(e.innerHTML,{duration:i||e.getAttribute("data-duration"),delay:u||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=l[0]||"&nbsp;",e.style.visibility="visible";const c=function(){e.innerHTML=l.shift()||"&nbsp;",l.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(c,u)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(c,u)},o=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},r=(e,t={})=>{const{duration:n=1e3,delay:o=16}=t,r=n/o,i=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),u=[];for(let e=0;e<r;e++)u.push("");for(let e=0;e<i.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(i[e])&&!/<[^>]+>/.test(i[e])){let t=i[e];const n=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let o=u.length-1;for(let e=r;e>=1;e--){let i=parseInt(t/r*e,10);i=n.reduce(((e,{char:t,i:n})=>e.length<=n?e:e.slice(0,-n)+t+e.slice(-n)),i.toString()),u[o--]+=i}}else for(let t=0;t<r;t++)u[t]+=i[e];return u[u.length]=e.toString(),u};return t})()}));
	
    document.querySelector("#divUrunOzellikAlani").insertAdjacentHTML("beforebegin",`
    <div class="urun-detay-yazi-sayac">
        <div class="aciklama">
            See the positive impact of choosing this product
        </div>
        <div class="ikonlar">
          <div>
            <img class="resim a" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-2a.gif">
            <img class="resim b" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-2b.gif">
            <div class="sayac">
                <span class="rakam a">9</span>
                <span class="rakam b">90</span>
            </div>
            <span class="yazi a">Km of driving emissions avoided</span>
            <span class="yazi b">Kg CO2e of emissions avoided</span>
          </div>
          <div>
            <img class="resim a" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-3a.gif">
            <img class="resim b" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-3b.gif">
            <div class="sayac">
                <span class="rakam a">90</span>
                <span class="rakam b">900</span>
            </div>
            <span class="yazi a">Days of drinking water saved</span>
            <span class="yazi b">Litres of water saved</span>
          </div>
          <div>
            <img class="resim a" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-1a.gif">
            <img class="resim b" src="https://www.siustore.co/Uploads/EditorUploads/urundetay-emisyon-1b.gif">
            <div class="sayac">
                <span class="rakam a">900</span>
                <span class="rakam b">9000</span>
            </div>
            <span class="yazi a">M2 of saved from pesticides</span>
            <span class="yazi b">Grams of chemical fertilizer avoided</span>
          </div>
        </div>
        <div class="butonlar">
          <label class="switch-checkbox">
            <input type="checkbox" checked>
            <span class="slider-checkbox round"></span>
          </label>
          <span class="buton a" style="float: left;">
          Equivalences
          </span>
          <span class="buton b" style="float: left;">
          Equivalences
          </span>
        </div>
    </div>
    `);
    
    const counterUp = window.counterUp.default;
    var counterUpI = 0;
    const counterUpCallback = entries => {
        entries.forEach( entry => {
            const el = entry.target
            if ( entry.isIntersecting) { // && !el.classList.contains( 'is-visible' )
                document.querySelectorAll(".urun-detay-yazi-sayac .sayac").forEach((element) => {
                    counterUp( element, { // el
                        duration: 1000, // 2000
                        delay: 2, // 16
                    } )
                });
                //el.classList.add( 'is-visible' )
            }
        });
    }
    
    const counterUpIO = new IntersectionObserver( counterUpCallback, { threshold: 0.1 } )
    
    window.addEventListener("load", () => {
        counterUpIO.observe( document.querySelector( '.urun-detay-yazi-sayac' ) )
    });
    
    
    document.querySelector(".urun-detay-yazi-sayac .switch-checkbox input").addEventListener("change", (element) => {
      if(element.target.checked){
        document.querySelectorAll(".urun-detay-yazi-sayac .ikonlar > div").forEach((element) => {
            element.querySelector(".resim.a").style.display = "block";
            element.querySelector(".rakam.a").style.display = "block";
            element.querySelector(".yazi.a").style.display = "block";
            element.parentNode.nextElementSibling.querySelector(".buton.a").style.display = "block";
    
            element.querySelector(".resim.b").style.display = "none";
            element.querySelector(".rakam.b").style.display = "none";
            element.querySelector(".yazi.b").style.display = "none";
            element.parentNode.nextElementSibling.querySelector(".buton.b").style.display = "none";
            
            setTimeout(() => {
            document.querySelectorAll(".urun-detay-yazi-sayac .sayac").forEach((element) => {
                counterUp( element, {
                    duration: 100,
                    delay: 1,
                } )
            });
            }, 1);
        });
      }else{
        document.querySelectorAll(".urun-detay-yazi-sayac .ikonlar > div").forEach((element) => {
            element.querySelector(".resim.b").style.display = "block";
            element.querySelector(".rakam.b").style.display = "block";
            element.querySelector(".yazi.b").style.display = "block";
            element.parentNode.nextElementSibling.querySelector(".buton.b").style.display = "block";
    
            element.querySelector(".resim.a").style.display = "none";
            element.querySelector(".rakam.a").style.display = "none";
            element.querySelector(".yazi.a").style.display = "none";
            element.parentNode.nextElementSibling.querySelector(".buton.a").style.display = "none";
    
            setTimeout(() => {
            document.querySelectorAll(".urun-detay-yazi-sayac .sayac").forEach((element) => {
                counterUp( element, {
                    duration: 100,
                    delay: 1,
                } )
            });
            }, 1);
        });
      }
    });
	
	
      $(document).ready(function(){
       setTimeout(function() { 
        $(".RightDetail .MiddleList .eksecenekLine.kutuluvaryasyon .size_box:first-child").click();
          }, 200);
        $(".RightDetail .eksecenekLine.resimlivaryasyon .size_box:first-child").click();
    })