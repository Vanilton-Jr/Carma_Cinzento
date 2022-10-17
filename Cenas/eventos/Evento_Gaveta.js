function EventoGaveta() {
    exporTexto();
    window['chave'] = 0;
    deselicionar();
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. Abrir primeira gaveta";
    txt4.innerHTML = "2. Abrir segunda gaveta";
    txt5.innerHTML = "3. Abrir terceira gaveta";
    txt6.innerHTML = "";
    txt7.innerHTML = "";


    tela.style.backgroundImage = "url(assets/assets/imgs/blank.gif)";
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(assets/assets/imgs/blank.png)";
                window['Egaveta'] = 1;
                window['chave'] = 2;

                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Egaveta;
                document.getElementById("test4").innerHTML = EPA;
                //gritoCorvo.play()
                break;
            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(assets/assets/imgs/blank.png)";
                window['Egaveta'] = 2;

                window['chave'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Egaveta;
                document.getElementById("test4").innerHTML = EPA;
                break;

            case 51:
                selecionar(5);
                tela.style.backgroundImage = "url(assets/assets/imgs/blank.png)";
                window['Egaveta'] = 2;

                window['chave'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Egaveta;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };

}