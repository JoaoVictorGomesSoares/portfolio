// Dados dos projetos
const projectsData = {
    1: {
        title: "DEMANDS - Organize tarefas de equipes",
        images: ["assets/demands1.png", "assets/demands2.png", "assets/demands3.png", "assets/demands4.png", "assets/demands5.png", "assets/demands6.png", "assets/demands7.png"], // Adicionar mais imagens quando disponíveis
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
        title: "Projeto 2",
        images: ["assets/WallpaperProject.png"], // Placeholder
        overview: "Um aplicativo de e-commerce desenvolvido com React e Node.js. Inclui carrinho de compras, autenticação de usuário e integração com APIs.",
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
        specs: "Aplicação full-stack com front-end em React e back-end em Node.js, utilizando MongoDB como banco de dados.",
        purpose: "Criar uma plataforma de e-commerce completa e escalável.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/JoaoVictorGomesSoares"
    },
    3: {
        title: "Projeto 3",
        images: ["assets/WallpaperProject.png"], // Placeholder
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
    }
};

// Funcionalidade de abrir modal ao clicar no cartão
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project-id');
            openModal(projectId);
        });
    });
    
    // Fechar modal
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Funcionalidade de expandir/retrair parágrafos individuais
    const expandBtns = document.querySelectorAll('.expand-btn');
    
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
});

function openModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;
    
    // Preencher título
    document.getElementById('modal-title').textContent = data.title;
    
    // Preencher imagens
    const imagesContainer = document.getElementById('modal-images');
    imagesContainer.innerHTML = '';
    data.images.forEach(imgSrc => {
        if (imgSrc.includes('WallpaperProject.png')) {
            // Placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'modal-placeholder';
            placeholder.textContent = 'Coloque a imagem aqui';
            imagesContainer.appendChild(placeholder);
        } else {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = data.title;
            imagesContainer.appendChild(img);
        }
    });
    
    // Preencher seções
    document.getElementById('modal-overview').textContent = data.overview;
    
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
    
    document.getElementById('modal-specs').textContent = data.specs;
    document.getElementById('modal-purpose').textContent = data.purpose;
    
    const technologiesContainer = document.getElementById('modal-technologies');
    technologiesContainer.innerHTML = '';
    data.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tech;
        technologiesContainer.appendChild(span);
    });
    
    // Link do projeto
    const linkElement = document.getElementById('modal-link');
    if (data.link && data.link !== '#') {
        linkElement.href = data.link;
        linkElement.style.display = 'inline-block';
    } else {
        linkElement.style.display = 'none';
    }
    
    // Mostrar modal
    document.getElementById('project-modal').classList.add('show');
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('show');
}
