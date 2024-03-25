window.addEventListener('DOMContentLoaded', function(){
    
    let button = document.querySelector('.fond');
    let body = document.querySelector('body');
    
    button.addEventListener('click', function(){
        
        body.classList.toggle("fond-body");
        
    });
    
    
});