# Portfólio João Victor

Site estático pessoal em HTML5, CSS3 e JavaScript puro, desenvolvido para apresentar projetos, habilidades, formação e contato. O foco é oferecer uma interface leve, responsiva e profissional sem dependências externas.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro
- JSON para internacionalização

## Estrutura principal

- `Index.html`: marcação semântica, seções, modais e atributos de i18n.
- `base.css`: reset, tokens visuais, tipografia e estilos globais.
- `layout.css`: layout, grid, componentes e responsividade.
- `script.js`: dados, comportamento, tema, idioma e persistência.
- `pt.json` / `en.json`: conteúdo traduzido para internacionalização.
- `assets/`: imagens, ícones e recursos estáticos.
- `docs/`: documentação técnica e de manutenção.

## Execução local

1. Abra `Index.html` diretamente no navegador para visualização rápida.
2. Use Live Server no VS Code para desenvolvimento com recarga automática.

## Documentação

- `docs/overview.md`: visão geral do portfólio.
- `docs/structure.md`: arquitetura de pastas e separação de CSS.
- `docs/decisions.md`: decisões técnicas e justificativas.
- `docs/future-improvements.md`: melhorias planejadas.
- `docs/guia-desenvolvimento.md`: fluxo de manutenção e regras de alteração.
- `docs/estrutura-projeto.md`: visão da organização do repositório.

## Observações

- Projeto estático sem pipeline de build.
- Dados de cards e modais centralizados em `script.js`.
- Idioma e tema persistem no `localStorage`.
- Não há dependência de frameworks externos.

## Recomendações

- Atualize traduções em ambos `pt.json` e `en.json`.
- Use `base.css` para estilos globais e `layout.css` para composição.
- Valide tema, idioma e modais após cada alteração.
- Mantenha `docs/` sincronizado com a evolução do projeto.
