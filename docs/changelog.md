# Changelog

Este changelog registra a linha de base documental do projeto a partir do estado atual do repositório.

O formato segue uma abordagem simples inspirada em Keep a Changelog.

## [1.0.2] - 2026-05-13

### Corrigido

- Atualizado o texto visível do botão de tema para alternar corretamente entre claro/escuro.
- Garantida a atualização dinâmica do label do botão de tema também ao trocar o idioma.
- Ajustado o layout do seletor de idioma para que `.lang-text` ocupe a maior parte do botão e `.lang-code` use apenas o espaço necessário.
- Sincronizada a documentação com os arquivos reais presentes em `docs/`.

### Documentado

- Correções no comportamento de UI do tema e do seletor de idioma.
- Alinhamento do `README.md` e `docs/` com a estrutura atual de arquivos.

## [1.0.1] - 2026-05-04

### Atualizado

- `README.md` revisado para alinhar visão geral, tecnologias, estrutura do projeto e recomendações.
- `docs/overview.md` aprimorado com objetivo do portfólio, tecnologias e propósito profissional.
- `docs/structure.md` atualizado com separação clara de `base.css` e `layout.css` e organização de pastas.
- `docs/decisions.md` incluído justificativa técnica para JavaScript puro, ausência de framework e modelo de dados.
- `docs/future-improvements.md` detalhado com testes automatizados, otimização de imagens e i18n.
- `docs/decisions.md` também documenta o fluxo de manutenção e boas práticas.
- `docs/structure.md` ajustado para refletir responsabilidade de arquivos e lógica de organização.

### Documentado

- Estrutura de documentação consistente em `docs/` e links referenciados pelo `README.md`.
- Decisões técnicas de front-end, incluindo separação de responsabilidades e dados em JS/JSON.
- Melhoria na clareza dos padrões de desenvolvimento e validação do projeto.

### Observações

- Esta versão formaliza o alinhamento entre a documentação técnica e o estado atual do repositório.
- O projeto mantém sua natureza estática, sem pipeline automatizado de testes, lint ou build.

## [1.0.0] - 2026-05-03

### Adicionado

- `README.md` com visão geral do projeto, tecnologias, estrutura e links para a documentação.
- `docs/overview.md` com instruções de visão geral e propósito do projeto.
- `docs/decisions.md` com orientações de manutenção, decisões técnicas e modelo de dados.
- `docs/structure.md` com o mapeamento dos arquivos e responsabilidades.
- `docs/changelog.md` com o registro de mudanças.
- `docs/resumo-mudancas.md` com o resumo objetivo das mudanças feitas nesta etapa.

### Documentado

- Arquitetura front-end estática baseada em HTML, CSS, JavaScript e JSON.
- Fluxo de idioma, tema, modais e organização de dados centrais.
- Estrutura esperada da pasta `assets/` e da raiz do projeto.

### Observações

- Esta versão representa a primeira formalização da documentação do repositório.
- O projeto atual não possui pipeline automatizado de testes, lint ou build.
