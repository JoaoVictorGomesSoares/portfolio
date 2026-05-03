# Estrutura do Projeto

## Visão da raiz

```text
PORTFOLIO/
|-- assets/
|-- Index.html
|-- base.css
|-- layout.css
|-- script.js
|-- pt.json
|-- en.json
|-- curriculum-JoaoVictorGomesSoares.pdf
|-- favicon.ico
`-- docs/
```

## Responsabilidade por arquivo

### `Index.html`

- Estrutura principal da página.
- Seções de navegação, hero, sobre, projetos, habilidades, educação, experiência e contato.
- Estrutura dos modais.
- Atributos `data-i18n` usados para internacionalização.

### `base.css`

- Reset e base global.
- Variáveis CSS.
- Paleta de cores.
- Tipografia.
- Tokens de espaçamento, borda, sombra e transição.
- Definição base dos temas claro e escuro.

### `layout.css`

- Layout das seções.
- Navegação.
- Hero.
- Cards e grids.
- Modais.
- Responsividade.
- Estados visuais e animações complementares.

### `script.js`

- Dados dos projetos, formações e experiências.
- Controle de idioma e tema.
- Captura de fallback de tradução.
- Atualização dos textos na interface.
- Eventos de clique e abertura de modais.
- Regras de persistência no `localStorage`.

### `pt.json` e `en.json`

- Textos usados pela camada de internacionalização.
- Metadados de idioma.
- Labels, títulos, descrições e conteúdo traduzido.

### `assets/`

- Avatares.
- Ícones de tecnologia.
- Imagens de projeto.
- Imagens de apoio visual da interface.

### `docs/`

- Documentação funcional e de manutenção do repositório.

## Organização lógica

O projeto separa bem as responsabilidades:

- Estrutura: `Index.html`
- Aparência base: `base.css`
- Aparência de layout: `layout.css`
- Comportamento e dados: `script.js`
- Conteúdo traduzível: `pt.json` e `en.json`

Essa separação torna a manutenção simples para um portfólio sem framework.
