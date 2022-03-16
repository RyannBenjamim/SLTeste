// Lista de produtos escolhidos
let produtos = []


// Criando as funcionabilidades do modal imgs
let imagens = document.querySelectorAll(".small_img");
let modal = document.querySelector(".modal");
let modalImg = document.querySelector("#modalimg");
let btCLose = document.querySelector("#bt_close");
let srcVal = ""; 

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener("click", function(){
        
        srcVal = imagens[i].getAttribute("src");
        modalImg.setAttribute("src", srcVal);
        modal.classList.toggle("modal_active");
    });
}

btCLose.addEventListener("click", function(){
    modal.classList.toggle("modal_active");
})


// Confirmando e enviando pedido pelo wpp
function finalizar() {
    // Nome do cliente
    let nome = document.getElementById("nome").value;
    // laço for usado para organizar a mensagem com os pedidos
    let msg = "";
    for (let p in produtos) {
        if (produtos[p] == produtos[0]) {
            msg = msg + `${produtos[p]}`;
        } else {
            msg = msg + `, ${produtos[p]}`;
        }
    }
    // Criando e enviando a mensagem
    window.open(`https://wa.me/+5591988114952?text=Olá meu nome é ${nome}, tenho interesse em ${msg} `);
}

let botaoConfirmar = document.getElementById("finalizar");
botaoConfirmar.addEventListener("click", finalizar);


// ------------------------- laço 01 -------------------------------------
let l1Click = 0; // Variável para verificar se o campo foi clicaco ou não
function laco01() {
    if (l1Click == 0) {
        document.getElementById("lacoBorder1").style.borderColor = "green";
        produtos.push("laco01");
        l1Click = 1;
    } else {
        document.getElementById("lacoBorder1").style.borderColor = "white";
        l1Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "laco01") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoL1 = document.getElementById("laco1");
botaoL1.addEventListener("click", laco01);

// ------------------------- laço 02 -------------------------------------
let l2Click = 0; // Variável para verificar se o campo foi clicaco ou não
function laco02() {
    if (l2Click == 0) {
        document.getElementById("lacoBorder2").style.borderColor = "green";
        l2Click = 1;
        produtos.push("laco02");
    } else {
        document.getElementById("lacoBorder2").style.borderColor = "white";
        l2Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "laco02") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoL2 = document.getElementById("laco2");
botaoL2.addEventListener("click", laco02);

// ------------------------- laço 03 -------------------------------------
let l3Click = 0; // Variável para verificar se o campo foi clicaco ou não
function laco03() {
    if (l3Click == 0) {
        document.getElementById("lacoBorder3").style.borderColor = "green";
        l3Click = 1;
        produtos.push("laco03");
    } else {
        document.getElementById("lacoBorder3").style.borderColor = "white";
        l3Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "laco03") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoL3 = document.getElementById("laco3");
botaoL3.addEventListener("click", laco03);

// ------------------------- Tiara 01 -------------------------------------
let t1Click = 0; // Variável para verificar se o campo foi clicaco ou não
function tiara01() {
    if (t1Click == 0) {
        document.getElementById("tiaraBorder1").style.borderColor = "green";
        produtos.push("tiara01");
        t1Click = 1;
    } else {
        document.getElementById("tiaraBorder1").style.borderColor = "white";
        t1Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "tiara01") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoT1 = document.getElementById("tiara1");
botaoT1.addEventListener("click", tiara01);

// ------------------------- Tiara 02 -------------------------------------
let t2Click = 0; // Variável para verificar se o campo foi clicaco ou não
function tiara02() {
    if (t2Click == 0) {
        document.getElementById("tiaraBorder2").style.borderColor = "green";
        produtos.push("tiara02");
        t2Click = 1;
    } else {
        document.getElementById("tiaraBorder2").style.borderColor = "white";
        t2Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "tiara02") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoT2 = document.getElementById("tiara2");
botaoT2.addEventListener("click", tiara02);

// ------------------------- Tiara 03 -------------------------------------
let t3Click = 0; // Variável para verificar se o campo foi clicaco ou não
function tiara03() {
    if (t3Click == 0) {
        document.getElementById("tiaraBorder3").style.borderColor = "green";
        produtos.push("tiara03");
        t3Click = 1;
    } else {
        document.getElementById("tiaraBorder3").style.borderColor = "white";
        t3Click = 0;

        for (let p in produtos) {
            if (produtos[p] == "tiara03") {
                produtos.splice(p, 1);
            }
        }
    }
}

let botaoT3 = document.getElementById("tiara3");
botaoT3.addEventListener("click", tiara03);