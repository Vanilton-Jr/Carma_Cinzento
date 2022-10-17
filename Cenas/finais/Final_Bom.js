function Final1(){
    deselicionar()
txt1.innerHTML = "Ufa...";
txt2.innerHTML = "Ainda bem que você matou aquele maldito corvo,";
txt3.innerHTML = "Esse maldito vem roubando meu milho para alimentar os pobres...";
txt4.innerHTML = "Que nojo.";
txt5.innerHTML = "E você ainda recuperou minha pá roubada!";
txt6.innerHTML = "Muito obrigado meu jovem, aqui... tome como reconpensa";
txt7.innerHTML = "*Você recebeu 4 NFTs*";

tela.style.backgroundImage = "url(assets/imgs/finalBom.png)";
const myTimeout7 = setTimeout(mudarFoto1, 2000);
const myTimeout99 = setTimeout(Restart, 3000);
document.onkeydown = function (e) {

    switch (e.keyCode) {
        case 49:
            break;

        case 50:
            break;
    }
};

}
function mudarFoto1(){
    tela.style.backgroundImage = "url(assets/imgs/finalBom2.png)";
}