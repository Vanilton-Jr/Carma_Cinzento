function Morte(){
    deselicionar()

txt1.innerHTML = "";
txt2.innerHTML = "";
txt3.innerHTML = "O corvo te esfaqueou pelas costas... Nunca confie em pássaros";
txt4.innerHTML = "";
txt5.innerHTML = "";
txt6.innerHTML = "";
txt7.innerHTML = "";

tela.style.backgroundImage = "url(imgs/morte.png)";
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