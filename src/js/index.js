
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",() =>{
    escondercartaopokedev();

    const idPokedevSelecionado = mostrarcartaopokedev(pokedev);
    
    desativarpokedevnalistagem();

    
    ativarpokedevnalistagem(idPokedevSelecionado);
    })
})

function ativarpokedevnalistagem(idPokedevSelecionado) {
    const pokedevSelenadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelenadoNaListagem.classList.add("ativo");
}

function desativarpokedevnalistagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarcartaopokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDocartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDocartaoPokedevParaAbrir);

    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function escondercartaopokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
