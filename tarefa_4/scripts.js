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
  // Dados dos eventos
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

  // Função para carregar os eventos e exibi-los na página
  function carregarEventos() {
      const eventosContainer = document.getElementById("eventos-container"); // Obtém o contêiner onde os eventos serão exibidos

      // Para cada evento, cria um card e adiciona ao contêiner
      eventos.forEach(evento => {
          const card = document.createElement("div"); // Cria um novo elemento div para o card
          card.classList.add("evento-card"); // Adiciona uma classe para o estilo do card

          // Preenche o HTML do card com as informações do evento
          card.innerHTML = `
              <div class="shadow-lg mb-10 rounded-lg">
                  <img class="rounded-t-lg mb-2" src="${evento.image}" alt="${evento.title}">
                  <div class="flex flex-col justify-center items-center">
                      <h2><strong>${evento.title}</strong></h2>
                      <p class="text-sm text-center">${evento.description}</p>
                      <div class="flex flex-row gap-4 mb-3">
                          <p class="text-sm">${evento.date} às ${evento.time}</p>
                          <p class="text-sm">${evento.location}</p>
                      </div>
                  </div>
              </div>
          `;

          // Adiciona o card ao contêiner de eventos
          eventosContainer.appendChild(card);
      });
  }

  // Chama a função para carregar e exibir os eventos
  carregarEventos();
});