function EventoPa() {
    esconderTexto();
    txt1.innerHTML = "";
    txt2.innerHTML = "";
    txt3.innerHTML = "1. Pegar a Pá";
    txt4.innerHTML = "2. Não pegar a Pá";
    txt5.innerHTML = "";
    txt6.innerHTML = "";
    txt7.innerHTML = "";

    tela.style.backgroundImage = "url(assets/imgs/pa.png)";
    document.onkeydown = function (e) {

        switch (e.keyCode) {
            case 49:
                selecionar(3);
                tela.style.backgroundImage = "url(assets/imgs/naopa.png)";
                window['EPA'] = 1;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;

            case 50:
                selecionar(4);
                tela.style.backgroundImage = "url(assets/imgs/pa.png)";
                window['EPA'] = 2;
                document.getElementById("test2").innerHTML = chave;
                document.getElementById("test5").innerHTML = Ecorvo;
                document.getElementById("test4").innerHTML = EPA;
                break;
        }
    };
    setTimeout(exporTexto1, 100);
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