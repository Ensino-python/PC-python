const header = document.querySelector("header");


window.addEventListener('load', () => {
    
    if(window.screen.width <= 800){
       
        header.classList.add("mobile");
       
 
     } else{

        header.classList.remove("mobile");
        
     }
});

window.addEventListener('resize', () => {
    if(window.screen.width <= 800){
       
        header.classList.add("mobile");
       
 
     } else{

        header.classList.remove("mobile");
        
     }

})

/*
nav_button.addEventListener("click", ()=>{

    if(nav_menu.classList.contains("desactive")){
        nav_menu.classList.remove("desactive");
        nav_button.innerHTML = '<span class="material-icons">close</span>';
        
    }else{
        nav_menu.classList.add("desactive");
        nav_button.innerHTML = '<span class="material-icons">menu</span>';
        
    }

})*/
