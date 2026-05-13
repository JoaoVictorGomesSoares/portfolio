import {assets} from './assets.js';

// Configurações globais de idioma e tema
const DEFAULT_LOCALE = "pt-BR"; //idioma padrão do site
const LOCALE_STORAGE_KEY = "portfolio-locale"; // chave usada para salvar idioma no local storage
const THEME_STORAGE_KEY = "portfolio-theme"; // chave usada para salvar tema no local storage
const LOCALE_FILES = { "pt-BR" : "pt.json", "en-US" : "en.json"}; // mapeando os arquivos JSON de tradução
const THEMES = ["light", "dark"];

// Dados de PROJETOS
const projectsData = {
    1: {
        // Nome principal do projeto
        name: "DEMANDS",

        // Subtítulo exibido no card/modal
        subtitle: "Organize tarefas de equipes",

        // Descrição curta usada nos cards
        cardDescription: "Uma aplicação planejada para auxiliar grandes equipes a organizar demandas, prioridades, prazos e o alinhamento do trabalho.",

        // Texto principal exibido no modal
        overview: "Gerencie bugs, melhorias e tarefas com simplicidade. O Demands centraliza demandas, define prioridades e prazos, garantindo organização, foco e alinhamento da equipe no dia a dia corporativo.",

        // Lista de funcionalidades do projeto
        functionalities: [
            "Centralização de demandas",
            "Definição de prioridades e prazos",
            "Organização da equipe",
            "Acompanhamento de bugs e melhorias"
        ],

        // Benefícios percebidos do uso do sistema
        advantages: [
            "Maior organização no trabalho",
            "Foco nas tarefas prioritárias",
            "Alinhamento da equipe",
            "Redução de retrabalho"
        ],

        // Informações técnicas resumidas
        specs: "Aplicação web desenvolvida com tecnologias front-end modernas, responsiva e otimizada para performance.",

        // Objetivo principal do projeto
        purpose: "Facilitar o gerenciamento de projetos e tarefas em equipes de desenvolvimento.",

        // Tecnologias utilizadas (renderizadas como tags)
        technologies: ["HTML", "CSS", "JavaScript"],

        // Caminhos das imagens exibidas no modal
        images: [
            "assets/projects/demands/demands1-modal-375w.webp",
            "assets/projects/demands/demands2-modal-375w.webp",
            "assets/projects/demands/demands3-modal-375w.webp",
            "assets/projects/demands/demands4-modal-375w.webp",
            "assets/projects/demands/demands5-modal-375w.webp",
            "assets/projects/demands/demands6-modal-375w.webp",
            "assets/projects/demands/demands7-modal-375w.webp"
        ],

        // Links externos relacionados ao projeto
        links: {
            deploy: "Em desenvolvimento", // Não manter null quando não houver deploy
            repo: "https://github.com/JoaoVictorGomesSoares/Demands"
        }
    },
    2: {
        name: "GLASSES",
        subtitle: "E-commerce de Óculos",
        cardDescription: "Um e-commerce de Óculos com catálogo de produtos, autenticação de usuário, carrinho de compras e integração com APIs.",
        overview: "Uma solução de e-commerce para o segmento óptico, com catálogo de produtos, autenticação de usuários, carrinho de compras e integração com APIs externas.",
        functionalities: [
            "Carrinho de compras",
            "Autenticação de usuário",
            "Integração com APIs",
            "Interface responsiva"
        ],
        advantages: [
            "Experiência de compra fluida",
            "Segurança na autenticação",
            "Integração com sistemas externos",
            "Performance otimizada"
        ],
        specs: "Aplicação com arquitetura Java e Spring Boot, autenticação de usuários, regras de negócio para compras e persistência de dados.",
        purpose: "Criar uma plataforma de e-commerce completa e escalável.",
        technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
        images: [
            "assets/projects/glasses/glasses1-modal-375w.webp",
            "assets/projects/glasses/glasses2-modal-375w.webp",
            "assets/projects/glasses/glasses3-modal-375w.webp",
            "assets/projects/glasses/glasses4-modal-375w.webp",
            "assets/projects/glasses/glasses5-modal-375w.webp",
            "assets/projects/glasses/glasses6-modal-375w.webp"
        ],
        links: {
            deploy: "Em desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares/Glasses"
        }
    },
    3: {
        name: "Stell Fighters",
        subtitle: "Jogo interativo",
        cardDescription: "Um jogo interativo desenvolvido com Java. Oferece uma experiência divertida e desafiadora com mecânicas bem pensadas.",
        overview: "Um jogo interativo focado em diversão e progressão, com mecânicas claras, desafios crescentes e jogabilidade pensada para manter o ritmo do jogador.",
        functionalities: [
            "Mecânicas progressivas",
            "Controles responsivos",
            "Sistema de desafios",
            "Experiência divertida e competitiva"
        ],
        advantages: [
            "Jogabilidade envolvente",
            "Estrutura pensada para evolução",
            "Desafio equilibrado",
            "Projeto ideal para praticar lógica e arquitetura"
        ],
        specs: "Projeto em Java com foco em organização do código, lógica de jogo e estruturação de regras para uma experiência consistente.",
        purpose: "Criar uma experiência interativa e desafiadora com foco em lógica e diversão.",
        technologies: ["Java", "POO", "Lógica de Jogo"],
        images: ["assets/default-card-375w.webp"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    4: {
        name: "AUTH SERVER",
        subtitle: "Sistema de Autenticação e Autorização",
        cardDescription: "API responsável por autenticação segura de usuários, utilizando JWT, controle de roles e permissões, seguindo boas práticas de segurança com Spring Security.",
        overview: "API responsável por autenticação segura de usuários, com uso de JWT, controle de roles e permissões e aplicação de boas práticas com Spring Security.",
        functionalities: [
            "Autenticação segura",
            "Controle de roles e permissões",
            "Gestão de tokens JWT",
            "Integração com sistemas externos"
        ],
        advantages: [
            "Segurança robusta",
            "Facilidade de integração",
            "Compatibilidade com padrões da indústria",
            "Manutenção simplificada"
        ],
        specs: "API REST desenvolvida com Spring Boot, utilizando PostgreSQL como banco de dados e JWT para gerenciamento de tokens.",
        purpose: "Fornecer um sistema de autenticação e autorização seguro e escalável.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Spring Security"],
        images: ["assets/AUTH-SERVER-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    5: {
        name: "FINTAB (App de finanças)",
        subtitle: "API de Controle Financeiro",
        cardDescription: "API REST para gerenciamento de finanças pessoais, com registro de receitas e despesas, categorização e cálculo automático de saldo.",
        overview: "API REST para organizar finanças pessoais com registros de receitas e despesas, categorização por tipo e cálculo automático de saldo.",
        functionalities: [
            "Registro de receitas e despesas",
            "Categorização de transações",
            "Cálculo automático de saldo",
            "Relatórios financeiros"
        ],
        advantages: [
            "Facilidade de uso",
            "Integração com sistemas existentes",
            "Segurança na manipulação de dados financeiros",
            "Relatórios detalhados"
        ],
        specs: "API REST desenvolvida com Spring Boot, utilizando PostgreSQL como banco de dados.",
        purpose: "Fornecer uma solução completa para o gerenciamento financeiro pessoal.",
        technologies: ["Spring Boot", "PostgreSQL", "JWT"],
        images: ["assets/CONTA-DIGITAL-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    6: {
        name: "AGENDA (Dentista ou Esteticista)",
        subtitle: "Sistema de Agendamento de Serviços",
        cardDescription: "Backend para agendamento de serviços, com controle de horários disponíveis, validação de conflitos e gerenciamento completo dos agendamentos.",
        overview: "Backend para gestão de agendamentos com controle de horários, validação de conflitos e organização completa das reservas.",
        functionalities: [
            "Marcação de horários",
            "Gerenciamento de serviços",
            "Notificações automáticas",
            "Relatórios de agendamento"
        ],
        advantages: [
            "Facilidade de uso",
            "Agilidade no processo de agendamento",
            "Personalização das preferências",
            "Acompanhamento em tempo real"
        ],
        specs: "Backend desenvolvido com Spring Boot, persistência em PostgreSQL, validações de conflito e envio de notificações automatizadas.",
        purpose: "Fornecer uma solução eficiente para o gerenciamento de agendamentos de serviços.",
        technologies: ["Spring Boot", "Scheduler", "PostgreSQL", "Java Mail / SMTP"],
        images: ["assets/AGENDA-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    7: {
        name: "CHATREPETECO",
        subtitle: "API de Chat em Tempo Real",
        cardDescription: "Sistema de comunicação em tempo real utilizando WebSocket, permitindo conversas privadas ou em grupo com histórico de mensagens.",
        overview: "API de comunicação em tempo real usando WebSocket para permitir conversas privadas, em grupo e com histórico persistido.",
        functionalities: [
            "Mensagens instantâneas",
            "Sistema de grupos",
            "Notificações automáticas",
            "Histórico de conversas"
        ],
        advantages: [
            "Comunicação eficiente",
            "Interface intuitiva",
            "Segurança nas comunicações",
            "Integração com outras aplicações"
        ],
        specs: "API em Spring Boot com comunicação em tempo real via WebSocket, persistência em PostgreSQL, uso de Redis e autenticação com JWT.",
        purpose: "Fornecer uma solução de chat em tempo real para melhorar a comunicação entre usuários.",
        technologies: ["Spring Boot", "WebSocket", "PostgreSQL", "Redis", "JWT"],
        images: ["assets/CHATREPETECO-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    8: {
        name: "NOTIFICA",
        subtitle: "Sistema de Notificações (Microserviço)",
        cardDescription: "Microserviço para envio de notificações de forma assíncrona, utilizando filas para garantir desempenho, escalabilidade e tolerância a falhas.",
        overview: "Microserviço dedicado ao envio assíncrono de notificações, com foco em confiabilidade, filas de processamento e escalabilidade.",
        functionalities: [
            "Envio de notificações",
            "Gerenciamento de canais",
            "Personalização das preferências",
            "Relatórios de notificações"
        ],
        advantages: [
            "Entrega rápida das notificações",
            "Flexibilidade na configuração",
            "Integração com sistemas existentes",
            "Relatórios detalhados"
        ],
        specs: "Microserviço em Spring Boot para processamento assíncrono de notificações, integrado a mensageria e SMTP para entrega confiável.",
        purpose: "Fornecer uma solução eficiente para o gerenciamento de notificações em tempo real.",
        technologies: ["Spring Boot", "Docker", "RabbitMQ ou Kafka", "SMTP"],
        images: ["assets/NOTIFICA-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    },
    9: {
        name: "AUDITORIA",
        subtitle: "API de Gestão de Usuários e Logs",
        cardDescription: "API corporativa para gerenciamento de usuários com registro de ações, auditoria completa e rastreabilidade das operações do sistema.",
        overview: "API corporativa para gestão de usuários e rastreamento de eventos, garantindo auditoria completa e monitoramento das operações do sistema.",
        functionalities: [
            "Registro de atividades",
            "Gestão de usuários",
            "Relatórios de auditoria",
            "Controle de acesso"
        ],
        advantages: [
            "Conformidade regulatória",
            "Rastreabilidade das ações",
            "Segurança dos dados",
            "Relatórios detalhados"
        ],
        specs: "API corporativa desenvolvida com Spring Boot, autenticação com JWT, persistência em PostgreSQL e rastreabilidade das operações.",
        purpose: "Fornecer uma solução completa para o gerenciamento de usuários e logs.",
        technologies: ["Spring Boot", "PostgreSQL", "JWT", "Auditoria"],
        images: ["assets/AUDITORIA-project-img.png"],
        links: {
            deploy: "Em Desenvolvimento",
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    }
};

// Dados de EDUCAÇÃO
const educationsData = {
    1: {
        // Título da formação
        title: "Bacharelado em Ciência da Computação",

        // Instituição (com emoji apenas visual)
        institution: "📚 Universidade Federal Fluminense (UFF)",

        // Período de duração
        period: "2026 - 2030",

        // Texto curto exibido no card
        cardDescription: "Formação completa em Ciência da Computação com ênfase em desenvolvimento de software, algoritmos, estruturas de dados e engenharia de software.",

        // Texto mais detalhado exibido no modal
        modalDescription: "Formação completa em Ciência da Computação com foco em desenvolvimento de software, algoritmos, estruturas de dados, banco de dados e engenharia de software.",

        // Conteúdos / tecnologias estudadas
        topics: ["Java", "Python", "C++", "SQL", "HTML", "CSS", "JavaScript"],

        // Link do certificado (pode ser exibido no modal)
        certificate: "https://drive.google.com/file/d/1Xo9n8s2mLh7l3Zt5v6u8w9y0a1b2c3d/view?usp=sharing"
    },
    2: {
        title: "Spring Boot Essentials",
        institution: "📖 Udemy",
        period: "2024",
        cardDescription: "Certificação em desenvolvimento com Spring Boot, cobrindo REST APIs, JPA, Hibernate e padrões de design.",
        modalDescription: "Formação prática em Spring Boot cobrindo APIs REST, injeção de dependência, persistência com JPA/Hibernate e boas práticas para aplicações Java modernas.",
        topics: ["Spring Boot", "Java", "REST APIs", "JPA", "Hibernate"],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    3: {
        title: "Java Advanced Programming",
        institution: "📖 Alura",
        period: "2023",
        cardDescription: "Certificação avançada em Java, explorando programação orientada a objetos, collections, streams e multithreading.",
        modalDescription: "Estudo aprofundado em Java com foco em programação orientada a objetos, coleções, streams, concorrência e construção de código mais robusto.",
        topics: ["Java", "POO", "Collections", "Streams", "Multithreading"],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    4: {
        title: "Git e GitHub Completo",
        institution: "📚 Udemy",
        period: "2023",
        cardDescription: "Curso completo sobre versionamento de códigos, Git e GitHub, incluindo workflows colaborativos e boas práticas.",
        modalDescription: "Capacitação focada em versionamento com Git, organização de branches, merges, pull requests e fluxos colaborativos em GitHub.",
        topics: ["Git", "GitHub", "Branches", "Pull Requests", "Workflow"],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    5: {
        title: "SQL e Banco de Dados",
        institution: "📚 Coursera",
        period: "2023",
        cardDescription: "Curso abrangente sobre SQL, normalização de dados, design de banco de dados e otimização de queries.",
        modalDescription: "Formação voltada para modelagem relacional, consultas SQL, normalização, performance e boas práticas de persistência de dados.",
        topics: ["SQL", "Modelagem Relacional", "Normalização", "Queries", "Otimização"],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    6: {
        title: "Clean Code e SOLID Principles",
        institution: "📚 Pluralsight",
        period: "2024",
        cardDescription: "Curso sobre melhores práticas de programação, padrões de design e princípios SOLID para código limpo e manutenível.",
        modalDescription: "Aprofundamento em legibilidade, refatoração, design orientado a objetos e aplicação dos princípios SOLID no dia a dia do desenvolvimento.",
        topics: ["Clean Code", "SOLID", "Refatoração", "Design", "Boas Práticas"],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    }
};

// Dados de EXPERIENCIAS PROFISSIONAIS
const experiencesData = {
    1: {
        // Período de atuação
        period: "2022 - 2023",

        // Cargo exercido
        title: "Freelancer - Backend",

        // Empresa (pode ser genérica)
        company: "Empresa X",

        // Texto curto exibido no card
        cardDescription: "Atuei como desenvolvedor Backend, trabalhando com tecnologias como Java, Spring e Git.",

        // Texto detalhado exibido no modal
        modalDescription: "Atuei como desenvolvedor backend em projetos sob demanda, criando APIs, organizando regras de negócio e estruturando fluxos para entregas consistentes.",

        // Principais atividades realizadas
        highlights: [
            "Implementação de APIs e regras de negócio.",
            "Versionamento e organização do fluxo de desenvolvimento com Git.",
            "Comunicação direta com demandas e ajustes de projeto."
        ],

        // Tags técnicas exibidas visualmente
        tags: ["Java", "Spring", "Git", "Backend"]
    },
    2: {
        period: "2023 - 2024",
        title: "Desenvolvedor Backend",
        company: "Empresa Y",
        cardDescription: "Atuei como desenvolvedor Backend, trabalhando com tecnologias como Java, Spring e C++.",
        modalDescription: "Trabalhei com desenvolvimento backend em soluções estruturadas, integrando APIs REST, persistência de dados e evolução contínua do código.",
        highlights: [
            "Desenvolvimento de APIs RESTful.",
            "Integração com bancos de dados e consultas otimizadas.",
            "Implementação de autenticação e autorização."
        ],
        tags: ["Java", "Spring", "C++", "SQL", "Backend"]
    },
    3: {
        period: "2024 - 2025",
        title: "Engenheiro de Software",
        company: "Empresa Z",
        cardDescription: "Atuei como engenheiro de software, trabalhando com tecnologias como Python e Java.",
        modalDescription: "Atuei no desenho e evolução de soluções escaláveis, colaborando com decisões técnicas, organização do código e melhoria contínua de processos.",
        highlights: [
            "Desenvolvimento de soluções escaláveis.",
            "Aplicação de práticas de desenvolvimento ágil.",
            "Colaboração técnica com equipes multidisciplinares."
        ],
        tags: ["Python", "Java", "SQL", "Clean Code", "Engenharia de Software"]
    }
};

// Fallbacks
const languageToggleFallbacks = {
    "pt-BR": { buttonText: "Idioma", ariaLabel: "Alterar idioma para inglês"},
    "en-US": { buttonText: "Language", ariaLabel: "Switch Language to Portuguese"}
};
//                     vvv aqui é no PLURAL
const themeLabelFallbacks = {
    "pt-BR": { enableDark: "Modo claro", enableLight: "Modo escuro"},
    "en-US": { enableDark: "Light mode", enableLight: "Dark mode"}
};

const expandButtonFallbacks = {
    "pt-BR": { expand: "Expandir seção", collapse: "Recolher seção" },
    "en-US": { expand: "Expand section", collapse: "Collapse section" }
};

// Imagens de avatares que eu tenho, tem que ser array pra conseguir trocar começa no index = 0
const avatarSources = [
    "assets/avatar1-about-750w.webp",
    "assets/avatar2-about-750w.webp",
    "assets/avatar3-about-750w.webp",
    "assets/avatar4-about-750w.webp"
];

let avatarIndex = 0; // Índice do avatar exibido
let currentTheme = "light"; // Tema atual

// Estrutura de estado (Memória Interna do Sistema)
const translationCache = new Map(); // Reutiliza o JSON que já foi carregado no CACHE
const fallbackSnapshots = new WeakMap(); // Se não tiver sendo usado limpa da memória
const activeModals = {
    project: null,
    education: null,
    experience: null
};
const modalMap = {
    "project-modal": "project",
    "education-modal": "education",
    "experience-modal": "experience"
};

// Variaveis que vou usar
let currentLocale = DEFAULT_LOCALE; // config global definida lá em cima de idioma
let currentTranslations = null; // se ainda não estiver carregado não quebra o código por causa dos testes

const defaultDocumentTitle = document.title; // Se a tradução falhar o título volta pro document.title pq ta salvo aqui
const defaultDocumentLanguage = document.documentElement.lang || DEFAULT_LOCALE; // recebe o idioma do HEAD do HTML OU recebe o DEFAULT_LOCALE

// Essas variveis recebem null pra não quebrar o código pq vou fazer testes do tipo
// if (!languagetoggle) return;
// Esse teste é pq se remover o elemento do HTML o código continua sem ele
let languageToggle = null; 
let languageToggleText = null; // ← FALTAVA ISSO
let languageToggleSelected = null;
let themeToggle = null;
let themeToggleText = null;
let langDropdown = null;
let languageDropdownOptions = null;
let vignette = null;
let languageDropdownAnimationFrame = null;
let languageDropdownHideTimer = null;
let languageDropdownTransitionController = null;

let languageDropdownDocumentClickHandler = null; // Aqui null é necessario pra funcionar
let languageDropdownKeydownHandler = null; // Aqui null é necessario pra funcionar

// Função "init()" inicia todas as outras funções, tem que ser "async" quando usa "await"
async function init() {
    initializeComponents(); // 1. Inicializando Componentes
    initializeAssets(); // 2. Carrega as imagens, Textos e Icones
    await initializeLocalization(); // 3. Verifica se o idioma é valido pra trocar e caso for, troca
}
init();

// 1. Inicializando Componentes
function initializeComponents() {
    initializeDOMReferences(); // Pega as variaveis que defini como "null" lá em cima e define com "getElementById"
    initializeFallbackTranslations(); // Salva os textos originais do HTML pra caso a tradução não carregue

    // Inicializando funções
    initializeFloatingEmojis();
    initializeThemeToggle();  //check
    initializeLanguageToggleAnimated();
    initializeLanguageDropdown();
    initializeExpandButtons();
    initializeAvatarSwitcher();
    initializeProjectCards(); // Cards
    initializeEducationCards(); // Cards
    initializeExperienceCards(); // Cards
    initializeHoverDimming(".skill-techs", ".skill-card"); // Efeito de Dimmed nesses cards
    initializeHoverDimming(".timeline-horizontal", ".timeline-preview"); // Efeito de Dimmed nesses cards
    initializeHoverDimming(".contact-card-grid", ".contact-card"); // Efeito de Dimmed nesses cards
    initializeModalControls(); // Fecha, Abre, Esc nos Modais
}

// Inicializa os Emojis Flutuantes do Avatar XD
function initializeFloatingEmojis() {
    const emojis = document.querySelectorAll(".emoji-wrapper");
    if (!emojis.length) return;

    emojis.forEach(emoji => {
        let currentX = 0;
        let currentY = 0;

        let targetX = randomBetween(-20, 20);
        let targetY = randomBetween(-20, 20);

        let paused = false;

        emoji.addEventListener("mouseenter", () => paused = true);
        emoji.addEventListener("mouseleave", () => {
            paused = false;
            targetX = randomBetween(-20, 20);
            targetY = randomBetween(-20, 20);
        });

        function animate() {
            if (!paused) {
                // Interpolação suave (lerp)
                currentX += (targetX - currentX) * 0.02;
                currentY += (targetY - currentY) * 0.02;

                emoji.style.transform = `translate(${currentX}px, ${currentY}px)`;

                // Quando chega perto do alvo, gera outro
                if (
                    Math.abs(targetX - currentX) < 0.5 &&
                    Math.abs(targetY - currentY) < 0.5
                ) {
                    targetX = randomBetween(-20, 20);
                    targetY = randomBetween(-20, 20);
                }
            }

            // ⚠️ SEMPRE continua o loop
            requestAnimationFrame(animate);
        }

        animate();
    });
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// 2. Carrega as imagens, Textos e Icones
function initializeAssets() {
    setAssets(); // Assets vou ver ainda oq faz
}

// 3. Verifica se o idioma é valido pra trocar e caso for, troca
async function initializeLocalization() {
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY); // Idioma salvo "localStorage.getItem(LOCALE_STORAGE_KEY)" vai retorna "pt-BR" ou "en-US" isso fica no local storage do navegador
    const isValidSavedLocale = savedLocale && savedLocale !== DEFAULT_LOCALE && LOCALE_FILES[savedLocale]; // isValidSavedLocale = existe idioma salvo? && idioma salvo é diferente do padrão? && esse idioma existe na variavel "LOCALE_FILES"
    
    //se é valido espera trocar o idioma
    if (isValidSavedLocale) { await switchLanguage(savedLocale, { persist: false }); return; }

    // SE NÃO Salva o idioma do "DEFAULT_LOCALE"
    localStorage.setItem( LOCALE_STORAGE_KEY, DEFAULT_LOCALE );
}

// função do 1. initializeComponents
function initializeDOMReferences() {
    //agora vou definir as variaveis pelos "IDs" no HTML, que se não existirem fica "null" que defini lá em cima
    languageToggle = document.getElementById("lang-toggle");
    themeToggle = document.getElementById("theme-toggle");
    langDropdown = document.getElementById("lang-dropdown");
    vignette = document.getElementById("theme-vignette");
    languageToggleText = languageToggle?.querySelector(".lang-text") || null;
    languageToggleSelected = languageToggle?.querySelector(".lang-code") || null;
    themeToggleText = themeToggle?.querySelector(".theme-btn-text") || null;

    languageDropdownOptions = langDropdown? langDropdown.querySelectorAll(".lang-dropdown-option") : null; // langDropdown existe? se sim executa : se não recebe null
}
// função do 1. initializeComponents
function initializeFallbackTranslations() {
    captureFallbackTranslations(); // 1. Salva os texto original para se caso a tradução falhar ou o JSON não carregar
    restoreFallbackTranslations(); // 3. Carrega os textos bases salvos antes se tradução falhar ou JSON não carregar
}
// função do 1. initializeComponents
function initializeThemeToggle() {
    if (!themeToggle || !vignette) { return; } // Se o botão ou a vinheta não existir encerra a função

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light"; // O tema recebe "THEME_STORAGE_KEY" do LocalStorage ou "light" por padrão
    setTheme(savedTheme); // Aplica o Tema

    // Ao clica no botão "themeToggle" execute
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-tema") || "light"; // "currentThme" recebe o tema atual do HTML ou "light" por padrão
        const nextTheme = currentTheme === "dark" ? "light" : "dark" // se o tema atual é "dark" ?? o proximo é "light" : Se não o proximo é "dark"
        
        themeToggle.classList.toggle("dark", nextTheme === "dark"); // Adiciona a classe "dark" no botão se o proximo tema for "dark"
        // TROCAR ESTILO DA VINHETA AQUI ⚠️
        vignette.style.background = nextTheme === "dark" ? "linear-gradient(90deg, #1e3a5f, #4da3ff)" : "linear-gradient(90deg, #4da3ff, #1e3a5f)"; // Se o proximo tema é "dark" o background da vinheta é um se não é o outro
        vignette.classList.add("active"); // Adiciona a classe "active" na vinheta o que faz tocar animação no CSS
        window.setTimeout(() => { setTheme(nextTheme); }, 1000) // Aplica o tema após 1000ms
        vignette.addEventListener("animationend", () => { vignette.classList.remove("active"); }, { once: true }) // Quando "vignette" estiver acabado de animationend remove a classe "active" um unica vez

    })
}
// função do 1. initializeComponents
function initializeLanguageToggle() {
    if (!languageToggle) { return; } // Se o botão existe executa, se não existir → encerra a função

    // TROCAR ESTILO DO BOTAO AQUI ⚠️
    updateLanguageToggle(); // Essa função altera o texto do botão, cores e etc... quando troca a linguagem
    languageToggle.addEventListener("click", handleLanguageToggleClick); // ao clicar executa a função "handleLanguageToggleClick"

    function handleLanguageToggleClick(event) {
        event.stopPropagation(); // Impede do "click" se propagar e ser detectado por outros elementos
        if (langDropdown?.hasAttribute("hidden")) {
            showLanguageDropdown();
        } else {
            hideLanguageDropdown();
        }
    }
}
// função do "initializeLanguageToggle" (função acima)
function showLanguageDropdown() {
    if (!langDropdown || !languageToggle) { return; } // Evita erro, se não existir o elemento encerra a função
    if (!langDropdown.hasAttribute("hidden")) { return; } // Se NÃO tiver o atributo "hidden" não faz nada pra não abrir duas vezes

    langDropdown.removeAttribute("hidden"); // Remove o atributo "hidden", exibe o Dropdown
    langDropdown.setAttribute("aria-hidden", "false");
    languageToggle.setAttribute("aria-expanded", "true"); // ARIA para acessibilidade
    positionLanguageDropdown();
    languageDropdownDocumentClickHandler = (event) => {
        const card = langDropdown.querySelector(".lang-dropdown-card"); // Area interna do Dropdown, o cartão
        if (!card || card.contains(event.target)) { return; } // Se clicar no card ou ele não existir, faça nada
        hideLanguageDropdown(); // Caso contrario, clicando fora do card ele fecha executando essa função
    };
    languageDropdownKeydownHandler = (event) => {
        if (event.key === "Escape") { hideLanguageDropdown(); } // Fecha com a tecla "ESC"
    }
    document.addEventListener("click", languageDropdownDocumentClickHandler);
    document.addEventListener("keydown", languageDropdownKeydownHandler);
    window.addEventListener("resize", positionLanguageDropdown); // Garante a posição mesmo se redimensionar
    window.addEventListener("scroll", positionLanguageDropdown, true); // Garante a posição mesmo se scrolar
    requestAnimationFrame(() => {
        const firstOption = langDropdown.querySelector(".lang-dropdown-option");
        if (firstOption) { firstOption.focus();} // Foca na opção do dropdown
    });
}
// função do "showLanguageDropdown" (função acima)
function positionLanguageDropdown() {
    if (!langDropdown || !languageToggle) { return; } // Guard Clause
    
    const card = langDropdown.querySelector(".lang-dropdown-card");
    if (!card) { return; }
    
    const buttonRect = languageToggle.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const margin = 8

    let left = buttonRect.right - cardRect.width; // Alinha a lateral direita do dropdown com a lateral direita do botão
    let top = buttonRect.bottom + margin;

    // Se sair para esquerda (left < margin), empurra para a direita
    if (left < margin) {
        left = margin;
    }

    // Se sair para direita, empurra para a esquerda
    if (left + cardRect.width > window.innerWidth - margin) {
        left = Math.max(margin, window.innerWidth - cardRect.width - margin);
    }

    // Se sair para baixo ele vai pra cima
    if (top + cardRect.height > window.innerHeight - margin) {
        top = Math.max(margin, buttonRect.top - cardRect.height - margin);
    }

    card.style.left = `${left}px`; // joga a variavel "left" pro CSS
    card.style.top = `${top}px`; // joga a variavel "top" pro CSS
}
// função do 1. initializeComponents
function initializeLanguageDropdown() {
    if (!langDropdown || !languageToggle || !languageDropdownOptions.length) { return; } // Se um desses elementos não existir → encerra a função

    // Para cada botao "languageDropdownOptions" adicione o evento de "click"
    languageDropdownOptions.forEach((button) => {
        button.addEventListener("click", handleLanguageOptionClick ); // Ao clicar execute a função "handleLanguageOptionClick"
    });

    async function handleLanguageOptionClick(event) {
        const selectedLang = event.currentTarget.dataset.lang; // Trocar idioma
        await selectLanguageFromDropdown(selectedLang); // Espera trocar
        hideLanguageDropdown(); // Fecha o dropdown
    }
}
// função do "initializeLanguageDropdown" (função acima)
function hideLanguageDropdown() {
    if (!langDropdown || langDropdown.hasAttribute("hidden")) { return; } // Se ele não existir ou ja estiver "hidden", encerra a função
    
    langDropdown.setAttribute("hidden", "true"); // Esconde o Dropdown
    langDropdown.setAttribute("aria-hidden", "true"); // ARIA
    languageToggle.setAttribute("aria-expanded", "false"); // ARIA
    
    if (languageDropdownDocumentClickHandler) {
        document.removeEventListener("click", languageDropdownDocumentClickHandler);
        languageDropdownDocumentClickHandler = null; // Essa variavel recebe "null" pra evitar bugs
    }
    if (languageDropdownKeydownHandler) {
        document.removeEventListener("keydown", languageDropdownKeydownHandler);
        languageDropdownKeydownHandler = null; // Essa também recebe "null" pra evitar bugs
    }
    
    window.removeEventListener("resize", positionLanguageDropdown);
    window.removeEventListener("scroll", positionLanguageDropdown, true);
}
// função do 1. initializeComponents
async function selectLanguageFromDropdown(selectedLang) {
    const isInvalidSelection = !selectedLang || selectedLang === currentLocale; //verifica se a lingua selecionada não existe ou já está selecioanda
    if (isInvalidSelection) { return; } // Se for invalida, encerra a função

    await switchLanguage(selectedLang, { persist : true }); // "persist : true" salva no LocalStorage
}
async function switchLanguage(targetLocale, options = {}) {
    if (!LOCALE_FILES[targetLocale] || !languageToggle || targetLocale === currentLocale) {
        return;
    }

    const { persist = true } = options;
    const previousLocale = currentLocale;

    lockLanguageToggle();

    try {
        const appliedLocale = await applyLocale(targetLocale);
        currentLocale = appliedLocale;
        persistLocale(currentLocale, persist);
    } catch (error) {
        currentLocale = recoverFromLanguageError(previousLocale);
        persistLocale(currentLocale, persist);
    } finally {
        updateLanguageToggle();
        unlockLanguageToggle();
    }
}
function lockLanguageToggle() {
    languageToggle.disabled = true;
    languageToggle.setAttribute("aria-busy", "true");
}
function unlockLanguageToggle() {
    languageToggle.disabled = false;
    languageToggle.removeAttribute("aria-busy");
}
function persistLocale(locale, persist) {
    if (persist) {
        localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
}
async function applyLocale(locale) {
    if (locale === DEFAULT_LOCALE) {
        restoreFallbackTranslations();

        try {
            const translations = await loadTranslations(DEFAULT_LOCALE);
            applyTranslations(translations);
        } catch (error) {
            console.warn("Não foi possível carregar o JSON padrão. Usando fallback.", error);
        }

        return DEFAULT_LOCALE;
    }

    const translations = await loadTranslations(locale);
    applyTranslations(translations);

    return locale;
}
function recoverFromLanguageError(previousLocale) {
    console.error("Falha ao carregar o idioma solicitado");

    if (previousLocale === DEFAULT_LOCALE) {
        restoreFallbackTranslations();
        return DEFAULT_LOCALE;
    }

    const cachedTranslations = translationCache.get(previousLocale);
    if (cachedTranslations) {
        applyTranslations(cachedTranslations);
        return previousLocale;
    }

    restoreFallbackTranslations();
    return DEFAULT_LOCALE;
}

// Função pra switchLanguage
async function loadTranslations(locale) {
    // Retorna do cache se já foi carregado
    if (translationCache.has(locale)) { return translationCache.get(locale); }

    const response = await fetch(LOCALE_FILES[locale], { cache: "no-cache" }); // Busca o arquivo JSON correspondente

    // Se falhar, lança erro
    if (!response.ok) {
        throw new Error(
            `Falha ao carregar ${LOCALE_FILES[locale]} (${response.status})`
        );
    }

    const data = await response.json(); // Converte para objeto JS
    translationCache.set(locale, data);// Armazena no cache
    return data;
}
// Função da função de cima "switchLanguage"
function applyTranslations(translations) {
    currentTranslations = translations; // Salva o objeto de traduções ativo

    document.title = getValueFromPath(translations, "meta.title") || defaultDocumentTitle; // Atualiza título e idioma do documento
    document.documentElement.lang = getValueFromPath(translations, "meta.lang") || currentLocale;

    const translatableElements = document.querySelectorAll( "[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]" ); // Seleciona novamente todos os elementos traduzíveis

    translatableElements.forEach((element) => {
        const fallback = fallbackSnapshots.get(element);
        if (!fallback) { return; } // Guard Clause Se não houver snapshot, não mexe no elemento

        // Tradução de texto simples
        if (element.dataset.i18n) {
            element.textContent = getTranslation(
                element.dataset.i18n,
                fallback.textContent
            );
        }

        // Tradução de HTML interno
        if (element.dataset.i18nHtml) {
            element.innerHTML = getTranslation(
                element.dataset.i18nHtml,
                fallback.innerHTML
            );
        }

        // Tradução de title
        if (element.dataset.i18nTitle) {
            element.setAttribute(
                "title",
                getTranslation(
                    element.dataset.i18nTitle,
                    fallback.title
                )
            );
        }

        // Tradução de aria-label
        if (element.dataset.i18nAriaLabel) {
            element.setAttribute(
                "aria-label",
                getTranslation(
                    element.dataset.i18nAriaLabel,
                    fallback.ariaLabel
                )
            );
        }

        // Tradução de alt
        if (element.dataset.i18nAlt) {
            element.setAttribute(
                "alt",
                getTranslation(
                    element.dataset.i18nAlt,
                    fallback.alt
                )
            );
        }
    });
    applyLocaleSideEffects(); // Atualiza textos que dependem do idioma atual
}
// função do 1. initializeComponents
function restoreFallbackTranslations() {
    currentTranslations = null; // Limpa o estado de traduções ativas

    document.title = defaultDocumentTitle; // Restaura título e idioma originais do documento
    document.documentElement.lang = defaultDocumentLanguage;

    const translatableElements = document.querySelectorAll( "[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]" ); // Seleciona novamente todos os elementos traduzíveis

    translatableElements.forEach((element) => {
        const fallback = fallbackSnapshots.get(element);
        if (!fallback) { return; } // Guard Clause Se não existir snapshot, não altera o elemento

        // Restaura cada tipo de conteúdo salvo
        if (element.dataset.i18n) {
            element.textContent = fallback.textContent;
        }

        if (element.dataset.i18nHtml) {
            element.innerHTML = fallback.innerHTML;
        }

        if (element.dataset.i18nTitle) {
            element.setAttribute("title", fallback.title);
        }

        if (element.dataset.i18nAriaLabel) {
            element.setAttribute("aria-label", fallback.ariaLabel);
        }

        if (element.dataset.i18nAlt) {
            element.setAttribute("alt", fallback.alt);
        }
    });

    applyLocaleSideEffects(); // Reaplica efeitos dependentes do idioma
}
// Função da função de cima "restoreFallbackTranslations"
function applyLocaleSideEffects() {
    updateLanguageToggle();
    updateThemeToggleLabel();
    updateExpandButtonLabels();
    refreshOpenModals();
}

function updateLanguageToggle() {
    if (!languageToggle) { return; } // Guard Clause

    const SECONDARY_LOCALE = "en-US"; // SECONDARY_LOCALE recebe en-US
    const fallback = getLocaleFallback(languageToggleFallbacks); // Usa fallback caso não exista tradução
    const buttonText = getTranslation( "languageToggle.buttonText", fallback.buttonText ); // Texto visível do botão
    const ariaLabel = getTranslation( "languageToggle.ariaLabel", fallback.ariaLabel ); // Texto de acessibilidade
    const localeBadge = currentLocale === "en-US" ? "EN" : "BR";

    if (languageToggleText) { languageToggleText.textContent = buttonText; } 
    else { languageToggle.textContent = ` ${buttonText} `; }

    if (languageToggleSelected) {
        languageToggleSelected.textContent = localeBadge;
    }

    languageToggle.setAttribute("aria-label", ariaLabel);
    languageToggle.classList.toggle("exchanged", currentLocale === SECONDARY_LOCALE);
    updateLanguageDropdownSelection();
}

function getLocaleFallback(map) {
    return map[currentLocale] || map[DEFAULT_LOCALE];
}

function updateLanguageDropdownSelection() {
    if (!languageDropdownOptions?.length) { return; }

    languageDropdownOptions.forEach((button) => {
        const isCurrentLocale = button.dataset.lang === currentLocale;
        button.setAttribute("aria-current", isCurrentLocale ? "true" : "false");
    });
}

function cancelLanguageDropdownAnimations() {
    if (languageDropdownAnimationFrame !== null) {
        window.cancelAnimationFrame(languageDropdownAnimationFrame);
        languageDropdownAnimationFrame = null;
    }

    if (languageDropdownHideTimer !== null) {
        window.clearTimeout(languageDropdownHideTimer);
        languageDropdownHideTimer = null;
    }

    if (languageDropdownTransitionController) {
        languageDropdownTransitionController.abort();
        languageDropdownTransitionController = null;
    }
}

function getTransitionDurationMs(element) {
    const styles = window.getComputedStyle(element);
    const durations = styles.transitionDuration.split(",");
    const delays = styles.transitionDelay.split(",");

    const totalTimes = durations.map((duration, index) => {
        const delay = delays[index] ?? delays[delays.length - 1] ?? "0s";
        return parseCssTimeToMs(duration) + parseCssTimeToMs(delay);
    });

    return Math.max(...totalTimes, 0);
}

function parseCssTimeToMs(value = "0s") {
    const normalized = value.trim();

    if (normalized.endsWith("ms")) { return Number.parseFloat(normalized) || 0; }
    if (normalized.endsWith("s")) { return (Number.parseFloat(normalized) || 0) * 1000; }

    return 0;
}

// Funcoes da versao animada do dropdown.
function showLanguageDropdownAnimated() {
    if (!langDropdown || !languageToggle) { return; }
    if (langDropdown.classList.contains("is-open")) { return; }

    cancelLanguageDropdownAnimations();

    langDropdown.removeAttribute("hidden");
    langDropdown.setAttribute("aria-hidden", "false");
    languageToggle.setAttribute("aria-expanded", "true");
    positionLanguageDropdown();

    languageDropdownDocumentClickHandler = (event) => {
        const card = langDropdown.querySelector(".lang-dropdown-card");
        if (!card || card.contains(event.target)) { return; }
        hideLanguageDropdownAnimated();
    };

    languageDropdownKeydownHandler = (event) => {
        if (event.key === "Escape") { hideLanguageDropdownAnimated(); }
    };

    document.addEventListener("click", languageDropdownDocumentClickHandler);
    document.addEventListener("keydown", languageDropdownKeydownHandler);
    window.addEventListener("resize", positionLanguageDropdown);
    window.addEventListener("scroll", positionLanguageDropdown, true);

    languageDropdownAnimationFrame = window.requestAnimationFrame(() => {
        languageDropdownAnimationFrame = window.requestAnimationFrame(() => {
            langDropdown.classList.add("is-open");
            languageDropdownAnimationFrame = null;
        });
    });

    window.requestAnimationFrame(() => {
        const firstOption = langDropdown.querySelector(".lang-dropdown-option");
        if (firstOption) { firstOption.focus(); }
    });
}

function hideLanguageDropdownAnimated() {
    if (!langDropdown) { return; }
    if (langDropdown.hasAttribute("hidden") && !langDropdown.classList.contains("is-open")) { return; }

    cancelLanguageDropdownAnimations();

    langDropdown.setAttribute("aria-hidden", "true");
    languageToggle?.setAttribute("aria-expanded", "false");
    langDropdown.classList.remove("is-open");

    if (languageDropdownDocumentClickHandler) {
        document.removeEventListener("click", languageDropdownDocumentClickHandler);
        languageDropdownDocumentClickHandler = null;
    }

    if (languageDropdownKeydownHandler) {
        document.removeEventListener("keydown", languageDropdownKeydownHandler);
        languageDropdownKeydownHandler = null;
    }

    window.removeEventListener("resize", positionLanguageDropdown);
    window.removeEventListener("scroll", positionLanguageDropdown, true);

    const card = langDropdown.querySelector(".lang-dropdown-card");
    if (!card) {
        langDropdown.setAttribute("hidden", "true");
        return;
    }

    const finalizeHide = () => {
        langDropdown.setAttribute("hidden", "true");
        langDropdown.classList.remove("is-open");
        cancelLanguageDropdownAnimations();
    };

    languageDropdownTransitionController = new AbortController();
    card.addEventListener(
        "transitionend",
        (event) => {
            if (event.target !== card || event.propertyName !== "transform") { return; }
            finalizeHide();
        },
        { once: true, signal: languageDropdownTransitionController.signal }
    );

    languageDropdownHideTimer = window.setTimeout(
        finalizeHide,
        getTransitionDurationMs(card) + 32
    );
}

function initializeLanguageToggleAnimated() {
    if (!languageToggle) { return; }

    updateLanguageToggle();
    languageToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (langDropdown?.classList.contains("is-open")) {
            hideLanguageDropdownAnimated();
            return;
        }

        showLanguageDropdownAnimated();
    });
}

// TEMA ===
function setTheme(theme) {
    if (!themeToggle || !THEMES.includes(theme)) return;

    currentTheme = theme;
    applyThemeToDocument(theme);
    updateThemeToggleState(theme);
    persistTheme(theme);
}
function applyThemeToDocument(theme) {
    document.documentElement.setAttribute("data-tema", theme);
}
function updateThemeToggleState(theme) {
    const isDark = theme === "dark";
    themeToggle.classList.toggle("dark", isDark);
    themeToggle.setAttribute("aria-checked", String(isDark));
    updateThemeToggleLabel();
}
function updateThemeToggleLabel() {
    const isDark = currentTheme === "dark";
    const fallbackLabels = themeLabelFallbacks[currentLocale] || themeLabelFallbacks[DEFAULT_LOCALE];

    const translationKey = isDark ? "themeToggle.enableLight" : "themeToggle.enableDark";
    const fallback = isDark ? fallbackLabels.enableLight : fallbackLabels.enableDark;
    const labelText = getTranslation(translationKey, fallback);

    if (themeToggleText) { themeToggleText.textContent = labelText; }

    themeToggle.setAttribute("aria-label", labelText);
}
function persistTheme(theme) {
    if (localStorage.getItem(THEME_STORAGE_KEY) !== theme) { localStorage.setItem(THEME_STORAGE_KEY, theme); }
}

// função do 1. initializeComponents
function initializeExpandButtons() {
    const expandButtons = document.querySelectorAll(".expand-btn"); // Seleciona todos os botões de expandir

    expandButtons.forEach((button) => { const targetId = button.getAttribute("aria-controls") || button.dataset.target; // O botão aponta para o conteúdo via aria-controls ou data-target
        const content = targetId ? document.getElementById(targetId) : null;
        if (!content) { return; } // Guard Clause

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true"; // Verifica se o conteúdo já está expandido

            if (isExpanded) {
                content.style.height = `${content.scrollHeight}px`; // Define altura fixa antes da animação

                // Força o browser a aplicar o estilo
                requestAnimationFrame(() => { content.style.height = "80px"; }); // Altura recolhida (ex: preview)

                content.setAttribute("aria-hidden", "true");
                content.classList.remove("expanded");
                button.classList.remove("expanded");
                button.setAttribute("aria-expanded", "false");
            } else {
                content.style.height = `${content.scrollHeight}px`; // Define a altura para permitir animação suave
                content.setAttribute("aria-hidden", "false");
                content.classList.add("expanded");
                button.classList.add("expanded");
                button.setAttribute("aria-expanded", "true");
            }
            updateExpandButtonLabels(); // Atualiza os labels de acessibilidade
        });

        /* --- FINAL DA ANIMAÇÃO ---
            Ao abrir totalmente, usamos height:auto
            para permitir crescimento natural do conteúdo.
        */
        content.addEventListener("transitionend", () => {
            if (button.getAttribute("aria-expanded") === "true") {
                content.style.height = "auto";
            }
        });
    });

    updateExpandButtonLabels(); // Garante que os aria-labels estejam corretos desde o início
}
// Função do "initializeExpandButtons" (função acima)
function updateExpandButtonLabels() {
    const expandButtons = document.querySelectorAll(".expand-btn");

    const fallback = expandButtonFallbacks[currentLocale] || expandButtonFallbacks[DEFAULT_LOCALE];

    expandButtons.forEach((button) => {
        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        // Texto da ação atual
        const action = isExpanded
            ? getTranslation("about.expand.close", fallback.collapse)
            : getTranslation("about.expand.open", fallback.expand);

        // Tenta obter o título da seção (contexto para leitores de tela)
        const sectionTitle =
            button.previousElementSibling &&
            button.previousElementSibling.previousElementSibling &&
            button.previousElementSibling.previousElementSibling.textContent
                ? button.previousElementSibling.previousElementSibling.textContent.trim()
                : "";

        // Combina ação + contexto
        button.setAttribute( "aria-label", sectionTitle ? `${action}: ${sectionTitle}` : action );
    });
}

    
// função do 1. initializeComponents
function initializeAvatarSwitcher() {
    const avatarImage = document.getElementById("avatar");
    if (!avatarImage) { return; } // Guard Clause

    avatarImage.addEventListener("click", () => {
        avatarImage.classList.add("avatar-fade"); // Aplica classe CSS de fade-out

        // Aguarda o início da animação para trocar a imagem
        window.setTimeout(() => {
            avatarIndex = (avatarIndex + 1) % avatarSources.length;
            avatarImage.src = avatarSources[avatarIndex];
        }, 150);

        // Remove a classe após o fim da animação
        window.setTimeout(() => {
            avatarImage.classList.remove("avatar-fade");
        }, 300);
    });
}

// função do 1. initializeComponents
function initializeHoverDimming(containerSelector, cardSelector) {
    const containers = document.querySelectorAll(containerSelector); // Seleciona os containers que terão o efeito

    containers.forEach((container) => {
        const cards = container.querySelectorAll(cardSelector);
        if (!cards.length) return;

        container.addEventListener("mouseover", (event) => {
            const hoveredCard = event.target.closest(cardSelector);
            if (!hoveredCard || !container.contains(hoveredCard)) return;
            cards.forEach((card) => { card.classList.toggle("dimmed", card !== hoveredCard); });
        });

        container.addEventListener("mouseout", (event) => {
            if (event.relatedTarget && container.contains(event.relatedTarget)) return;
            cards.forEach((card) => { card.classList.remove("dimmed"); });
        });
    });
}

// Função generica para iniciar cards
function initializeCards(selector, dataAttr, openModalFn) {
    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const id = card.getAttribute(dataAttr);
            openModalFn(id);
        });
    });
}
function preventClickPropagation(selector) {
    document.addEventListener("click", (event) => {
        if (event.target.closest(selector)) { event.stopPropagation(); }
    });
}
function initializeProjectCards() {
    initializeCards( ".project-card", "data-project-id", openProjectModal );
    preventClickPropagation(".project-action-btn");
}
function initializeEducationCards() {
    initializeCards( ".education-card", "data-education-id", openEducationModal );
}
function initializeExperienceCards() {
    initializeCards( ".timeline-preview", "data-experience-id", openExperienceModal );
}

// Função generica para abrir Modal
function openModalWithData({ modalId, activeKey, itemId, baseData, translationPath, fillContent }) {
    const base = baseData?.[itemId];
    if (!base) return;

    const localizedData = mergeLocalizedData( base, getTranslation(translationPath, null) );

    activeModals[activeKey] = itemId;
    fillContent(localizedData);
    showModal(modalId);
}
function openProjectModal(projectId) {
    openModalWithData({
        modalId: "project-modal",
        activeKey: "project",
        itemId: projectId,
        baseData: projectsData,
        translationPath: `projects.items.${projectId}`,
        fillContent: (data) => {
            setText("project-modal-title", data.name);
            setText("project-modal-subtitle", data.subtitle);
            setText("project-modal-overview", data.overview);
            setText("project-modal-specs", data.specs);
            setText("project-modal-purpose", data.purpose);

            renderList("project-modal-functionalities", data.functionalities);
            renderList("project-modal-advantages", data.advantages);
            renderTags("project-modal-technologies", data.technologies);

            renderProjectImages(data);
            updateModalLink("project-modal-deploy-link", data.links?.deploy);
            updateModalLink("project-modal-repo-link", data.links?.repo);
        }
    });
}
function openEducationModal(educationId) {
    openModalWithData({
        modalId: "education-modal",
        activeKey: "education",
        itemId: educationId,
        baseData: educationsData,
        translationPath: `education.items.${educationId}`,
        fillContent: (data) => {
            setText("education-modal-title", data.title);
            setText("education-modal-institution", data.institution);
            setText("education-modal-period", data.period);
            setText("education-modal-description", data.modalDescription);

            renderList("education-modal-topics", data.topics);

            renderEducationCertificate(data);
        }
    });
}
function openExperienceModal(experienceId) {
    openModalWithData({
        modalId: "experience-modal",
        activeKey: "experience",
        itemId: experienceId,
        baseData: experiencesData,
        translationPath: `experience.items.${experienceId}`,
        fillContent: (data) => {
            setText("experience-modal-title", data.title);
            setText("experience-modal-company", data.company);
            setText("experience-modal-period", data.period);
            setText("experience-modal-description", data.modalDescription);

            renderList("experience-modal-highlights", data.highlights);
            renderTags("experience-modal-tags", data.tags);
        }
    });
}
//Função usada para abrir Modal (funções acima)
function setText(id, value = "") {
    const el = document.getElementById(id);
    if (!el || el.textContent === value) return;
    el.textContent = value;
}
//Função usada para abrir Modal (funções acima)
function renderProjectImages(data) {
    const container = document.getElementById("project-modal-images");
    if (!container) return;

    container.innerHTML = "";
    const assetsImages = assets.images.projects[data.name.toLowerCase()];
    const images = assetsImages?.modals ?? data.images ?? [];

    images.forEach((img) => {
        const image = document.createElement("img");
        image.src = img.small || img;
        image.srcset = img.small ? generateSrcset(img) : "";
        image.alt = data.name;
        container.appendChild(image);
    });
}
// Certificado isolado da função openEducationModal
function renderEducationCertificate(data) {
    const container = document.getElementById("education-certificate-preview");
    container.innerHTML = "";

    if (!data.certificate) {
        container.appendChild(createCertificatePlaceholder());
        return;
    }

    const link = document.createElement("a");
    link.href = data.certificate;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "btn";
    link.textContent = getTranslation(
        "education.modal.certificate",
        "Ver certificado"
    );

    container.appendChild(link);
}

function renderCollection(containerId, items, createElementFn) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    (items ?? []).forEach((item) => { container.appendChild(createElementFn(item)); });
}
function renderList(elementId, items) {
    renderCollection(elementId, items, (item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
    });
}
function renderTags(elementId, tags) {
    renderCollection(elementId, tags, (tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        return span;
    });
}
function createCertificatePlaceholder() {
    const wrapper = document.createElement("div");
    wrapper.className = "certificate-placeholder";

    const label = document.createElement("span");
    label.textContent = getTranslation( "education.modal.placeholderTitle", "Certificado" );

    const title = document.createElement("strong");
    title.textContent = getTranslation( "education.modal.placeholderSubtitle", "Preview indisponível" );

    const description = document.createElement("p");
    description.innerHTML = getTranslation( "education.modal.placeholderBody", "Adicione a imagem do certificado na pasta <code>assets</code> para exibição real neste modal." );

    wrapper.appendChild(label);
    wrapper.appendChild(title);
    wrapper.appendChild(description);

    return wrapper;
}
function createElement(tag, className, content, isHTML = false) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) { isHTML ? (el.innerHTML = content) : (el.textContent = content); }

    return el;
}

function updateModalLink(elementId, url) {
    const linkElement = document.getElementById(elementId);
    if (!linkElement) { return; }

    if (url && url !== "#") {
        linkElement.href = url;
        linkElement.style.display = "inline-block";
        return;
    }

    linkElement.removeAttribute("href"); // Oculta link inválido
    linkElement.style.display = "none"; // Oculta link inválido
}
    
// função do 1. initializeComponents
function initializeModalControls() {
    const modalOverlays = document.querySelectorAll(".modal-overlay");
    const modalCloseButtons = document.querySelectorAll(".modal-close-btn");

    modalOverlays.forEach((overlay) => {
        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) { closeAllModals(); } // Garante que o clique foi no fundo, não no conteúdo
        });
    });

    modalCloseButtons.forEach((button) => {
        button.addEventListener("click", () => { closeAllModals(); });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") { closeAllModals(); }
    });
}
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) { return; }

    modal.classList.remove("hidden");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}
function closeModal(modalId) {
    const modal = modalId ? document.getElementById(modalId) : null;
    if (!modal) { return; }

    modal.classList.remove("show");
    modal.classList.add("hidden");

    clearActiveModal(modalId);
    updateBodyScroll();
}
function closeAllModals() {
    const openModals = document.querySelectorAll(".modal-overlay.show");

    openModals.forEach((modal) => {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    });

    clearAllActiveModals();
    document.body.style.overflow = "";
}
function refreshOpenModals() {
    Object.entries(modalMap).forEach(([modalId, key]) => {
        if (activeModals[key] && isModalOpen(modalId)) {
            reopenModal(modalId, activeModals[key]);
        }
    });
}
function reopenModal(modalId, id) {
    const reopenMap = {
        "project-modal": openProjectModal,
        "education-modal": openEducationModal,
        "experience-modal": openExperienceModal
    };

    reopenMap[modalId]?.(id);
}
function isModalOpen(modalId) {
    return document
        .getElementById(modalId)
        ?.classList.contains("show") ?? false;
}
function clearActiveModal(modalId) {
    const key = modalMap[modalId];
    if (key) activeModals[key] = null;
}
function clearAllActiveModals() {
    Object.values(modalMap).forEach((key) => {
        activeModals[key] = null;
    });
}
function updateBodyScroll() {
    const hasOpenModal = document.querySelector(".modal-overlay.show");
    if (!hasOpenModal) {
        document.body.style.overflow = "";
    }
}



// Antes de traduzir o site, salve os textos originais de cada elemento
function captureFallbackTranslations() {
    const translatableElements = document.querySelectorAll("[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"); // Seleciona todos os elementos que possuem esses termos nas tags HTML
    // Faz o backup dos elementos traduziveis para caso a tradução falhe o JSON não carregue
    translatableElements.forEach((element) => {
        fallbackSnapshots.set(element, {
            textContent: element.textContent ?? "",
            innerHTML: element.innerHTML,
            title: element.getAttribute("title") ?? "",
            ariaLabel: element.getAttribute("ariaLabel") ?? "",
            alt: element.getAttribute("alt") ?? "",
        })
    });
}
function getTranslation(path, fallbackValue = undefined) {
    return getValueFromPath(currentTranslations, path) ?? fallbackValue;
}
function getValueFromPath(source, path) {
    if (!source || !path) return undefined;

    return path
        .split(".")
        .reduce((current, key) => current?.[key], source);
}

function mergeLocalizedData(baseValue, translatedValue) {
    if (translatedValue == null) return baseValue; // Se não houver tradução, usa o valor base
    if (Array.isArray(baseValue) || Array.isArray(translatedValue)) { return Array.isArray(translatedValue) ? translatedValue : baseValue; } // Arrays: tradução substitui tudo

    // Objetos: merge profundo
    if (isPlainObject(baseValue) || isPlainObject(translatedValue)) {
        const merged = {};
        const keys = new Set([
            ...Object.keys(baseValue ?? {}),
            ...Object.keys(translatedValue ?? {})
        ]);

        keys.forEach((key) => {
            merged[key] = mergeLocalizedData(
                baseValue?.[key],
                translatedValue?.[key]
            );
        });

        return merged;
    }

    return translatedValue; // Primitivos (string, number, boolean): tradução sobrescreve
}

function isPlainObject(value) {
    if (value === null) return false;
    return Object.prototype.toString.call(value) === "[object Object]";
}

function generateSrcset(resolutions = {}) {
    return Object.values(resolutions)
        .filter(
            (path) =>
                typeof path === "string" &&
                /\.(png|jpe?g|webp|svg)$/i.test(path)
        )
        .map((path) => {
            const match = path.match(/-(\d+)w\./);
            return match ? `${path} ${match[1]}w` : path;
        })
        .join(", ");
}
function applyProjectCardImage(imgId, assetData, sizes) {
    const img = document.getElementById(imgId);
    if (!img || !assetData) return;

    img.src = assetData.small;
    img.srcset = generateSrcset(assetData);
    img.sizes = sizes;
}

function setAssets() {
    // Ícones de tecnologias
    document.querySelectorAll(".tech-img").forEach((img) => {
        const iconName = img.dataset.icon;
        const icon = assets.icons.find((i) => i.name === iconName);
        if (icon) {
            img.src = icon.path;
        }
    });

    // Cards de projetos
    applyProjectCardImage(
        "demands-card-img",
        assets.images.projects.demands.card,
        "(max-width: 768px) 450px, 450px"
    );

    applyProjectCardImage(
        "glasses-card-img",
        assets.images.projects.glasses.card,
        "(max-width: 768px) 450px, 450px"
    );
}
