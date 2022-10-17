

function EventoCorvo() {
    window['chave'] = 0;
    deselicionar();
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. Matar o corvo";
    txt4.innerHTML = "2. ignorar o corvo";
    txt5.innerHTML = "3. Assuste o corvo";
    txt6.innerHTML = "";
    txt7.innerHTML = "";


    tela.style.backgroundImage = "url(assets/imgs/corvoFundo.gif)";
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(assets/imgs/corvoMorto.png)";
                window['Ecorvo'] = 1;
                window['chave'] = 2;

                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                gritoCorvo.play()
                break;
            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(assets/imgs/corvoFundo.gif)";
                window['Ecorvo'] = 2;
                
                window['chave'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;

            case 51:
                selecionar(5);
                tela.style.backgroundImage = "url(assets/imgs/corvoAfugentado.png)";
                window['Ecorvo'] = 3;
                window['chave'] = 2;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };
    exporTexto1() 
    
    
}



function exporTexto1() {
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var b4 = document.getElementById("b4");
        var b5 = document.getElementById("b5");
        var b6 = document.getElementById("b6");
        var b7 = document.getElementById("b7");
        
        
        setTimeout(ba1, 0);
        setTimeout(ba2, 0);
        setTimeout(ba3, 0);
        setTimeout(ba4, 500);
        setTimeout(ba5, 1500);
        setTimeout(ba6, 0);
        setTimeout(ba7, 0);
        setTimeout(clearTimeout(ba5), 1900);
    
    b1.style.transition = "5s";
    b2.style.transition = "5s";
    b3.style.transition = "5s";
    b4.style.transition = "5s";
    b5.style.transition = "5s";
    b6.style.transition = "5s";
    b7.style.transition = "5s";
}


        function ba1() {
            b1.style.width = "0px"
        };

        function ba2() {
            b2.style.width = "0px"
        };

        function ba3() {
            b3.style.width = "0px"
        };

        function ba4() {
            b4.style.width = "0px"
        };

        function ba5() {
            b5.style.width = "0px"
        };

        function ba6() {
            b6.style.width = "0px"
        };

        function ba7() {
            b7.style.width = "0px"
        };