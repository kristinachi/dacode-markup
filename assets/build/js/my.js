function initTab(){$(".tabs-content__item").hide(),$(".tabs-content__item.active").show(),$("body").on("click",".tabs-nav__btn",(function(s){$(".work-slider").slick("refresh"),s.preventDefault();var e=$(this).attr("data-tab");$(this).closest(".tabs-nav").find(".tabs-nav__btn.active").removeClass("active"),$(this).addClass("active"),$($('.tabs-content__item[data-tab="'+e+'"]')[0]).fadeIn(400).addClass("active").siblings(".active").hide().removeClass("active")}))}jQuery(document).ready((function(){initTab(),$(".work-slider").slick({centerMode:!1,slidesToShow:3,slidesToScroll:1,dots:!1,responsive:[{breakpoint:992,settings:{arrows:!1}}]}),$(".news-slider").slick({centerMode:!1,slidesToShow:2,slidesToScroll:1,dots:!0}),$(".testimonials-slider").slick({slidesToShow:1,slidesToScroll:1,fade:!0,asNavFor:".testimonials-nav"}),$(".testimonials-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".testimonials-slider",centerMode:!0,focusOnSelect:!0,arrows:!1})}));