function Final2(){
    deselicionar()

txt1.innerHTML = "EI! Você... você matou aquele corvo?";
txt2.innerHTML = "Graças a Deus!";
txt3.innerHTML = "Esse corvo na verdade era um necromante disfarçado,";
txt4.innerHTML = "Ele vinha assolando essa teraa nos observando e nos deixando malucos";
txt5.innerHTML = "Muito obri-...";
txt6.innerHTML = "Onde esta a pá? A pá era a fonte de seu poder que o permitia se ressucitar...";
txt7.innerHTML = "*Você ouve o sons de um corvo ao longe, medo e terror se espalham pelo seu coração*";

tela.style.backgroundImage = "url(imgs/finalRuim.png)";
const myTimeout7 = setTimeout(mudarFoto, 2000);
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

function mudarFoto(){
    tela.style.backgroundImage = "url(imgs/finalRuim2.png)";
    gritoCorvo.play();
}

