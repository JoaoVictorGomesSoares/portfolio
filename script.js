// Dados dos projetos
const projectsData = {
    1: {
        title: "DEMANDS - Organize tarefas de equipes",
        images: ["assets/demands1.png", "assets/demands2.png", "assets/demands3.png", "assets/demands4.png", "assets/demands5.png", "assets/demands6.png", "assets/demands7.png"],
        overview: "Gerencie bugs, melhorias e tarefas com simplicidade. O Demands centraliza demandas, define prioridades e prazos, garantindo organização, foco e alinhamento da equipe no dia a dia corporativo.",
        functionalities: [
            "Centralização de demandas",
            "Definição de prioridades e prazos",
            "Organização da equipe",
            "Acompanhamento de bugs e melhorias"
        ],
        advantages: [
            "Maior organização no trabalho",
            "Foco nas tarefas prioritárias",
            "Alinhamento da equipe",
            "Redução de retrabalho"
        ],
        specs: "Aplicação web desenvolvida com tecnologias front-end modernas, responsiva e otimizada para performance.",
        purpose: "Facilitar o gerenciamento de projetos e tarefas em equipes de desenvolvimento.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/JoaoVictorGomesSoares/DevTrack"
    },
    2: {
        title: "GLASSES - E-commerce de Óculos",
        images: ["assets/glasses1.png", "assets/glasses2.png", "assets/glasses3.png", "assets/glasses4.png", "assets/glasses5.png", "assets/glasses6.png"],
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
        title: "MOTO WHELLING - Jogo interativo",
        images: ["assets/WallpaperProject.png"],
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
        title: "AUTH SERVER - Sistema de Autenticação e Autorização",
        images: ["assets/AUTH-SERVER-project-img.png"],
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
        title: "CONTA DIGITAL - API de Controle Financeiro",
        images: ["assets/CONTA-DIGITAL-project-img.png"],
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
        title: "AGENDA - Sistema de Agendamento de Serviços",
        images: ["assets/AGENDA-project-img.png"],
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
        title: "CHATREPETECO - API de Chat em Tempo Real",
        images: ["assets/CHATREPETECO-project-img.png"],
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
        title: "NOTIFICA - Sistema de Notificações (Microserviço)",
        images: ["assets/NOTIFICA-project-img.png"],
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
        title: "AUDITORIA - API de Gestão de Usuários e Logs",
        images: ["assets/AUDITORIA-project-img.png"],
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

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    const expandBtns = document.querySelectorAll('.expand-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    const avatarImg = document.getElementById('avatar');
    let avatarIndex = 0;
    const avatars = ['assets/avatar1.png', 'assets/avatar2.png', 'assets/avatar3.png', 'assets/avatar4.png'];

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeModal();
        }
    });

    expandBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.classList.toggle('expanded');
                this.classList.toggle('expanded');
            }
        });
    });

    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const skillTechsContainer = this.closest('.skill-techs');
            const allCardsInContainer = skillTechsContainer.querySelectorAll('.skill-card');

            allCardsInContainer.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.add('dimmed');
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            const skillTechsContainer = this.closest('.skill-techs');
            const allCardsInContainer = skillTechsContainer.querySelectorAll('.skill-card');

            allCardsInContainer.forEach(otherCard => {
                otherCard.classList.remove('dimmed');
            });
        });
    });

    if (avatarImg) {
        avatarImg.style.cursor = 'pointer';
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
});

function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;

    const imagesContainer = document.getElementById('modal-images');
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

    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-specs').textContent = data.specs;
    document.getElementById('modal-purpose').textContent = data.purpose;

    const functionalitiesList = document.getElementById('modal-functionalities');
    functionalitiesList.innerHTML = '';
    data.functionalities.forEach(func => {
        const li = document.createElement('li');
        li.textContent = func;
        functionalitiesList.appendChild(li);
    });

    const advantagesList = document.getElementById('modal-advantages');
    advantagesList.innerHTML = '';
    data.advantages.forEach(adv => {
        const li = document.createElement('li');
        li.textContent = adv;
        advantagesList.appendChild(li);
    });

    const technologiesContainer = document.getElementById('modal-technologies');
    technologiesContainer.innerHTML = '';
    data.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tech;
        technologiesContainer.appendChild(span);
    });

    const linkElement = document.getElementById('modal-link');
    if (data.link && data.link !== '#') {
        linkElement.href = data.link;
        linkElement.style.display = 'inline-block';
    } else {
        linkElement.style.display = 'none';
    }

    const modal = document.getElementById('project-modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
