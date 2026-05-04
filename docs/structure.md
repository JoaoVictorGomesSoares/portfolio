# Estrutura do Projeto

A arquitetura do repositório separa recursos, estilo, comportamento e conteúdo localizado.

- `assets/`: imagens, ícones, avatares e recursos visuais.
- `Index.html`: marcação semântica, seções, modais e atributos de i18n.
- `base.css`: reset, variáveis, tipografia e regras globais.
- `layout.css`: grid, layout de seções, cards e responsividade.
- `script.js`: dados dos projetos, inicialização, idioma, tema e eventos.
- `pt.json` / `en.json`: conteúdo traduzido e labels de interface.

A separação de CSS é intencional:
- `base.css` mantém a fundação visual, incluindo reset e tokens universais.
- `layout.css` implementa a estrutura de layout, posicionamento e comportamento responsivo.

Essa organização torna a manutenção mais previsível e reduz o risco de acoplamento entre estilos globais e regras de composição.

## Organização do repositório

- `Index.html`: marcação semântica, seções do portfólio e modais.
- `base.css`: reset, tokens visuais e estilos globais.
- `layout.css`: layout, grid, componentes e responsividade.
- `script.js`: dados, comportamento de tema, idioma e modais.
- `pt.json` / `en.json`: conteúdo traduzido e labels.
- `assets/`: imagens, ícones, avatars e recursos estáticos.
- `docs/`: documentação técnica e de manutenção.

## Responsabilidade por arquivo

- `Index.html`: estrutura da interface e pontos de inserção de conteúdo.
- `base.css`: configuração inicial de estilos universais.
- `layout.css`: composição visual e adaptação responsiva.
- `script.js`: lógica de interação, persistência e dados.
- `pt.json` / `en.json`: textos de internacionalização.
- `assets/`: elementos visuais usados pela interface.

## Lógica de organização

A separação entre HTML, CSS e JavaScript mantém o projeto modular. O uso de JSON para tradução evita duplicação de conteúdo e facilita alterações de idioma.
