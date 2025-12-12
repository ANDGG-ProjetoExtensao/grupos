# 🚀 Template de Apresentação de Projetos - Extensão IFSP

Este repositório contém um template para as páginas de apresentação dos grupos da disciplina de **Extensão - Engenharia da Computação (IFSP)**.

O projeto foi desenvolvido com foco em **Clean Code**, alta performance e **Design Responsivo**, garantindo que a apresentação funcione perfeitamente desde celulares até monitores Ultrawide.

### 👩‍💻 Desenvolvedora: [nathaliegx](https://github.com/xgeilahtan)

---

## 📸 Preview

![Preview do Layout](assets/images/preview.jpg)

### -> **[Clique aqui para ver o site funcionando](https://andgg-projetoextensao.github.io/grupos/)** <-
---

## ✨ Funcionalidades

* **Configuração Centralizada:** Todo o conteúdo (textos, links e integrantes) é editável através de um único arquivo JSON (`data.js`).
* **Design Responsivo Fluido:** Utilização de unidades relativas (`rem`, `vw`, `clamp`) ao invés de pixels fixos. O layout se adapta matematicamente ao tamanho da tela.
* **Identidade Visual Tech:** Tema escuro com estética "Cyberpunk/Minimalista", alinhado ao curso de Engenharia da Computação.
* **Semântica & Acessibilidade:** HTML estruturado e uso de tags modernas.

---

## 📂 Estrutura de Arquivos

A estrutura foi pensada para separar lógica, estilo e conteúdo:

```
/
├── index.html          # Estrutura base (NÃO É NECESSÁRIO EDITAR)
├── style.css           # Estilização global e variáveis de cor
└── assets/
    ├── images/         # Coloque as fotos dos integrantes aqui
    └── js/
        ├── data.js     # ⚙️ ARQUIVO DE CONFIGURAÇÃO (Edite aqui)
        └── script.js   # Lógica de renderização (Não mexer)
```
## 🛠️ Como Utilizar (Guia Rápido)
Para garantir que cada grupo tenha sua própria página separada sem alterar o template original, utilizaremos o fluxo de Fork.

1. Faça um Fork deste Repositório
No canto superior direito desta página, clique no botão Fork. Isso criará uma cópia exata deste projeto na sua conta do GitHub. A partir de agora, você trabalhará nessa cópia.

2. Clone o SEU Repositório
Vá para o repositório que você acabou de criar (na sua conta) e faça o clone:

```

# Substitua SEU_USUARIO pelo seu nome de usuário do GitHub
git clone [https://github.com/SEU_USUARIO/grupos.git](https://github.com/SEU_USUARIO/grupos.git)
```
3. Adicione as Fotos
Salve as fotos dos integrantes na pasta assets/images/.

Dica: Para o formato hexagonal ficar perfeito, utilize imagens com proporção quadrada (1:1).

4. Edite o Conteúdo (data.js)
Abra o arquivo assets/js/data.js em seu editor de código. Este arquivo contém um objeto JSON onde você define tudo.

Exemplo de edição:
```
JavaScript

const projectData = {
    title: "Nome do Seu Projeto",
    description: "Resumo do que o seu grupo está desenvolvendo...",
    projectLink: "[https://link-do-seu-projeto.com](https://link-do-seu-projeto.com)",
    accentColor: "#32A041", // Escolha a cor tema do grupo
    
    members: [
        {
            name: "Fulano da Silva",
            role: "Frontend Dev",
            image: "assets/images/foto-fulano.jpg",
            socialLink: "[https://linkedin.com/in/fulano](https://linkedin.com/in/fulano)"
        },
        // Adicione mais blocos {...} para mais integrantes
    ]
};
```

5. Coloque o site no ar (GitHub Pages)
Após fazer o git push das suas alterações para o seu fork:

Vá nas Settings (Configurações) do seu repositório.

No menu lateral, clique em Pages.

Em Source, selecione Deploy from a branch.

Em Branch, selecione main e salve.

O GitHub irá gerar o link exclusivo da página do seu grupo!

⚠️ Importante
Não faça Pull Requests alterando o conteúdo do site para este repositório de template. Cada grupo deve manter seu site hospedado em seu próprio Fork **E** na Hospedagem do Professor. Utilize este repositório apenas como base inicial.

🎨 Personalização Avançada (Opcional)
Se desejar alterar as cores para combinar com a identidade visual específica do seu projeto, edite as Variáveis CSS no topo do arquivo style.css:

CSS

:root {
    /* Mude apenas os códigos Hexadecimais */
    --accent-color: #32A041; /* Cor Destaque (Verde Padrão) */
    --danger-color: #CB0C1F; /* Cor Secundária */
    --bg-color: #121212;     /* Fundo */
}
🚀 Tecnologias Utilizadas
HTML5 (Semântico)

CSS3 (Flexbox, Grid Layout, CSS Variables, Clamp Functions)

JavaScript (ES6+, Manipulação de DOM)

🤝 Contribuição
Sinta-se à vontade para sugerir melhorias na estrutura do template através de Issues ou Pull Requests. Mantenha o código limpo e comentado!

Desenvolvido para o IFSP - Engenharia da Computação
