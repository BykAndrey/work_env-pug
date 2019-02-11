!function(){
    var mapCreated=false;
    function CreateMap(){
        //console.log('MAP CreateMap');
        mapCreated=true;
        ymaps.ready(function () {
            
            var myMap = new ymaps.Map('map', {
                    center: [53.870936, 27.508857],
                    zoom: 17
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                }, {
                });
            myMap.geoObjects
                .add(myPlacemark);
                
        });
        
    }
    function scroll(){
        //console.log('MAP true scroll');
        var htmlS=document.querySelector('html').scrollTop;
        var bodyS=document.querySelector('body').scrollTop;
        var offset=document.getElementById('map').offsetTop;
        if( htmlS+window.innerHeight>=offset|| bodyS+window.innerHeight>=offset){
            if(mapCreated==false){
                mapCreated=true;
                var script =document.createElement('script');
                script.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU";
                var head=document.querySelector('head');
                head.appendChild(script);


                script.onload=function(){
                    console.log('loaded');
                    setTimeout(function(){
                        CreateMap();
                        
                    },1000)
                   
                }
            }
           
        }
    }
	window.addEventListener('scroll',function(){
	
		if(mapCreated==false){
           // console.log('MAP SCROLL');
			scroll();
        }
        
	});
}();
