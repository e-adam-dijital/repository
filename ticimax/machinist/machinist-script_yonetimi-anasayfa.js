// Anasayfa

document.addEventListener("DOMContentLoaded", () => {
	if(window.innerWidth >= 768 ) {
	  setTimeout(() => {
		var headerElement = document.querySelector("#header");
		var headerContentElement = document.querySelector(".headerContent");
		var navMenuElement = document.querySelector(".navigation");
		var htExElement = document.querySelector(".htEx");

		headerElement.after(headerContentElement);
		headerElement.after(navMenuElement);
		headerElement.after(htExElement);
	  }, 1);
	}
});