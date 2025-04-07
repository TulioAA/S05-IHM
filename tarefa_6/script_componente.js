class AulasComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.hoje = this.getHoje(); // Define o dia atual automaticamente
        this.loadData();
    }

    // Função que retorna o dia da semana atual em formato reduzido ('seg', 'ter', etc.)
    getHoje() {
        const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        const hoje = new Date();
        return diasSemana[hoje.getDay()]; // Retorna o nome do dia da semana
    }

    async loadData() {
        try {
            const response = await fetch('aulas.json'); // Pega os dados do arquivo JSON
            const aulas = await response.json(); // Converte a resposta em JSON
            this.render(aulas); // Passa os dados para renderização
        } catch (error) {
            console.error('Erro ao carregar os dados das aulas:', error);
        }
    }

    render(aulas) {
        const aulasDia = aulas.filter(a => a.data === this.hoje); // Filtra aulas que acontecem no dia atual

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'styles_componente.css'; 
        this.shadowRoot.appendChild(link); 

        // Cria o conteúdo de exibição para as aulas
        this.shadowRoot.innerHTML += `
            <div>
                ${aulasDia.map(a => {
                    let provaDisplay = a.prova_alert ? '' : 'display: none;';
                    const notaCor = this.getNotaCor(a.nota); // Chama função para definir a cor da nota
                    return `
                        <div class="comp-aula">
                            <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
                            <div class="titulo_aula">${a.disciplina}</div>
                            <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
                            <div class="lables">
                                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                                <div class="lable-nota p_lable" style="background-color: ${notaCor}">CR: <b>${a.nota}</b></div> <!-- Aplica a cor da nota -->
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    // Função que determina a cor da nota com base na regra fornecida
    getNotaCor(nota) {
        if (nota < 6) {
            return 'red'; // Nota abaixo de 6, cor vermelha
        } else if (nota >= 6 && nota < 8) {
            return 'orange'; // Nota entre 6 e 8, cor laranja
        } else {
            return 'green'; // Nota acima de 8, cor verde
        }
    }
}

customElements.define('aulas-component', AulasComponent); // Define o componente
