const container = document.querySelector(".container");
const header = document.querySelector("header");


window.addEventListener('load', () => {
    container.classList.add("mobile");
    if(window.innerWidth <= 800){

        container.classList.add("mobile");
       
        header.classList.add("mobile");
       
 
     } else{

        container.classList.remove("mobile");

        header.classList.remove("mobile");
        
     }
});

window.addEventListener('resize', () => {


    console.log(window.innerWidth);

    if(window.innerWidth <= 800){

        container.classList.add("mobile");       
        header.classList.add("mobile");
       
 
     } else{

        container.classList.remove("mobile");
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
