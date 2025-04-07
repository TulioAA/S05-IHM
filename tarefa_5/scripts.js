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

  document.addEventListener("DOMContentLoaded", function () {
    const eventos = [
       {
          id: 1,
          title: 'Semana do Software 2025',
          date: '12/05',
          time: '10:00',
          location: 'Salão de Eventos',
          type: 'tech',
          description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
       },
       {
          id: 2,
          title: 'Workshop de IoT',
          date: '12/01',
          time: '08:00',
          location: 'Laboratório CS&I',
          type: 'tech',
          description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
       },
       {
          id: 3,
          title: 'Festa dos Alunos 2025',
          date: '18/05',
          time: '19:00',
          location: 'Área Esportiva do Inatel',
          type: 'cultural',
          description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
          image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
       },
       {
          id: 4,
          title: 'Feira de Oportunidades',
          date: '04/05',
          time: '10:00',
          location: 'Salão de Eventos',
          type: 'academic',
          description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
          image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
       }
    ];
 
    // Carregar eventos no carrossel
    function carregarEventos() {
       const eventosContainer = document.getElementById("carousel");
 
       eventos.forEach(evento => {
          const card = document.createElement("div");
          card.classList.add("card");
 
          card.innerHTML = `
             <img class="rounded-t-lg mb-2" src="${evento.image}" alt="${evento.title}">
             <div class="flex flex-col justify-center items-center">
                <h2><strong>${evento.title}</strong></h2>
                <p class="text-sm text-center">${evento.description}</p>
                <div class="flex flex-row gap-4 mb-3">
                   <p class="text-sm">${evento.date} às ${evento.time}</p>
                   <p class="text-sm">${evento.location}</p>
                </div>
             </div>
          `;
 
          eventosContainer.appendChild(card);
       });
    }
    carregarEventos();
 
    // Controle do índice de navegação
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
       const eventosContainer = document.getElementById("carousel");
       eventosContainer.style.transform = `translateX(-${index * 100}%)`; // Aqui, a transformação da posição
    }
 
    // Função para iniciar o slide automático
    function startAutoSlide() {
       interval = setInterval(nextCard, 5000);
    }
 
    // Função para parar o slide automático
    function stopAutoSlide() {
       clearInterval(interval);
    }
 
    // Eventos de navegação manual (click)
    document.getElementById('nextBtn').addEventListener('click', nextCard);
    document.getElementById('prevBtn').addEventListener('click', prevCard);
 
    // Eventos de navegação por toque (touch)
    let startX;
    const carousel = document.getElementById('carousel');
    carousel.addEventListener('touchstart', (e) => {
       startX = e.touches[0].clientX;
    });
    carousel.addEventListener('touchend', (e) => {
       let endX = e.changedTouches[0].clientX;
       if (startX - endX > 50) nextCard();
       if (endX - startX > 50) prevCard();
    });
 
    // Controle do auto slide
    carousel.addEventListener('mouseover', stopAutoSlide);
    carousel.addEventListener('mouseout', startAutoSlide);
 
    // Iniciar o auto slide
    startAutoSlide();
 });
 