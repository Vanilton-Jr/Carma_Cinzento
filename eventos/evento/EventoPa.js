function Cena2() {
    exporTexto();

    deselicionar()
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. Pegar Pá";
    txt4.innerHTML = "2. não";
    txt5.innerHTML = "";
    txt6.innerHTML = "";
    txt7.innerHTML = "";

    tela.style.backgroundImage = "url(imgs/pa.png)";
    document.onkeydown = function (e) {

        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(imgs/naopa.png)";
                window['EPA'] = 1;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;

            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(imgs/pa.png)";
                window['EPA'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };
}