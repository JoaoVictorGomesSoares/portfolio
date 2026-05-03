# Portfólio João Victor

Portfólio pessoal desenvolvido em HTML, CSS e JavaScript puro para apresentar perfil profissional, projetos, habilidades, formação, experiências e canais de contato.

O projeto foi estruturado como uma aplicação front-end estática, sem dependências de build, com foco em boa apresentação visual, navegação por seções, suporte a dois idiomas e alternância entre tema claro e escuro.

## Visão geral

Principais recursos do projeto:

- Navegação por âncoras entre as seções principais.
- Internacionalização com `pt-BR` e `en-US` via arquivos JSON.
- Persistência de idioma e tema com `localStorage`.
- Modal de detalhes para projetos, formação e experiência.
- Troca de avatar com interação visual.
- Estrutura responsiva baseada em CSS separado por responsabilidade.

## Tecnologias

- `HTML5`
- `CSS3`
- `JavaScript`
- `JSON` para conteúdo traduzível

## Estrutura principal

- `Index.html`: estrutura semântica da página e marcação das seções/modais.
- `base.css`: reset, tokens visuais, variáveis globais e sistema de cores.
- `layout.css`: layout, componentes e regras responsivas.
- `script.js`: inicialização da interface, tema, idioma, expansão de conteúdo e modais.
- `pt.json`: textos em português.
- `en.json`: textos em inglês.
- `assets/`: imagens, ícones, avatares e banners dos projetos.

## Início rápido

Como é um projeto estático, você pode rodar de duas formas:

1. Abrir `Index.html` diretamente no navegador.
2. Servir a pasta com uma extensão como Live Server para testar mudanças com recarga rápida.

Se quiser um fluxo simples local:

1. Abra a pasta do projeto no editor.
2. Edite `Index.html`, `script.js`, `base.css`, `layout.css` ou os arquivos JSON.
3. Recarregue o navegador para validar.

## Documentação complementar

Os documentos de apoio ficam em `docs/`:

- [Início Rápido](docs/inicio-rapido.md)
- [Guia de Desenvolvimento](docs/guia-desenvolvimento.md)
- [Estrutura do Projeto](docs/estrutura-projeto.md)
- [Changelog](docs/changelog.md)
- [Entrega Final](docs/entrega-final.md)
- [Resumo das Mudanças](docs/resumo-mudancas.md)

## Convenções do projeto

- O conteúdo visual e institucional está concentrado no HTML e nos arquivos de tradução.
- Os dados dos cards e modais ficam em objetos JavaScript dentro de `script.js`.
- `base.css` concentra design tokens; `layout.css` concentra composição visual.
- Alterações de idioma precisam manter paridade entre `pt.json` e `en.json`.

## Pontos de atenção

- O projeto não possui pipeline de build, lint ou testes automatizados no estado atual.
- Alguns links de deploy dos projetos ainda estão sem URL final e permanecem como `null` em `script.js`.
- Vale revisar periodicamente se todas as imagens referenciadas em `script.js` estão disponíveis em `assets/`.

## Próximos passos sugeridos

- Manter a pasta `docs/` atualizada a cada evolução relevante do projeto.
- Revisar e completar links de deploy e repositórios dos projetos exibidos.
- Considerar uma etapa futura de otimização de imagens e validação automática.
