$(document).ready(function(){$(".main-banner").slick({slidesToShow:1,speed:500,autoplay:!0,autoplaySpeed:4e3}),$(".head-toggle--open").click(function(){$("body").css({overflow:"",position:"",top:""})}),$(".head-toggle").click(function(o){o.stopPropagation(),$(this).toggleClass("head-toggle--open"),$(".slide-menu").toggleClass("slide-menu--open"),$("body").toggleClass("body-fix")}),$(".slide-menu").on("click",function(o){o.stopPropagation()});var o={isModalShow:!1,scrollPos:0};$(document).on("click",function(){$(".head-wrap").removeClass("head--up"),$(".head-toggle").removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),console.log(o.isModalShow),0==o.isModalShow&&$("body").removeClass("body-fix")}),$(".select-beauty").niceSelect(),$(".catalog-toggle__el").click(function(){$(".catalog-toggle__el").removeClass("catalog-toggle__el--active"),$(this).addClass("catalog-toggle__el--active");var o=$(this).index();$(".catalog").removeClass("catalog--active"),$(".catalog").eq(o).addClass("catalog--active")}),$(".catalog-row").click(function(){$(this).toggleClass("catalog-row--active"),$(this).find(".catalog-row-content").slideToggle()})});