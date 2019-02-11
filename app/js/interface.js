$(document).ready(function(){
    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
    });
    
	$('.h-menu__close, .header__menu-toggle').on('click',function(){
        $('.h-menu').toggleClass('h-menu--open');
        $('body').toggleClass('body-scroll-false');
    });
    $('.filtercat__main').on('click',function(){
        $(this).parents('.filtercat').toggleClass('filtercat--open');
    });

    $('.p-catalog__openleft').on('click',function(e){
        e.preventDefault();
        $('.p-catalog__left').toggleClass('p-catalog__left--open');
        
    });
    $('.p-card__bigslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.p-card__navslider'
      });

      $('.p-card__navslider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.p-card__bigslider',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive:[
            {
                breakpoint:1140,
                settings:{
                    slidesToShow:4,
                }
            },
            {
                breakpoint:920,
                settings:{
                    slidesToShow:3
                }
            }
        ]
      });
});