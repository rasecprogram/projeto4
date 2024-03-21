document.addEventListener("DOMContentLoaded", function() {
    // Capturando os elementos
    const titulo = document.getElementById("titulo");
    const listaNaoOrdenada = document.querySelector("ul");
    const link = document.getElementById("link");
    const listaOrdenada = document.getElementById("lista-ordenada");

    // Adicionando conteúdo aos elementos
    titulo.innerText = "Título da Página";
    link.innerText = "Visite o site da Proz Educação";

    // Adicionando itens à lista não ordenada usando innerHTML
    listaNaoOrdenada.innerHTML += "<li>Item 1</li>";
    listaNaoOrdenada.innerHTML += "<li>Item 2</li>";
    listaNaoOrdenada.innerHTML += "<li>Item 3</li>";

    // Adicionando itens à lista ordenada usando innerHTML
    listaOrdenada.innerHTML += "<li><a href='https://www.site1.com'>Link 1</a></li>";
    listaOrdenada.innerHTML += "<li><a href='https://www.site2.com'>Link 2</a></li>";
    listaOrdenada.innerHTML += "<li><a href='https://www.site3.com'>Link 3</a></li>";
});

