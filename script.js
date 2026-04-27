// Dados dos projetos
const projectsData = {
    // Cada projeto é identificado por um ID numérico
    1: {
        // Título do projeto
        title: "DEMANDS",
        // Subtitulo do projeto
        subtitle: "Organize tarefas de equipes",
        // Imagens do projeto
        images: [
            "assets/demands1.png", 
            "assets/demands2.png", 
            "assets/demands3.png", 
            "assets/demands4.png", 
            "assets/demands5.png", 
            "assets/demands6.png", 
            "assets/demands7.png"
        ],
        // Descrição geral do projeto
        overview: "Gerencie bugs, melhorias e tarefas com simplicidade. O Demands centraliza demandas, define prioridades e prazos, garantindo organização, foco e alinhamento da equipe no dia a dia corporativo.",
        // Funcionalidades do projeto
        functionalities: [ 
            "Centralização de demandas",
            "Definição de prioridades e prazos",
            "Organização da equipe",
            "Acompanhamento de bugs e melhorias"
        ],
        // Vantagens do projeto
        advantages: [
            "Maior organização no trabalho",
            "Foco nas tarefas prioritárias",
            "Alinhamento da equipe",
            "Redução de retrabalho"
        ],
        // Especificações técnicas do projeto
        specs: "Aplicação web desenvolvida com tecnologias front-end modernas, responsiva e otimizada para performance.",
        // Propósito do projeto
        purpose: "Facilitar o gerenciamento de projetos e tarefas em equipes de desenvolvimento.",
        // Tecnologias utilizadas no projeto
        technologies: ["HTML", "CSS", "JavaScript"],
        // Link para o projeto (pode ser um repositório GitHub, por exemplo)
        link: "https://github.com/JoaoVictorGomesSoares/DevTrack"
    },
    2: {
        title: "GLASSES",
        subtitle: "E-commerce de Óculos",
        images: [
            "assets/glasses1.png", 
            "assets/glasses2.png", 
            "assets/glasses3.png", 
            "assets/glasses4.png", 
            "assets/glasses5.png", 
            "assets/glasses6.png"
        ],
        overview: "Um e-commerce de óculos com catálogo de produtos, autenticação de usuário, carrinho de compras e integração com APIs.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    3: {
        title: "MOTO WHELLING",
        subtitle: "Jogo interativo",
        images: [
            "assets/WallpaperProject.png"
        ],
        overview: "Um jogo interativo desenvolvido com Canvas API. Oferece uma experiência divertida e desafiadora com mecânicas bem pensadas.",
        functionalities: [
            "Gráficos em tempo real",
            "Controles interativos",
            "Sistema de pontuação",
            "Níveis progressivos"
        ],
        advantages: [
            "Experiência imersiva",
            "Performance otimizada",
            "Compatibilidade cross-browser",
            "Design responsivo"
        ],
        specs: "Jogo web utilizando HTML5 Canvas para renderização gráfica, com JavaScript puro para lógica de jogo.",
        purpose: "Entreter e desafiar jogadores com mecânicas inovadoras.",
        technologies: ["Canvas API", "JavaScript", "HTML5"],
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    4: {
        title: "AUTH SERVER",
        subtitle: "Sistema de Autenticação e Autorização",
        images: [
            "assets/AUTH-SERVER-project-img.png"
        ],
        overview: "API responsável por autenticação segura de usuários, utilizando JWT, controle de roles e permissões, seguindo boas práticas de segurança com Spring Security.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    5: {
        title: "CONTA DIGITAL",
        subtitle: "API de Controle Financeiro",
        images: [
            "assets/CONTA-DIGITAL-project-img.png"
        ],
        overview: "API REST para gerenciamento de finanças pessoais, com registro de receitas e despesas, categorização e cálculo automático de saldo.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    6: {
        title: "AGENDA",
        subtitle: "Sistema de Agendamento de Serviços",
        images: [
            "assets/AGENDA-project-img.png"
        ],
        overview: "Sistema de agendamento de serviços, permitindo que os usuários marquem horários e gerenciem suas reservas.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    7: {
        title: "CHATREPETECO",
        subtitle: "API de Chat em Tempo Real",
        images: [
            "assets/CHATREPETECO-project-img.png"
        ],
        overview: "API de chat em tempo real, permitindo comunicação instantânea entre usuários.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    8: {
        title: "NOTIFICA",
        subtitle: "Sistema de Notificações em Microserviço",
        images: [
            "assets/NOTIFICA-project-img.png"
        ],
        overview: "Sistema de notificações em microserviço, permitindo o envio assíncrono de mensagens para os usuários.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    9: {
        title: "AUDITORIA",
        subtitle: "API de Gestão de Usuários e Logs",
        images: [
            "assets/AUDITORIA-project-img.png"
        ],
        overview: "API de gestão de usuários e logs, permitindo o controle e monitoramento das atividades dos usuários.",
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
        link: "https://github.com/JoaoVictorGomesSoares"
    }
};

// Dados das educações e cursos
const educationsData = {
    1: {
        title: "Bacharelado em Ciência da Computação",
        subtitle: "Universidade Federal Fluminense (UFF)",
        period: "2026 - 2030",
        description: "Atualmente cursando o 3º período do Bacharelado em Ciência da Computação na Universidade Federal Fluminense (UFF). Durante o curso, adquiri conhecimentos sólidos em algoritmos, estruturas de dados, programação orientada a objetos, desenvolvimento web e banco de dados. Participei de projetos acadêmicos e atividades extracurriculares que me proporcionaram experiência prática e aprimoraram minhas habilidades técnicas e de trabalho em equipe.",
        technologies: [
            "Java", 
            "Python", 
            "C++", 
            "SQL", 
            "HTML", 
            "CSS", 
            "JavaScript"
        ],
        certificate: "https://drive.google.com/file/d/1Xo9n8s2mLh7l3Zt5v6u8w9y0a1b2c3d/view?usp=sharing"
    },
    2: {
        title: "Spring Boot Essentials",
        subtitle: "Udemy",
        period: "2023",
        description: "Curso completo sobre Spring Boot, abordando desde os fundamentos até práticas avançadas de desenvolvimento de aplicações web. O curso cobriu temas como injeção de dependência, segurança, testes e integração com bancos de dados. Durante o curso, desenvolvi projetos práticos que me permitiram aplicar os conhecimentos adquiridos e aprimorar minhas habilidades em desenvolvimento com Spring Boot.",
        technologies: [
            "Spring Boot", 
            "Java"
        ],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    3: {
        title: "Java Advanced Programming",
        subtitle: "Udemy",
        period: "2023",
        description: "Curso avançado de programação em Java, focado em conceitos avançados e práticas recomendadas. O curso abordou tópicos como programação funcional, concorrência, e otimização de desempenho. Durante o curso, desenvolvi projetos práticos que me permitiram aplicar os conhecimentos adquiridos e aprimorar minhas habilidades em desenvolvimento Java.",
        technologies: [
            "Java"
        ],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    4: {
        title: "Git e GitHub Completo",
        subtitle: "Udemy",
        period: "2023",
        description: "Curso completo sobre Git e GitHub, cobrindo desde os fundamentos até práticas avançadas de versionamento e colaboração. O curso abordou conceitos de branching, merging, e uso do GitHub para gerenciamento de projetos. Durante o curso, desenvolvi projetos práticos que me permitiram aplicar os conhecimentos adquiridos e aprimorar minhas habilidades em versionamento de código.",
        technologies: [
            "Git", 
            "GitHub"
        ],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    5: {
        title: "SQL e Banco de Dados",
        subtitle: "Udemy",
        period: "2023",
        description: "Curso completo sobre SQL e banco de dados, cobrindo desde os fundamentos até práticas avançadas de modelagem e otimização. O curso abordou conceitos de relacionamento entre tabelas, consultas complexas, e uso de ferramentas de administração de banco de dados. Durante o curso, desenvolvi projetos práticos que me permitiram aplicar os conhecimentos adquiridos e aprimorar minhas habilidades em gestão de dados.",
        technologies: [
            "SQL", 
            "Banco de Dados"
        ],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    },
    6: {
        title: "Clean Code e SOLID Principles",
        subtitle: "Udemy",
        period: "2023",
        description: "Curso completo sobre práticas de programação limpa e princípios SOLID, focado em criar código mais legível, maintainable e escalável. O curso abordou conceitos de design de software, refatoração, e boas práticas de desenvolvimento. Durante o curso, desenvolvi projetos práticos que me permitiram aplicar os conhecimentos adquiridos e aprimorar minhas habilidades em programação orientada a objetos.",
        technologies: [
            "Clean Code", 
            "SOLID Principles"
        ],
        certificate: "https://www.udemy.com/certificate/UC-12345678/"
    }
};

// Dados de experiência profissional
const experiencesData = {
    1: {
        title: "Freelancer - Desenvolvedor Backend",
        company: "Empresa X",
        period: "2022 - 2023",
        description: "Atuei como desenvolvedor Backend, trabalhando com tecnologias como Java, Spring e Git. Desenvolvi interfaces responsivas e otimizei o desempenho de aplicações.",
        highlights: "Liderança de projeto, implementação de design system, otimização de performance e colaboração com equipes multidisciplinares.",
        tags: [
            "Java", 
            "Spring", 
            "Git", 
            "Backend"
        ]
    },
    2: {
        title: "Desenvolvedor Backend",
        company: "Empresa Y",
        period: "2023 - 2024",
        description: "Atuei como desenvolvedor Backend, trabalhando com tecnologias como Java, Spring e C++. Desenvolvi APIs RESTful e implementei soluções de banco de dados.",
        highlights: "Desenvolvimento de APIs RESTful, integração com bancos de dados, otimização de consultas e implementação de autenticação e autorização.",
        tags: [
            "Java", 
            "Spring", 
            "C++", 
            "SQL", 
            "Backend"
        ]
    },
    3: {
        title: "Engenheiro de Software",
        company: "Empresa Z",
        period: "2024 - 2025",
        description: "Atuei como engenheiro de software, trabalhando com tecnologias como Python e Java. Desenvolvi soluções de software escaláveis e implementei práticas de desenvolvimento ágil.",
        highlights: "Desenvolvimento de soluções escaláveis, implementação de práticas de desenvolvimento ágil, liderança técnica e colaboração com equipes multidisciplinares.",
        tags: [
            "Python", 
            "Java", 
            "SQL",
            "Clean Code",
            "Engenharia de Software"
        ]
    }
};

// Faz a função de abrir o modal de detalhes do projeto, preenchendo os dados dinamicamente com base no ID do projeto clicado
document.addEventListener('DOMContentLoaded', function() {

    // SEÇÃO "SOBRE" - expandBtns são os botões para expandir ou contrair os paragrafos de conteúdo
    const expandBtns = document.querySelectorAll('.expand-btn');
    expandBtns.forEach(button  => {
        const targetId = button.getAttribute('aria-controls');
        const content = document.getElementById(targetId);
        button.addEventListener('click', function() {

            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            if (!isExpanded) {
                // ABRIR
                content.style.height = content.scrollHeight + 'px';
                content.setAttribute('aria-hidden', 'false');
                button.setAttribute('aria-expanded', 'true');
                button.classList.add('expanded');
            } else {
                // FECHAR
                content.style.height = content.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    content.style.height = '80px';
                });

                content.setAttribute('aria-hidden', 'true');
                button.setAttribute('aria-expanded', 'false');
                button.classList.remove('expanded');
            }
        });
        // Limpa altura após animação (boa prática)
        content.addEventListener('transitionend', () => {
            if (button.getAttribute('aria-expanded') === 'true') {
                content.style.height = 'auto';
            }
        });
    });

    //SEÇÃO "SOBRE" - Permite alternar entre diferentes avatares ao clicar na imagem do avatar
    const avatarImg = document.getElementById('avatar');
    let avatarIndex = 0;
    const avatars = ['assets/avatar1.png', 'assets/avatar2.png', 'assets/avatar3.png', 'assets/avatar4.png'];
    if (avatarImg) {
        avatarImg.addEventListener('click', function() {
            avatarImg.classList.add('avatar-fade');

            setTimeout(() => {
                avatarIndex = (avatarIndex + 1) % avatars.length;
                avatarImg.src = avatars[avatarIndex];
            }, 150);
            
            setTimeout(() => {
                avatarImg.classList.remove('avatar-fade');
            }, 300); 
        });
    }

    //SEÇÃO "PROJETOS" - Adiciona o função abrir e fechar um modal com detalhes do projeto
    const projectCards = document.querySelectorAll('.project-card'); // Seleciona todos os cards de projeto
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            openProjectModal(projectId);
        });
    });

    //SEÇÃO "HABILIDADES" - Deixa os outros cards de habilidades menos destacados quando o mouse não estiver sobre eles
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const skillTechsContainer = this.closest('.skill-techs'); // Seleciona o container inteiro
            const allCardsInContainer = skillTechsContainer.querySelectorAll('.skill-card');

            allCardsInContainer.forEach(otherCard => {
                if (otherCard !== this) {
                    // Adiciona a classe 'dimmed' ao card para criar o efeito de destaque
                    otherCard.classList.add('dimmed');
                }
            });
        });
        // Quando o mouse sai de um card de habilidade, todos os cards na mesma seção voltam ao estado normal removendo a classe 'dimmed'
        card.addEventListener('mouseleave', function() {
            const skillTechsContainer = this.closest('.skill-techs');
            const allCardsInContainer = skillTechsContainer.querySelectorAll('.skill-card');

            allCardsInContainer.forEach(otherCard => {
                // Remove a classe 'dimmed' do card para restaurar o estado normal
                otherCard.classList.remove('dimmed');
            });
        });
    });

    //SEÇÃO "EDUCAÇÃO" - Adiciona a função abrir e fechar um modal com detalhes das educações
    const educationCards = document.querySelectorAll('.education-card'); // Seleciona todos os cards de educação
    educationCards.forEach(card => {
        card.addEventListener('click', function() {
            const educationId = this.getAttribute('data-education-id');
            openEducationModal(educationId);
        });
    });

    //SEÇÃO "EXPERIÊNCIA" - Adiciona a função abrir e fechar um modal com detalhes das experiências profissionais
    const experienceCards = document.querySelectorAll('.timeline-preview'); // Seleciona todos os cards de experiência profissional
    experienceCards.forEach(card => {
        card.addEventListener('click', function() {
            const experienceId = this.getAttribute('data-experience-id');
            openExperienceModal(experienceId);
        });
    });

    //SEÇÃO "EXPERIÊNCIA" - Deixa os outros cards de experiências menos destacados quando o mouse não estiver sobre eles
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const experienceContainer = this.closest('.timeline-horizontal');
            const allCardsInContainer = experienceContainer.querySelectorAll('.timeline-preview');

            allCardsInContainer.forEach(otherCard => {
                if (otherCard !== this) {
                    // Adiciona a classe 'dimmed' ao card para criar o efeito de destaque
                    otherCard.classList.add('dimmed');
                }
            });
        });
        // Quando o mouse sai de um card de experiência, todos os cards na mesma seção voltam ao estado normal removendo a classe 'dimmed'
        card.addEventListener('mouseleave', function() {
            const experienceContainer = this.closest('.timeline-horizontal');
            const allCardsInContainer = experienceContainer.querySelectorAll('.timeline-preview');

            allCardsInContainer.forEach(otherCard => {
                // Remove a classe 'dimmed' do card para restaurar o estado normal
                otherCard.classList.remove('dimmed');
            });
        });
    });

    //SEÇÃO "CONTATO" - Deixa os outros cards de contato menos destacados quando o mouse não estiver sobre eles
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const contactContainer = this.closest('.contact-card-grid');
            const allCardsInContainer = contactContainer.querySelectorAll('.contact-card');

            allCardsInContainer.forEach(otherCard => {
                if (otherCard !== this) {
                    // Adiciona a classe 'dimmed' ao card para criar o efeito de destaque
                    otherCard.classList.add('dimmed');
                }
            });
        });
        // Quando o mouse sai de um card de contato, todos os cards na mesma seção voltam ao estado normal removendo a classe 'dimmed'
        card.addEventListener('mouseleave', function() {
            const contactContainer = this.closest('.contact-card-grid');
            const allCardsInContainer = contactContainer.querySelectorAll('.contact-card');

            allCardsInContainer.forEach(otherCard => {
                // Remove a classe 'dimmed' do card para restaurar o estado normal
                otherCard.classList.remove('dimmed');
            });
        });
    });

    // Adiciona o evento de clique para fechar os modais com os botões de fechar e ao clicar fora do conteúdo do modal e tecla "Escape"
    const modalCloseButtons = document.querySelectorAll('.modal-close-btn');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-close-modal');
            closeModal(modalId);
        });
    });
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
});

// Função para abrir o modal com os detalhes do projeto com base no ID do projeto
function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('project-modal-title').textContent = data.title;
    document.getElementById('project-modal-subtitle').textContent = data.subtitle;

    const imagesContainer = document.getElementById('project-modal-images');
    imagesContainer.innerHTML = '';

    data.images.forEach(imgSrc => {
        if (imgSrc.includes('WallpaperProject.png')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'modal-placeholder';
            placeholder.textContent = 'Coloque a imagem aqui';
            imagesContainer.appendChild(placeholder);
            return;
        }

        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = data.title;
        imagesContainer.appendChild(img);
    });

    document.getElementById('project-modal-overview').textContent = data.overview;
    document.getElementById('project-modal-specs').textContent = data.specs;
    document.getElementById('project-modal-purpose').textContent = data.purpose;

    const functionalitiesList = document.getElementById('project-modal-functionalities');
    functionalitiesList.innerHTML = '';
    data.functionalities.forEach(func => {
        const li = document.createElement('li');
        li.textContent = func;
        functionalitiesList.appendChild(li);
    });

    const advantagesList = document.getElementById('project-modal-advantages');
    advantagesList.innerHTML = '';
    data.advantages.forEach(adv => {
        const li = document.createElement('li');
        li.textContent = adv;
        advantagesList.appendChild(li);
    });

    const technologiesContainer = document.getElementById('project-modal-technologies');
    technologiesContainer.innerHTML = '';
    data.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tech;
        technologiesContainer.appendChild(span);
    });

    const deployLinkElement = document.getElementById('project-modal-deploy-link');
    const repoLinkElement = document.getElementById('project-modal-repo-link');
    if (data.link && data.link !== '#') {
        deployLinkElement.href = data.link;
        deployLinkElement.style.display = 'inline-block';
        repoLinkElement.href = data.link;
        repoLinkElement.style.display = 'inline-block';
    } else {        
        deployLinkElement.style.display = 'none';
        repoLinkElement.style.display = 'none';
    }

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para abrir o modal com os detalhes da educação ou curso com base no ID da educação
function openEducationModal(educationId) {
    const data = educationsData[educationId];
    if (!data) return;

    document.getElementById('education-modal-title').textContent = data.title;
    document.getElementById('education-modal-institution').textContent = data.subtitle;
    document.getElementById('education-modal-period').textContent = data.period;
    document.getElementById('education-modal-description').textContent = data.description;

    // Preenche a lista de tecnologias aprendidas no curso ou educação
    const topicsList = document.getElementById('education-modal-topics');
    topicsList.innerHTML = '';
    data.technologies.forEach(technology => {
        const li = document.createElement('li');
        li.textContent = technology;
        topicsList.appendChild(li);
    });

    // Exibe o link do certificado se disponível
    const certificatePreview = document.getElementById('education-certificate-preview');
    if (certificatePreview) {
        certificatePreview.innerHTML = '';

        const link = document.createElement('a');
        link.href = data.certificate;
        link.target = '_blank';
        link.rel = 'noopener noreferrer'; 
        link.className = 'btn'; 
        link.textContent = 'Ver certificado'; 
        certificatePreview.appendChild(link);
    }

    const modal = document.getElementById('education-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Função para abrir o modal com os detalhes da experiência profissional com base no ID da experiência
function openExperienceModal(experienceId) {
    const data = experiencesData[experienceId];
    if (!data) return;
    
    document.getElementById('experience-modal-title').textContent = data.title;
    document.getElementById('experience-modal-company').textContent = data.company;
    document.getElementById('experience-modal-period').textContent = data.period;
    document.getElementById('experience-modal-description').textContent = data.description;
    document.getElementById('experience-modal-highlights').textContent = data.highlights;
    document.getElementById('experience-modal-tags').textContent = data.tags.join(', ');

    const modal = document.getElementById('experience-modal');
    modal.classList.remove('hidden');
    modal.classList.add('show');
    console.log('Modal de experiência aberto');
    document.body.style.overflow = 'hidden';
}

// Função para fechar um modal especifico com base no ID do modal
function closeModal(modalId) {
    if (!modalId) return;

    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.remove('show');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function closeAllModals() {
    const openModals = document.querySelectorAll('.modal-overlay.show');
    openModals.forEach(modal => {
        modal.classList.remove('show');
        modal.classList.add('hidden');
    });

    document.body.style.overflow = '';
}
