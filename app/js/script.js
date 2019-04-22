$(document).ready(function () {

	$('.main-banner').slick({
		slidesToShow: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 4000,
	});

//mobile menu
	//Фиксируем скрол
	$('.head-toggle--open').click(function(){
		$('body').css({
			overflow: '',
			position: '',
			top: ''
		})
	});

	$('.head-toggle').click(function(event){
		event.stopPropagation();
		$(this).toggleClass('head-toggle--open');
		$('.slide-menu').toggleClass('slide-menu--open');
		$('body').toggleClass('body-fix')
	});

	$('.slide-menu').on("click", function (event) {
		event.stopPropagation();
	});
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	$(document).on("click", function () {
			$('.head-wrap').removeClass('head--up');
			$('.head-toggle').removeClass('head-toggle--open');
			$('.slide-menu').removeClass('slide-menu--open');
			console.log(modalState.isModalShow);
			if(modalState.isModalShow == false){
				$('body').removeClass('body-fix')
		}
	});
	//mobile menu===end

	//beauty select
	$('.select-beauty').niceSelect();

	//tab
	$('.catalog-toggle__el').click(function(){
		$('.catalog-toggle__el').removeClass('catalog-toggle__el--active');
		$(this).addClass('catalog-toggle__el--active');
		var currentTab = $(this).index();
		$('.catalog').removeClass('catalog--active');
		$('.catalog').eq(currentTab).addClass('catalog--active');
	});

	//catalog row toggle
	$('.catalog-row').click(function(){
		$(this).toggleClass('catalog-row--active');
		$(this).find('.catalog-row-content').slideToggle();
	});
	//catalog row toggle===end



});
