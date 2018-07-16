$(function(){
    $.fn.tabs=function(options){
        let defa=$.extend({
            linkClass:'.tabs__link',
            contentClass:'.tabs__content'
        },options);
        
        let setActiveContent=function(id){
            if(id==-1){
                 //console.log(-1);
               $(this).find(defa.contentClass).each(function(){
                    $(this).css({
                        'display':'none'
                    });
                   $(this).removeClass('active');
                });
                $(this).find(defa.linkClass).each(function(){
                    $(this).removeClass('active');
                });
               
                return true;
            }
            if(id>=0){
                console.log();
                if(true){
                     let link=$(this).find(defa.linkClass).eq(id);
                    let tab=$(this).find(defa.contentClass).eq(id);
                  //  console.log(`Click ${tab.length}`);
                    link.addClass('active');
                    tab.addClass('active'); 
                    tab.css({
                        'display':'block'
                    });
                }
            }
        }
        $(this).each(function(){
          //  console.log('tabs created'); 
            let $this=$(this);
            setActiveContent.call($this,0);
            $(this).find(defa.linkClass).on('click',function(){
                  var indx=$this.find(defa.linkClass).index($(this));
                 setActiveContent.call($this,-1)
                 setActiveContent.call($this,indx);
            });
        });
        
    }
}(jQuery));

$(document).ready(function(){
	
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			 tCounter: '<span class="mfp-counter">%curr%&nbsp;из&nbsp;%total%</span>',
			//navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		 mainClass: 'mfp-fade',
		/*image: {
		//	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}*/
	});
	
	
	$.datepicker.regional['ru'] = {
                    closeText: 'Закрыть',
                    prevText: 'Пред',
                    nextText: 'След',
                    currentText: 'Сегодня',
                    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
                    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                    weekHeader: 'Нед',
                    dateFormat: 'dd.mm.yy',
                    firstDay: 1,
                    isRTL: false,
                    showMonthAfterYear: false,
                    yearSuffix: ''};
            $.datepicker.setDefaults($.datepicker.regional['ru']);  

	/*Отключение дат*/
	var disabledDates = ["2018-07-11","2018-07-10","2018-07-09"]
	$('.datefiled input').each(function(){
		var $thisPicker=$(this);
		$(this).datepicker({
		//prevText: "Earlier",
		showOtherMonths: true,
      	selectOtherMonths: true,
		autoclose: true,
		beforeShowDay: function(date){
			var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
			return [ disabledDates.indexOf(string) == -1 ]
    	},
		beforeShow: function(input, inst) {
			var widget = $(inst).datepicker('widget');
        	widget.css('margin-left', $(input).outerWidth() - widget.outerWidth());
			//&&$(window).innerWidth>=700
			if($thisPicker.parents('.f-good__prop-value ').length>0){
				var top=$thisPicker.offset().top- $(window).scrollTop();
				var left=$thisPicker.offset().left
				if($(window).innerWidth()<=550){
					left=230;
				}
				console.log(top);
				setTimeout(function(){
					inst.dpDiv.css({
						   top: top+28, //you can adjust this value accordingly
						   left: left ,//show at the end of textBox
							'z-index':'510'
				   });
				},0);
				
			}
			if($(window).innerWidth()<700){
					console.log('<700');
						console.log(top);
					setTimeout(function(){
						inst.dpDiv.css({
							   //top: top+28, //you can adjust this value accordingly
							   left: "230px" ,//show at the end of textBox
							'z-index':'510'
				   		});
				},0);
				}
		   $('#ui-datepicker-div').removeClass(function() {
			   return $('input').get(0).id; 
		   });
			//$('#ui-datepicker-div').style["z-index"]="510!impirtant";
			//$('#ui-datepicker-div').style["z-index"]="510!impirtant";
			//$('#ui-datepicker-div').style["z-index"]="510!impirtant";
		   $('#ui-datepicker-div').addClass("custom-datapicker");
		}
	});
	});
		
		

});