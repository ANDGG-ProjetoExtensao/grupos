/*
 * SCRIPT PRINCIPAL DA PÁGINA
 * -------------------------------------------------------------------------
 * Objetivo: Ler as configurações do arquivo 'data.js' e preencher o HTML.
 * Isso permite que o template seja replicável sem alterar a lógica de programação.
 */

// Aguarda todo o HTML carregar antes de tentar manipular os elementos
document.addEventListener('DOMContentLoaded', () => {
    loadProjectData();
});

function loadProjectData() {
    // Acessa a variável global 'projectData' definida em data.js
    if (typeof projectData === 'undefined') {
        console.error("Erro: Arquivo 'data.js' não encontrado ou mal formatado.");
        return;
    }

    // 1. Preenchimento do Cabeçalho e Descrição
    const titleElement = document.getElementById('project-title');
    const descElement = document.getElementById('project-description');
    const linkElement = document.getElementById('project-link');

    // Injeta texto simples (textContent é mais seguro que innerHTML para textos puros)
    descElement.textContent = projectData.description;
    linkElement.href = projectData.projectLink;
    
    // Atualiza a Variável CSS globalmente para mudar a cor do tema
    document.documentElement.style.setProperty('--accent-color', projectData.accentColor);

    // Inicia a animação de digitação no título
    typeWriter(projectData.title, titleElement);

    // 2. Renderização da Lista de Integrantes
    renderTeamMembers();
}

function renderTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    
    // Limpa conteúdo pré-existente (caso haja) para evitar duplicação
    teamGrid.innerHTML = '';

    projectData.members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        // Template String para montar a estrutura HTML do Card
        // A condicional ternária (? :) verifica se existe link social antes de criar a tag <a>
        card.innerHTML = `
            <div class="image-container">
                <img src="${member.image}" alt="Foto de ${member.name}" loading="lazy">
                <div class="overlay">
                    <span class="icon">/></span> 
                </div>
            </div>
            <h3>${member.name}</h3>
            <span class="role-badge">${member.role}</span>
            ${member.socialLink ? `<a href="${member.socialLink}" target="_blank" class="social-mini-link">Link</a>` : ''}
        `;

        teamGrid.appendChild(card);
    });
}

/**
 * Efeito visual de máquina de escrever.
 * @param {string} text - O texto a ser digitado.
 * @param {HTMLElement} element - O elemento onde o texto será inserido.
 */
function typeWriter(text, element, speed = 100) {
    let i = 0;
    element.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Adiciona o cursor piscante ao final da animação
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}