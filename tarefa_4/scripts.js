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
  }
  
  function temaInatel() {
      document.documentElement.style.setProperty('--cor-click', '#126ae2');
      document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
      document.documentElement.style.setProperty('--cor-back2', '#6a937a');
      document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    
  }
  const carousel = document.querySelector('.carousel');

// Função para criar os cards
function createCards() {
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
}

// Controle do carrossel
let index = 0;
function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Adicionando interatividade
document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

// Arrastar no celular
let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

// Inicializando o carrossel
createCards();