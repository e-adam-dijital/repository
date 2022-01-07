/* Sepet */

      $(document).ready(function(){
      if($(window).width() < 769){
      $("body .BasketPage .MobileHeaderControlContent .item:first-child a").appendTo(".sepetListAlt")
      }
      })


//document.querySelector(".sepetHizliKargo span").textContent = "Tahmini Kargoya Veriliş Süresi"; /* Demoda hataya neden olduğu için pasife alındı */


/* Sipariş Tamamla */

window.addEventListener("load", () => {
  setTimeout(()=> {
	document.querySelector("#UyeliksizSozlesmeUyari").click();
  }, 1000);
});