var url_programiz = "https://www.programiz.com/python-programming/online-compiler/";
var url_aula1 = "";
var url_aula2 = "aulas.html";
var url_aula3 = "";
var url_aula4 = "";
var url_aula5 = "";
var url_aula6 = "";
var url_ENATI = "https://enati-ifgoiano.github.io/2022/#/";

var programiz = document.getElementById("card-programiz");
var enati = document.getElementById("card-enati");
var aula2 = document.getElementById("card-aula2");


programiz.addEventListener('click', function() {
    
    openInNewTab(url_programiz);
  
});

enati.addEventListener('click', function() {
    
    openInNewTab(url_ENATI);
  
});

aula2.addEventListener('click', function() {
    
    openNextPage(url_aula2);
  
});

function openInNewTab(url) {
    var janela = window.open(url, '_blank');
    janela.focus();
}

function openNextPage(url) {
    var janela = window.open(url, '_parent');
    janela.focus();
}