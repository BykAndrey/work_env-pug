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
<<<<<<< HEAD
=======

>>>>>>> 221fe90299d5100ad6be490f74ba7e4f1ae06b93
	
});