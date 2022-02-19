$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		draggable: false,
		centerMode: true,
		responsive:[
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

let site = document.getElementById('siteIcon');

site.onmouseover = function(){
	 document.getElementById('siteIcon').src = 'img/my-site-d.png';
}

site.onmouseout = function(){
	 document.getElementById('siteIcon').src = 'img/DannisWorks 01.png';
}


