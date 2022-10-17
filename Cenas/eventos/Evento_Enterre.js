function EventoEnterre() {
exporTexto();
    window['chave'] = 0;
    deselicionar();
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. O enterrar";
    txt4.innerHTML = "2. Fujir";
    txt5.innerHTML = "";
    txt6.innerHTML = "";
    txt7.innerHTML = "";


    tela.style.backgroundImage = "url(assets/imgs/blank.gif)";
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(assets/imgs/blank.png)";
                window['Eenterrar'] = 1;
                window['chave'] = 2;

                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Eenterrar;
                document.getElementById("test4").innerHTML = EPA;
                //gritoCorvo.play()
                break;
            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(assets/imgs/blank.png)";
                window['Eenterrar'] = 2;
                
                window['chave'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Eenterrar;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };

}