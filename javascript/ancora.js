var url_programiz = "https://www.programiz.com/python-programming/online-compiler/";
var url_aula1 = "aula1.html";
var url_aula2 = "aula2.html";
var url_aula_operadores = "aula_operadores.html";
var url_aula3 = "aula3.html";
var url_aula4 = "aula4.html";
var url_aula6 = "aula6.html";
var url_ENATI = "https://enati-ifgoiano.github.io/2022/#/";

var programiz = document.getElementById("card-programiz");
var enati = document.getElementById("card-enati");
var aula1 = document.getElementById("card-aula1");
var aula2 = document.getElementById("card-aula2");
var aula_operadores = document.getElementById("card-aula-operadores");
var aula3 = document.getElementById("card-aula3");
var aula4 = document.getElementById("card-aula4");
var aula6 = document.getElementById("card-aula6");

programiz.addEventListener('click', function() {
    
    openInNewTab(url_programiz);
  
});

enati.addEventListener('click', function() {
    
    openInNewTab(url_ENATI);
  
});

aula1.addEventListener('click', function() {
    
    openNextPage(url_aula1);
  
});

aula2.addEventListener('click', function() {
    
    openNextPage(url_aula2);
  
});

aula_operadores.addEventListener('click', function() {
    
    openNextPage(url_aula_operadores);
  
});


aula3.addEventListener('click', function() {
    
    openNextPage(url_aula3);
  
});

aula4.addEventListener('click', function() {
    
    openNextPage(url_aula4);
  
});

aula6.addEventListener('click', function() {
    
    openNextPage(url_aula6);
  
});



function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}





