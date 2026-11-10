let xp = 0;
let nivel = 1;
let xpmaximo = 1000;


function concluirMissao(valor) {

    xp += valor;

    document.getElementById("xp").textContent = xp;

    atualizarBarra();

}

function atualizarBarra() {
    
    let porcentagem = (xp / 1000) * 100;

    document.getElementById("xp-barra").style.width =
    porcentagem + "%";

}

function concluirMissao(valor) {

    xp += valor;

    if (xp >= 1000) {

        nivel++;

        xp -= 1000;

        alert("🎉 Você subiu de nível!");

    }

    document.getElementById("xp").textContent = xp;

    document.getElementById("nivel").textContent = nivel;

    atualizarBarra();

}

let missoes = [

    {
        nome: "Primeiro solo",
        descricao: "Executar seu primeiro solo musical",
        xp: 100
    },

    {
        nome: "Criar uma função",
        descricao: "Criar sua primeira função",
        xp: 150
    },

    {
        nome: "Manipular o DOM",
        descricao: "Alterar um elemento HTML usando JS",
        xp: 200
    },

    {
        nome: "Criar sistema de XP",
        descricao: "Implementar o sistema de experiência",
        xp: 300
    }

];

function carregarMissoes() {

    let lista = document.getElementById("lista-missoes");

    lista.innerHTML = "";

    missoes.forEach(function(missao, indice) {

        let elemento = document.createElement("div");

        elemento.classList.add("mission");

        elemento.innerHTML = `

            <div>

                <h3>${missao.nome}</h3>

                <p>${missao.descricao}</p>

            </div>

            <button onclick="concluirMissao(${missao.xp})">

                +${missao.xp} XP

            </button>

        `;

        lista.appendChild(elemento);

    });

}
carregarMissoes();

function verificarConquistas() {

    if (xp >= 500) {

        alert("🏆 Conquista desbloqueada!");

    }

}

verificarConquistas();
localStorage.setItem("xp", xp);
localStorage.setItem("nivel", nivel);

xp = Number(localStorage.getItem("xp")) || 0;

nivel = Number(localStorage.getItem("nivel")) || 1;