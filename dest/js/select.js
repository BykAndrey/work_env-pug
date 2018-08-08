$('.c-select').each(function(){
		var $this=$(this);
		var list=$(this).find('.c-select__list');
		var value=$(this).find('.c-select__value');
		
		var selected=$(this).find('.c-select__selected');
		selected.on('click', function(){
			function unb(){
				//list.css('display','none');
				list.slideUp(200);
				$this.removeClass('active');
			}
			if(list.css('display')==='block'){
				list.slideToggle();
				console.log('hide');
				$this.removeClass('active');
				$('body').off('click',unb);
				return false;
			}
			if(list.css('display')==='none'){
				list.slideToggle();
				console.log('show');
				$('body').on('click',unb);
				$this.addClass('active');
				return false;
			}
			
		});
		
		$(this).find('.c-select__item').each(function(){
			console.log(1);
			$(this).on('click',function(){
				var val=$(this).attr('data-value');
				console.log(val);
				selected.html($(this).html());
				$this.attr('data-value',val);
				value.val(val);
			});
		});
		var id=$this.attr('data-value');
		$(this).find('.c-select__item').each(function(){
			if($(this).attr('data-value')==id){
				$(this).click();
			}
		});
	//$(this).find('.c-select__item').eq(0).click();
});