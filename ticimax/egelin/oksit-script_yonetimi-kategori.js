if($(window).width() > 1199) {
  
  let categoryTitle = $(".categoryTitle");

  $(categoryTitle).remove();

  $("#mainHolder_divBlocks").prepend($(categoryTitle));

  let categoryTitleText = $("body ul.breadcrumb li:nth-last-of-type(1)").text().trim();

  $(".categoryTitleText").append('<span style="font-size: 25px;position: absolute;left: 50%;transform: translateX(-50%);top: 20px;">'+categoryTitleText+'</span>');

}

$(document).ready(() => {

	if($(window).width() <= 1199) {

		let categoryBreadcrumbText = $(".categoryTitleText");

		$(".categoryTitleText").remove();

		$(".categoryTitle").prepend($(categoryBreadcrumbText));

		let categoryTitleText = $("body ul.breadcrumb li:nth-last-of-type(1)").text().trim();

		$(".categoryTitle").after('<span style="font-size: 25px;display: block;width: 100%;text-align: center;float: left;margin:15px 0;">'
			+ categoryTitleText
			+ '</span>');

	}

	setTimeout(() => {
		windowLoadCategory();
	}, 1);
  
});


$(window).load(() => {

	setTimeout(() => {
		windowLoadCategory();
	}, 10);
	
	if($(window).width() <= 1199) {
		
	}
	
});


function windowLoadCategory(){
  	$("body #divSayfalamaUst.Slct .brandlistselection .sortingContent select option:first-child").text("Sıralama");
}