"use strict"

function ibg(){

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();

let menuCol = document.querySelector('.list-menu');
let menuBody = document.querySelector('.menu__body');
let menuIcon = document.querySelector('.menu__icon');

menuIcon.addEventListener("click", function(e){
	menuBody.classList.toggle("_active");
	menuIcon.classList.toggle("_active");
	menuCol.classList.toggle("_active");
})