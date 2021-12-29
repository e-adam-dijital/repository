$(document).ready(function () {
	$('#divNewsLetter').prependTo('.ticiBultenContent');

	$(".ticiFooterMenu .footerCol h3").on("click", function (event) {
		$(this).parents(".footerCol").toggleClass("active");
		event.preventDefault();

	});
});