

function Cena1() {
exporTexto();
    window['chave'] = 0;
    deselicionar();
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. Matar o corvo";
    txt4.innerHTML = "2. ignorar o corvo";
    txt5.innerHTML = "3. Assuste o corvo";
    txt6.innerHTML = "";
    txt7.innerHTML = "";


    tela.style.backgroundImage = "url(imgs/corvoFundo.gif)";
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(imgs/corvoMorto.png)";
                window['Ecorvo'] = 1;
                window['chave'] = 2;

                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                gritoCorvo.play()
                break;
            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(imgs/corvoFundo.gif)";
                window['Ecorvo'] = 2;
                
                window['chave'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;

            case 51:
                selecionar(5);
                tela.style.backgroundImage = "url(imgs/corvoAfugentado.png)";
                window['Ecorvo'] = 3;
                window['chave'] = 2;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };

}
