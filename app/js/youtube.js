;!function(){
    var el=document.querySelectorAll('.youtube');
    console.log(el.length);

    for(var i=0;i<=el.length-1;i++){
        
            var body=el[i].querySelector('.youtube__body');
            var url=el[i].getAttribute('data-src');
            var urlar=url.split('/');
            var id=urlar[urlar.length-1];
            console.log(id);
            var img="https://img.youtube.com/vi/"+id+"/maxresdefault.jpg";
            body.style.backgroundImage="url('"+img+"')";


        el[i].querySelector('.youtube__play').addEventListener('click',function(){
            var body=this.parentNode;
            var url=this.parentNode.parentNode.getAttribute('data-src');
            var urlar=url.split('/');
            var id=urlar[urlar.length-1];
            console.log(id);
            var img="https://img.youtube.com/vi/"+id+"/maxresdefault.jpg";
            body.style.backgroundImage="url('"+img+"')";
            body.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'?rel=0&showinfo=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            
        })
    }
}();
