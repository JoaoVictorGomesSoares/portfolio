/* === CONFIGURAÇÕES GLOBAIS DE IDIOMA E TEMA === */
const DEFAULT_LOCALE = "pt-BR"; // Idioma padrão do site (fallback principal)
const LOCALE_STORAGE_KEY = "portfolio-locale"; // Chave usada para salvar o idioma escolhido no localStorage
const THEME_STORAGE_KEY = "tema"; // Chave usada para salvar o tema (claro/escuro) no localStorage

// Mapeamento entre locale e arquivo JSON de tradução
const LOCALE_FILES = {
    "pt-BR": "pt.json",
    "en-US": "en.json"
};


/* === DADOS DOS PROJETOS ===
    Este objeto funciona como um "banco de dados local" com todas as informações dos projetos exibidos no site. Cada chave numérica representa um projeto.
*/
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
            "assets/demands1.png",
            "assets/demands2.png",
            "assets/demands3.png",
            "assets/demands4.png",
            "assets/demands5.png",
            "assets/demands6.png",
            "assets/demands7.png"
        ],

        // Links externos relacionados ao projeto
        links: {
            deploy: null, // Pode ser null quando não houver deploy
            repo: "https://github.com/JoaoVictorGomesSoares/DevTrack"
        }
    },

    /* =====================================================
       Os projetos seguintes seguem EXATAMENTE
       a mesma estrutura do projeto 1.
       Isso facilita:
       - reutilização de código
       - renderização dinâmica
       - internacionalização
       ===================================================== */

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
            "assets/glasses1.png",
            "assets/glasses2.png",
            "assets/glasses3.png",
            "assets/glasses4.png",
            "assets/glasses5.png",
            "assets/glasses6.png"
        ],
        links: {
            deploy: null,
            repo: "https://github.com/JoaoVictorGomesSoares"
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
        images: ["assets/WallpaperProject.png"],
        links: {
            deploy: null,
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
            deploy: null,
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
            deploy: null,
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
            deploy: null,
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
            deploy: null,
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
            deploy: null,
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
            deploy: null,
            repo: "https://github.com/JoaoVictorGomesSoares"
        }
    }
};


/* ==== DADOS DE FORMAÇÃO / EDUCAÇÃO ===
    Estrutura usada para renderizar os cards de educação e alimentar o modal de detalhes.
*/
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

    // As demais formações seguem o mesmo padrão,
    // permitindo reutilização total da lógica de renderização.
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


/* === DADOS DE EXPERIÊNCIA PROFISSIONAL ===
    Usado para montar a timeline horizontal e os modais de experiência.
*/
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

    // Os outros itens seguem exatamente o mesmo formato
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


/* === FALLBACKS DE TEXTO PARA INTERNACIONALIZAÇÃO ===
    Esses objetos garantem que o site continue funcional mesmo se:
    - o arquivo de tradução não carregar
    - alguma chave não existir no JSON
*/

/* Texto e aria-label do botão de troca de idioma */
const languageToggleFallbacks = {
    "pt-BR": {
        buttonText: "🌐 pt-BR",
        ariaLabel: "Alterar idioma para inglês"
    },
    "en-US": {
        buttonText: "🌐 en-US",
        ariaLabel: "Switch language to Portuguese"
    }
};

/* Labels do botão de tema (acessibilidade) */
const themeLabelFallbacks = {
    "pt-BR": {
        enableDark: "Ativar modo escuro",
        enableLight: "Ativar modo claro"
    },
    "en-US": {
        enableDark: "Enable dark mode",
        enableLight: "Enable light mode"
    }
};

/* Labels dos botões de expandir/recolher seções */
const expandButtonFallbacks = {
    "pt-BR": {
        expand: "Expandir seção",
        collapse: "Recolher seção"
    },
    "en-US": {
        expand: "Expand section",
        collapse: "Collapse section"
    }
};


/* === AVATARES DISPONÍVEIS ===
   Lista de imagens usadas no switcher de avatar.
*/
const avatarSources = [
    "assets/avatar1.png",
    "assets/avatar2.png",
    "assets/avatar3.png",
    "assets/avatar4.png"
];


/* === ESTRUTURAS DE ESTADO GLOBAL === */
// Cache de traduções já carregadas, se carregou uma vez reutiliza
const translationCache = new Map();

/* Guarda o "estado original" dos textos do HTML, os textos. Usamos WeakMap porque:
    - as chaves são elementos do DOM
    - o GarbageCollector pode limpar quando o elemento não existir mais
*/
const fallbackSnapshots = new WeakMap();

/* Controla quais modais estão abertos no momento. Isso permite:
    - atualizar o conteúdo ao trocar idioma
    - evitar conflitos de estado
*/
const activeModals = {
    project: null,
    education: null,
    experience: null
};


/* === VARIÁVEIS DE CONTROLE DA APLICAÇÃO === */

// Idioma atual da aplicação
let currentLocale = DEFAULT_LOCALE;

// Objeto de traduções carregadas no momento
let currentTranslations = null;

// Título original do documento (fallback)
let defaultDocumentTitle = document.title;

// Idioma original do HTML (fallback)
let defaultDocumentLanguage = document.documentElement.lang || DEFAULT_LOCALE;

// Referências a elementos do DOM
let languageToggle = null;
let themeToggle = null;
let vignette = null;

// Índice atual do avatar exibido
let avatarIndex = 0;


/* === PONTO DE ENTRADA DA APLICAÇÃO ===
    Esse evento garante que todo o DOM esteja carregado antes de tentarmos acessar elementos da página.
*/
document.addEventListener("DOMContentLoaded", async () => {
    defaultDocumentTitle = document.title; // Salva o título original da página para uso como fallback

    defaultDocumentLanguage = document.documentElement.lang || DEFAULT_LOCALE; // Salva o idioma original definido no HTML

    // Captura referências dos botões principais
    languageToggle = document.getElementById("lang-toggle");
    themeToggle = document.getElementById("theme-toggle");

    vignette = document.getElementById("theme-vignette"); // Elemento visual usado na animação de troca de tema

    /* --- 1 CAPTURA DOS TEXTOS ORIGINAIS (FALLBACK) ---
        Aqui salvamos o conteúdo original do HTML ANTES de qualquer tradução ser aplicada. Isso permite:
        - restaurar textos
        - evitar tela vazia
        - garantir acessibilidade
    */
    captureFallbackTranslations();

    /* --- 2 INICIALIZAÇÃO DOS COMPONENTES ---
        Cada função configura eventos e comportamentos específicos da interface.
    */
    initializeThemeToggle();
    initializeLanguageToggle();
    initializeExpandButtons();
    initializeAvatarSwitcher();
    initializeProjectCards();
    initializeHoverDimming(".skill-techs", ".skill-card"); // Aplica efeito visual de "escurecer" cards não focados
    initializeEducationCards();
    initializeExperienceCards();
    initializeHoverDimming(".timeline-horizontal", ".timeline-preview");
    initializeHoverDimming(".contact-card-grid", ".contact-card");
    initializeModalControls();

    /* --- 3 RESTAURAÇÃO DOS TEXTOS PADRÃO ---
        Garante que o site comece com o idioma base antes de aplicar qualquer tradução externa.
    */
    restoreFallbackTranslations();

    /* --- 4 RECUPERAÇÃO DO IDIOMA SALVO ---
        Se o usuário já escolheu um idioma anteriormente, ele é restaurado aqui.
    */
    const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

    if ( savedLocale && savedLocale !== DEFAULT_LOCALE && LOCALE_FILES[savedLocale] ) {
        await switchLanguage(savedLocale, { persist: false }); // Aplica o idioma salvo SEM sobrescrever o storage
    } else {
        localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE); // Garante que o idioma padrão esteja salvo
    }
});


/* === CAPTURA DOS TEXTOS ORIGINAIS DO HTML ====
    Esta função salva uma "fotografia" do conteúdo original dos elementos traduzíveis. Isso é essencial para:
    - restaurar o idioma padrão
    - evitar dependência total de arquivos JSON
*/
function captureFallbackTranslations() {
    // Seleciona todos os elementos que possuem atributos de tradução
    const translatableElements = document.querySelectorAll(
        "[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"
    );

    translatableElements.forEach((element) => {
        // Para cada elemento, armazenamos seus valores originais
        fallbackSnapshots.set(element, {
            textContent: element.textContent,
            innerHTML: element.innerHTML,
            title: element.getAttribute("title") || "",
            ariaLabel: element.getAttribute("aria-label") || "",
            alt: element.getAttribute("alt") || ""
        });
    });
}


/* === INICIALIZAÇÃO DO BOTÃO DE TEMA (CLARO / ESCURO) ====
    Controla:
    - persistência do tema
    - animação visual
    - acessibilidade
*/
function initializeThemeToggle() {
    // Se os elementos não existirem, a função é encerrada
    if (!themeToggle || !vignette) {
        return;
    }

    // Recupera o tema salvo ou assume "light"
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "light";

    // Aplica o tema inicial
    setTheme(savedTheme);

    // Evento de clique no botão de tema
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-tema") || "light"; // Tema atual aplicado no HTML
        const nextTheme = currentTheme === "dark" ? "light" : "dark"; // Alterna entre claro e escuro

        themeToggle.classList.toggle("dark", nextTheme === "dark"); // Atualiza o estado visual do botão

        // Define o gradiente animado do vignette
        vignette.style.background =
            nextTheme === "dark"
                ? "linear-gradient(90deg, #1e3a5f, #4da3ff)"
                : "linear-gradient(90deg, #4da3ff, #1e3a5f)";

        vignette.classList.add("active"); // Ativa a animação

        window.setTimeout(() => { setTheme(nextTheme); }, 1000); // Aplica o tema após o início da animação

        // Quando a animação CSS desse elemento terminar, execute essa função
        vignette.addEventListener( "animationend", () => {
                vignette.classList.remove("active"); },
                { once: true } // Depois de rodar uma vez, remova esse listener automaticamente
        );
    });
}


/* === INICIALIZAÇÃO DO BOTÃO DE IDIOMA ===
    Responsável por:
    - alternar idiomas
    - atualizar aria-labels
    - controlar estado visual
*/
function initializeLanguageToggle() {
    if (!languageToggle) {
        return;
    }

    updateLanguageToggle(); // Atualiza texto e acessibilidade do botão

    languageToggle.addEventListener("click", async () => {
        const targetLocale = currentLocale === DEFAULT_LOCALE ? "en-US" : DEFAULT_LOCALE; // Alterna entre idioma padrão e inglês

        await switchLanguage(targetLocale, { persist: true }); // Executa a troca de idioma

        languageToggle.classList.toggle( "exchanged", currentLocale === "en-US" ); // Adiciona a classe "exchanged" (CSS) no botão se o idioma for "en-US"
    });
}


/* === FUNÇÃO PRINCIPAL DE TROCA DE IDIOMA ===
    Responsável por:
    - carregar traduções
    - aplicar textos
    - lidar com erros
    - manter acessibilidade
*/
async function switchLanguage(targetLocale, options = {}) {
    // Se o idioma solicitado não existir ou o botão não estiver disponível
    if (!LOCALE_FILES[targetLocale] || !languageToggle) {
        return;
    }

    const { persist = true } = options; // Define se a escolha será persistida
    const previousLocale = currentLocale; // Guarda o idioma anterior para fallback em caso de erro

    languageToggle.disabled = true; // Bloqueia o botão durante a troca
    languageToggle.setAttribute("aria-busy", "true");

    try {
        /* CASO 1: VOLTANDO PARA O IDIOMA PADRÃO */
        if (targetLocale === DEFAULT_LOCALE) {
            currentLocale = DEFAULT_LOCALE;

            restoreFallbackTranslations(); // Restaura textos originais do HTML

            // Salva no storage se necessário
            if (persist) { 
                localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE); 
            }

            // Tenta carregar explicitamente o pt.json
            try {
                const ptTranslations = await loadTranslations(DEFAULT_LOCALE);
                applyTranslations(ptTranslations);
            } catch (error) {
                // Se falhar, mantém apenas o fallback do HTML
                console.warn(
                    "Não foi possível carregar pt.json. Mantendo fallback em português.",
                    error
                );
            }

            return;
        }

        /* CASO 2: IDIOMA DIFERENTE DO PADRÃO */
        const translations = await loadTranslations(targetLocale);

        currentLocale = targetLocale; // Atualiza idioma atual

        applyTranslations(translations); // Aplica traduções carregadas

        // Persiste escolha
        if (persist) {
            localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
        }
    } catch (error) {
        // TRATAMENTO DE ERROS (garante que o site NUNCA fique quebrado)
        console.error("Falha ao carregar o idioma solicitado.", error);

        currentLocale = previousLocale === "en-US" ? "en-US" : DEFAULT_LOCALE; // Decide para qual idioma voltar

        if (currentLocale === DEFAULT_LOCALE) {
            restoreFallbackTranslations();
        } else {
            // Tenta usar tradução já em cache
            const cachedTranslations = translationCache.get(currentLocale);

            if (cachedTranslations) {
                applyTranslations(cachedTranslations);
            } else {
                // Último recurso: voltar ao idioma padrão
                currentLocale = DEFAULT_LOCALE;
                restoreFallbackTranslations();
            }
        }

        // Atualiza o storage conforme o idioma final
        if (persist) {
            localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale);
        }
    } finally {
        // FINALIZAÇÃO
        updateLanguageToggle();
        languageToggle.disabled = false;
        languageToggle.removeAttribute("aria-busy");
    }
}


/* === CARREGAMENTO DE ARQUIVO DE TRADUÇÃO (FETCH) ==== */
async function loadTranslations(locale) {
    // Retorna do cache se já foi carregado
    if (translationCache.has(locale)) {
        return translationCache.get(locale);
    }

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


/* === APLICAÇÃO DAS TRADUÇÕES NO DOM === */
function applyTranslations(translations) {
    currentTranslations = translations; // Salva o objeto de traduções ativo

    // Atualiza título e idioma do documento
    document.title =
        getValueFromPath(translations, "meta.title") || defaultDocumentTitle;

    document.documentElement.lang =
        getValueFromPath(translations, "meta.lang") || currentLocale;

    // Seleciona novamente todos os elementos traduzíveis
    const translatableElements = document.querySelectorAll(
        "[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"
    );

    translatableElements.forEach((element) => {
        const fallback = fallbackSnapshots.get(element);

        // Se não houver snapshot, não mexe no elemento
        if (!fallback) {
            return;
        }

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


/* === RESTAURA OS TEXTOS ORIGINAIS (FALLBACK) ===
    Usado quando:
    - voltamos para o idioma padrão
    - ocorre erro ao carregar traduções
*/
function restoreFallbackTranslations() {
    currentTranslations = null; // Limpa o estado de traduções ativas

    document.title = defaultDocumentTitle; // Restaura título e idioma originais do documento
    document.documentElement.lang = defaultDocumentLanguage;

    // Seleciona novamente todos os elementos traduzíveis
    const translatableElements = document.querySelectorAll(
        "[data-i18n], [data-i18n-html], [data-i18n-title], [data-i18n-aria-label], [data-i18n-alt]"
    );

    translatableElements.forEach((element) => {
        const fallback = fallbackSnapshots.get(element);

        // Se não existir snapshot, não altera o elemento
        if (!fallback) {
            return;
        }

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


/* === EFEITOS COLATERAIS DEPENDENTES DO IDIOMA ===
    Sempre que o idioma muda, alguns elementos precisam
    ser atualizados manualmente.
*/
function applyLocaleSideEffects() {
    updateLanguageToggle();
    updateThemeToggleLabel();
    updateExpandButtonLabels();
    refreshOpenModals();
}


/* === ATUALIZA TEXTO E ESTADO DO BOTÃO DE IDIOMA === */
function updateLanguageToggle() {
    if (!languageToggle) {
        return;
    }

    const fallback = languageToggleFallbacks[currentLocale] || languageToggleFallbacks[DEFAULT_LOCALE]; // Usa fallback caso não exista tradução
    const buttonText = getTranslation( "languageToggle.buttonText", fallback.buttonText ); // Texto visível do botão
    const ariaLabel = getTranslation( "languageToggle.ariaLabel", fallback.ariaLabel ); // Texto de acessibilidade

    languageToggle.textContent = ` ${buttonText} `; // Aplica os valores
    languageToggle.setAttribute("aria-label", ariaLabel);
    languageToggle.setAttribute( "aria-pressed", String(currentLocale === "en-US")); // Indica estado pressionado (acessibilidade)
}


/* === APLICA O TEMA (CLARO / ESCURO) === */
function setTheme(theme) {
    if (!themeToggle) {
        return;
    }

    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-tema", theme); // Aplica atributo no HTML (CSS depende disso)

    themeToggle.classList.toggle("dark", isDark); // Atualiza visual do botão
    themeToggle.setAttribute("aria-checked", String(isDark)); // Acessibilidade

    updateThemeToggleLabel(); // Atualiza o texto acessível
    localStorage.setItem(THEME_STORAGE_KEY, theme); // Persiste escolha
}


/* === ATUALIZA O TEXTO DE ACESSIBILIDADE DO BOTÃO DE TEMA === */
function updateThemeToggleLabel() {
    if (!themeToggle) {
        return;
    }

    const theme = document.documentElement.getAttribute("data-tema") || "light";

    const fallbackLabels = themeLabelFallbacks[currentLocale] || themeLabelFallbacks[DEFAULT_LOCALE];

    // Define o aria-label conforme o estado atual
    const ariaLabel =
        theme === "dark"
            ? getTranslation(
                  "themeToggle.enableLight",
                  fallbackLabels.enableLight
              )
            : getTranslation(
                  "themeToggle.enableDark",
                  fallbackLabels.enableDark
              );

    themeToggle.setAttribute("aria-label", ariaLabel);
}


/* === INICIALIZAÇÃO DOS BOTÕES DE EXPANSÃO ===
    Responsável por:
    - expandir / recolher seções
    - animar altura dinamicamente
    - manter acessibilidade correta
*/
function initializeExpandButtons() {
    const expandButtons = document.querySelectorAll(".expand-btn"); // Seleciona todos os botões de expandir

    expandButtons.forEach((button) => {
        const targetId = button.getAttribute("aria-controls") || button.dataset.target; // O botão aponta para o conteúdo via aria-controls ou data-target
        const content = targetId ? document.getElementById(targetId) : null;

        // Se o conteúdo não existir, ignora o botão
        if (!content) {
            return;
        }

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true"; // Verifica se o conteúdo já está expandido

            if (isExpanded) {
                /* --- FECHAR SEÇÃO --- */
                content.style.height = `${content.scrollHeight}px`; // Define altura fixa antes da animação

                // Força o browser a aplicar o estilo
                requestAnimationFrame(() => {
                    content.style.height = "80px"; // Altura recolhida (ex: preview)
                });

                content.setAttribute("aria-hidden", "true");
                content.classList.remove("expanded");
                button.classList.remove("expanded");
                button.setAttribute("aria-expanded", "false");
            } else {
                /* --- ABRIR SEÇÃO --- */
                content.style.height = `${content.scrollHeight}px`; // Define a altura para permitir animação suave
                content.setAttribute("aria-hidden", "false");
                content.classList.add("expanded");
                button.classList.add("expanded");
                button.setAttribute("aria-expanded", "true");
            }

            // Atualiza os labels de acessibilidade
            updateExpandButtonLabels();
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


/* === ATUALIZA OS LABELS DOS BOTÕES DE EXPANSÃO ===
    Ajusta o texto conforme:
    - idioma atual
    - estado expandido ou recolhido
*/
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
        button.setAttribute(
            "aria-label",
            sectionTitle ? `${action}: ${sectionTitle}` : action
        );
    });
}


/* === TROCA DE AVATAR COM ANIMAÇÃO ===
    Permite alternar a imagem do avatar ao clicar,
    criando uma interação leve e divertida.
*/
function initializeAvatarSwitcher() {
    const avatarImage = document.getElementById("avatar");

    // Se o avatar não existir no DOM, a função é encerrada
    if (!avatarImage) {
        return;
    }

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


/* === INICIALIZAÇÃO DOS CARDS DE PROJETOS ===
    Cada card abre um modal com detalhes do projeto.
*/
function initializeProjectCards() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
        card.addEventListener("click", () => {
            openProjectModal(card.getAttribute("data-project-id")); // O ID do projeto vem do atributo data-project-id
        });
    });

    /* --- BOTÕES DE AÇÃO DENTRO DO CARD ---
        Impede que cliques em botões internos
        disparem a abertura do modal.
    */
    const projectActionButtons = document.querySelectorAll(".project-action-btn");

    projectActionButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });
}


/* === EFEITO DE ESCURECIMENTO (HOVER DIMMING) ===
    Realça o card em foco e reduz o destaque dos outros.
*/
function initializeHoverDimming(containerSelector, cardSelector) {
    const containers = document.querySelectorAll(containerSelector); // Seleciona os containers que terão o efeito

    containers.forEach((container) => {
        const cards = container.querySelectorAll(cardSelector); // Cards dentro de cada container

        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                // Aplica "dimmed" em todos, exceto no focado
                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.classList.add("dimmed");
                    }
                });
            });

            card.addEventListener("mouseleave", () => {
                // Remove o efeito de todos
                cards.forEach((otherCard) => {
                    otherCard.classList.remove("dimmed");
                });
            });
        });
    });
}


/* === INICIALIZAÇÃO DOS CARDS DE EDUCAÇÃO ===
    Cada card pode abrir um modal com mais detalhes.
*/
function initializeEducationCards() {
    const educationCards = document.querySelectorAll(".education-card");

    educationCards.forEach((card) => {
        card.addEventListener("click", () => {
            openEducationModal(card.getAttribute("data-education-id"));
        });
    });
}


/* === INICIALIZAÇÃO DOS CARDS DE EXPERIÊNCIA ===
    Funcionamento idêntico aos cards de educação,
    mas com outro tipo de conteúdo.
*/
function initializeExperienceCards() {
    const experienceCards = document.querySelectorAll(".timeline-preview");

    experienceCards.forEach((card) => {
        card.addEventListener("click", () => {
            openExperienceModal(card.getAttribute("data-experience-id"));
        });
    });
}


/* === CONTROLES GERAIS DE MODAIS ===
    Responsável por:
    - abrir e fechar modais
    - controlar overlay
    - acessibilidade
    - atalhos de teclado
*/
function initializeModalControls() {
    const modalOverlays = document.querySelectorAll(".modal-overlay");
    const modalCloseButtons = document.querySelectorAll(".modal-close-btn");

    /* --- FECHAMENTO AO CLICAR NO OVERLAY --- */
    modalOverlays.forEach((overlay) => {
        overlay.addEventListener("click", (event) => {
            // Garante que o clique foi no fundo, não no conteúdo
            if (event.target === overlay) {
                closeAllModals();
            }
        });
    });

    /* --- FECHAMENTO PELO BOTÃO "X" --- */
    modalCloseButtons.forEach((button) => {
        button.addEventListener("click", () => {
            closeAllModals();
        });
    });

    /* --- FECHAMENTO COM TECLA ESC --- */
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });
}


/* === ABERTURA DO MODAL DE PROJETO ===
    Responsável por:
    - mesclar dados base + tradução
    - preencher o modal de projeto
    - renderizar listas, tags e imagens
*/
function openProjectModal(projectId) {
    // Mescla dados fixos do projeto com traduções do idioma atual
    const data = mergeLocalizedData(
        projectsData[projectId],
        getTranslation(`projects.items.${projectId}`, null)
    );

    // Se não existir dado válido, encerra a função
    if (!data) {
        return;
    }

    activeModals.project = projectId; // Marca este projeto como modal ativo

    document.getElementById("project-modal-title").textContent = data.name; // Preenche os campos principais do modal
    document.getElementById("project-modal-subtitle").textContent = data.subtitle;
    document.getElementById("project-modal-overview").textContent = data.overview;
    document.getElementById("project-modal-specs").textContent = data.specs;
    document.getElementById("project-modal-purpose").textContent = data.purpose;

    renderList("project-modal-functionalities", data.functionalities); // Renderiza listas dinâmicas
    renderList("project-modal-advantages", data.advantages);

    renderTags("project-modal-technologies", data.technologies); // Renderiza tags (tecnologias)

    /* --- RENDERIZAÇÃO DAS IMAGENS DO PROJETO --- */
    const imagesContainer = document.getElementById("project-modal-images");
    imagesContainer.innerHTML = "";

    data.images.forEach((imagePath) => {
        // Caso especial: imagem placeholder
        if (imagePath.includes("WallpaperProject.png")) {
            const placeholder = document.createElement("div");
            placeholder.className = "modal-placeholder";
            placeholder.textContent = getTranslation(
                "projects.modal.imagePlaceholder",
                "Imagem em atualização"
            );
            imagesContainer.appendChild(placeholder);
            return;
        }

        // Cria imagem real do projeto
        const image = document.createElement("img");
        image.src = imagePath;
        image.alt = data.name;
        imagesContainer.appendChild(image);
    });

    updateModalLink("project-modal-deploy-link", data.links && data.links.deploy); // Atualiza links externos (deploy e repositório)
    updateModalLink("project-modal-repo-link", data.links && data.links.repo);

    showModal("project-modal"); // Exibe o modal
}


/* === ABERTURA DO MODAL DE EDUCAÇÃO === */
function openEducationModal(educationId) {
    // Mescla dados base com tradução do idioma atual
    const data = mergeLocalizedData(
        educationsData[educationId],
        getTranslation(`education.items.${educationId}`, null)
    );

    if (!data) {
        return;
    }

    activeModals.education = educationId; // Marca modal ativo

    document.getElementById("education-modal-title").textContent = data.title; // Preenche informações do modal
    document.getElementById("education-modal-institution").textContent = data.institution;
    document.getElementById("education-modal-period").textContent = data.period;
    document.getElementById("education-modal-description").textContent = data.modalDescription;

    renderList("education-modal-topics", data.topics); // Renderiza lista de tópicos

    /* --- CERTIFICADO --- */
    const certificatePreview = document.getElementById("education-certificate-preview");
    certificatePreview.innerHTML = "";

    if (data.certificate) {
        const link = document.createElement("a"); // Caso exista certificado, cria link externo
        link.href = data.certificate;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "btn";
        link.textContent = getTranslation( "education.modal.certificate", "Ver certificado" );
        certificatePreview.appendChild(link);
    } else {
        certificatePreview.appendChild(createCertificatePlaceholder()); // Caso contrário, exibe placeholder
    }

    showModal("education-modal");
}


/* === ABERTURA DO MODAL DE EXPERIÊNCIA === */
function openExperienceModal(experienceId) {
    const data = mergeLocalizedData(
        experiencesData[experienceId],
        getTranslation(`experience.items.${experienceId}`, null)
    );

    if (!data) {
        return;
    }

    activeModals.experience = experienceId;

    document.getElementById("experience-modal-title").textContent = data.title;
    document.getElementById("experience-modal-company").textContent = data.company;
    document.getElementById("experience-modal-period").textContent = data.period;
    document.getElementById("experience-modal-description").textContent = data.modalDescription;

    renderList("experience-modal-highlights", data.highlights);
    renderTags("experience-modal-tags", data.tags);

    showModal("experience-modal");
}


/* === RENDERIZA UMA LISTA (<ul>) === */
function renderList(elementId, items) {
    const list = document.getElementById(elementId);
    if (!list) {
        return;
    }

    list.innerHTML = "";

    (items || []).forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}



/* === RENDERIZA TAGS (SPAN) ===*/
function renderTags(elementId, tags) {
    const container = document.getElementById(elementId);
    if (!container) {
        return;
    }

    container.innerHTML = "";

    (tags || []).forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag;
        container.appendChild(span);
    });
}


/* === PLACEHOLDER DE CERTIFICADO === */
function createCertificatePlaceholder() {
    const wrapper = document.createElement("div");
    wrapper.className = "certificate-placeholder";

    const label = document.createElement("span");
    label.textContent = getTranslation(
        "education.modal.placeholderTitle",
        "Certificado"
    );

    const title = document.createElement("strong");
    title.textContent = getTranslation(
        "education.modal.placeholderSubtitle",
        "Preview indisponível"
    );

    const description = document.createElement("p");
    description.innerHTML = getTranslation(
        "education.modal.placeholderBody",
        "Adicione a imagem do certificado na pasta <code>assets</code> para exibição real neste modal."
    );

    wrapper.appendChild(label);
    wrapper.appendChild(title);
    wrapper.appendChild(description);

    return wrapper;
}


/* === ATUALIZA LINKS DO MODAL === */
function updateModalLink(elementId, url) {
    const linkElement = document.getElementById(elementId);
    if (!linkElement) {
        return;
    }

    if (url && url !== "#") {
        linkElement.href = url;
        linkElement.style.display = "inline-block";
        return;
    }

    // Oculta link inválido
    linkElement.removeAttribute("href");
    linkElement.style.display = "none";
}


/* === EXIBE MODAL === */
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        return;
    }

    modal.classList.remove("hidden");
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}


/* === FECHA MODAL ESPECÍFICO === */
function closeModal(modalId) {
    const modal = modalId ? document.getElementById(modalId) : null;
    if (!modal) {
        return;
    }

    modal.classList.remove("show");
    modal.classList.add("hidden");

    // Limpa estado ativo
    if (modalId === "project-modal") { activeModals.project = null; }
    if (modalId === "education-modal") { activeModals.education = null; }
    if (modalId === "experience-modal") { activeModals.experience = null; }

    if (!document.querySelector(".modal-overlay.show")) { document.body.style.overflow = ""; } // Libera scroll se não houver mais modais abertos
}


/* === FECHA TODOS OS MODAIS === */
function closeAllModals() {
    const openModals = document.querySelectorAll(".modal-overlay.show");

    openModals.forEach((modal) => {
        modal.classList.remove("show");
        modal.classList.add("hidden");
    });

    activeModals.project = null;
    activeModals.education = null;
    activeModals.experience = null;
    document.body.style.overflow = "";
}


/* === REABRE MODAIS APÓS MUDANÇA DE IDIOMA === */
function refreshOpenModals() {
    if (activeModals.project && isModalOpen("project-modal")) {
        openProjectModal(activeModals.project);
    }

    if (activeModals.education && isModalOpen("education-modal")) {
        openEducationModal(activeModals.education);
    }

    if (activeModals.experience && isModalOpen("experience-modal")) {
        openExperienceModal(activeModals.experience);
    }
}


/* === VERIFICA SE MODAL ESTÁ ABERTO === */
function isModalOpen(modalId) {
    const modal = document.getElementById(modalId);
    return Boolean(modal && modal.classList.contains("show"));
}


/* === SISTEMA DE TRADUÇÃO === */
function getTranslation(path, fallbackValue) {
    const value = getValueFromPath(currentTranslations, path);
    return value === undefined ? fallbackValue : value;
}

function getValueFromPath(source, path) {
    if (!source || !path) {
        return undefined;
    }

    return path.split(".").reduce((current, key) => {
        if (current === undefined || current === null) {
            return undefined;
        }

        return current[key];
    }, source);
}


/* === MESCLAGEM DE DADOS BASE + LOCALIZADOS === */
function mergeLocalizedData(baseValue, translatedValue) {
    if (translatedValue === null || translatedValue === undefined) {
        return baseValue;
    }

    // Arrays: tradução substitui completamente
    if (Array.isArray(baseValue) || Array.isArray(translatedValue)) {
        return Array.isArray(translatedValue) ? translatedValue : baseValue;
    }

    // Objetos: mesclagem profunda
    if (isPlainObject(baseValue) || isPlainObject(translatedValue)) {
        const merged = {};
        const keys = new Set([
            ...Object.keys(baseValue || {}),
            ...Object.keys(translatedValue || {})
        ]);

        keys.forEach((key) => {
            merged[key] = mergeLocalizedData(
                baseValue ? baseValue[key] : undefined,
                translatedValue ? translatedValue[key] : undefined
            );
        });

        return merged;
    }

    return translatedValue; // Valores primitivos: tradução sobrescreve
}


/* === VERIFICA OBJETO SIMPLES === */
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
