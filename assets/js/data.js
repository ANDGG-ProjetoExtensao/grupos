/**
 * ARQUIVO DE CONFIGURAÇÃO DO PROJETO
 * -------------------------------------------------------------------------
 * Este arquivo controla todo o conteúdo textual e visual da página do grupo.
 * NÃO é necessário editar os arquivos HTML ou CSS para alterar textos e imagens.
 * * INSTRUÇÕES DE USO:
 * 1. Mantenha a estrutura do código, editando apenas o texto dentro das aspas ("...").
 * 2. As imagens dos integrantes devem ser salvas na pasta 'assets/images'.
 * 3. Se não quiser usar um campo opcional, deixe as aspas vazias ("").
 */

const projectData = {
    // =========================================================================
    // SEÇÃO 1: INFORMAÇÕES GERAIS
    // =========================================================================
    
    // Título principal que aparece no centro da tela com efeito de digitação.
    title: "Sistema de Monitoramento IoT",

    // Descrição breve do projeto. Evite textos muito longos (max 3 linhas) para não poluir o visual.
    description: "Este projeto visa solucionar o problema de desperdício hídrico no campus utilizando sensores de fluxo conectados a uma rede mesh. A aplicação processa os dados em tempo real e gera alertas via dashboard.",
    
    // Link para onde o botão "< Acessar Projeto />" irá redirecionar.
    // Pode ser o repositório (GitHub), o protótipo (Figma) ou o site publicado.
    projectLink: "https://projeto-grupo-x.herokuapp.com",

    // =========================================================================
    // SEÇÃO 2: INTEGRANTES DO GRUPO
    // =========================================================================
    
    // Adicione ou remova blocos {...} para ajustar o número de integrantes.
    // O layout se adapta automaticamente, mas recomenda-se no máximo 5 pessoas.
    members: [
        {
            // Nome que aparecerá abaixo da foto
            name: "Ana Silva",
            
            // Função no grupo (Ex: Frontend, Backend, Documentação, Hardware)
            role: "Fullstack Dev",
            
            // Caminho exato da foto. 
            // DICA: Use fotos quadradas (proporção 1:1) para melhor enquadramento no hexágono.
            image: "assets/images/member1.jpg",
            
            // Link para LinkedIn, GitHub ou Portfólio.
            // Se deixar vazio (""), o link 'Link' não aparecerá no card.
            socialLink: "https://linkedin.com/in/ana" 
        },
        {
            name: "Carlos Souza",
            role: "Hardware & IoT",
            image: "assets/images/member2.jpg",
            socialLink: "https://github.com/carlos"
        },
        {
            name: "Beatriz Lima",
            role: "Frontend & UX",
            image: "assets/images/member3.jpg",
            socialLink: "https://behance.net/bia"
        },
        {
            name: "João Pedro",
            role: "Backend Dev",
            image: "assets/images/member4.jpg",
            socialLink: "https://github.com/jp"
        },
        {
            name: "Lucas Pereira",
            role: "Documentation",
            image: "assets/images/member5.jpg",
            socialLink: "" // Exemplo de campo vazio: o link não será gerado
        }
    ]
};