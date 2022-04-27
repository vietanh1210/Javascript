var input=document.querySelector('input')
var items=Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn)){
    btn.addEventListener('click',funtion(){
        if(input.interHTML=='0')
        input.innerHTML=='';
        if(btn.innerHTML=='AC')
        input.innerHTML= '0';
        else if(btn.innerHTML=='DEL'){
            
        }
    }
    )
}