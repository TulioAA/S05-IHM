function openMenu() {
    document.getElementById("menu_aba").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#2900F9');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#18FA14');
    document.documentElement.style.setProperty('--cor-back2', '#3E7A3D');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#FA6B00');
    localStorage.setItem("tema", "verde");
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    localStorage.setItem("tema", "inatel");
}

function mostrarVagas() {
    document.getElementById('conteudoPrincipal').style.display = 'none';
    document.getElementById('vagas').style.display = 'block';
}

function mostrarPrincipal() {
    document.getElementById('vagas').style.display = 'none';
    document.getElementById('conteudoPrincipal').style.display = 'block';
    carregarInscricoes();
}

function abrirFormulario(botao) {
    const form = botao.nextElementSibling;
    const mensagem = form.querySelector('.mensagem');
    mensagem.style.display = 'block';
    form.style.display = 'block';
    botao.style.display = 'none';
}

function enviarFormulario(botao) {
    const div = botao.parentElement;
    const input = div.querySelector('input[type="file"]');
    const vagaDiv = div.closest('.vaga');
    const tituloVaga = vagaDiv.getAttribute("data-titulo");

    if (input.files.length === 0) {
        alert('Por favor, anexe o currículo!');
        return;
    }

    div.innerHTML = '<strong>Inscrição realizada!</strong>';
    salvarInscricao(tituloVaga);
}
function salvarInscricao(titulo) {
    let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
    if (!inscricoes.includes(titulo)) {
        inscricoes.push(titulo);
        localStorage.setItem("inscricoes", JSON.stringify(inscricoes));
    }
    carregarInscricoes();
    atualizarVisualDasVagasInscritas();

}

function carregarInscricoes() {
    const container = document.getElementById("listaInscricoes");
    let inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];

    if (inscricoes.length === 0) {
        container.innerHTML = "<p>Você ainda não se inscreveu em nenhuma vaga.</p>";
    } else {
        container.innerHTML = "";
        inscricoes.forEach(titulo => {
            const p = document.createElement("p");
            p.textContent = "- " + titulo;
            container.appendChild(p);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const eventos = [
        { title: 'Semana do Software 2025', description: 'Tecnologia e inovação.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400' },
        { title: 'Workshop de IoT', description: 'Aplicações na indústria 4.0.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400' },
        { title: 'Festa dos Alunos 2025', description: 'Comemore conosco!', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400' }
    ];

    const eventosContainer = document.getElementById("carousel");

    eventos.forEach(evento => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${evento.image}" alt="${evento.title}">
            <div>
                <h2>${evento.title}</h2>
                <p>${evento.description}</p>
            </div>
        `;
        eventosContainer.appendChild(card);
    });

    let index = 0;

    function updateCarousel() {
        eventosContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextCard() {
        index = (index + 1) % eventos.length;
        updateCarousel();
    }

    function prevCard() {
        index = (index - 1 + eventos.length) % eventos.length;
        updateCarousel();
    }

    document.getElementById('nextBtn').addEventListener('click', nextCard);
    document.getElementById('prevBtn').addEventListener('click', prevCard);

    let interval = setInterval(nextCard, 3000);

    eventosContainer.addEventListener('mouseover', function () {
        clearInterval(interval);
    });

    eventosContainer.addEventListener('mouseout', function () {
        interval = setInterval(nextCard, 3000);
    });

    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "verde") temaLim();
    else temaInatel();

    carregarInscricoes();
});
function atualizarVisualDasVagasInscritas() {
    const inscricoes = JSON.parse(localStorage.getItem("inscricoes")) || [];
    const todasAsVagas = document.querySelectorAll(".vaga");

    todasAsVagas.forEach(vaga => {
        const titulo = vaga.getAttribute("data-titulo");

        if (inscricoes.includes(titulo)) {
            const inscricaoDiv = vaga.querySelector(".inscricao");
            inscricaoDiv.innerHTML = "<strong>Inscrição realizada!</strong>";
        }
    });
}

atualizarVisualDasVagasInscritas();
