# Guia de Desenvolvimento

Este documento serve como referência para manutenção e evolução do portfólio.

## Arquitetura atual

O projeto segue um modelo simples e direto:

- `Index.html` define a estrutura da interface.
- `script.js` centraliza os dados dos cards/modais e os comportamentos interativos.
- `pt.json` e `en.json` controlam o conteúdo traduzível da interface.
- `base.css` concentra tokens visuais e regras globais.
- `layout.css` concentra seções, componentes e ajustes responsivos.

## Fluxo recomendado para alterações

### 1. Conteúdo textual

Use este caminho quando a mudança for institucional ou editorial:

- Ajuste o HTML quando o texto estiver fixo na estrutura.
- Ajuste `pt.json` e `en.json` quando o texto usar atributos como `data-i18n`.
- Garanta equivalência entre os dois idiomas.

### 2. Projetos, formação e experiências

Os dados dos modais e dos cards são definidos em objetos dentro de `script.js`:

- `projectsData`
- `educationsData`
- `experiencesData`

Ao adicionar um novo item:

1. Inclua o card correspondente no `Index.html`, se necessário.
2. Cadastre os dados no objeto correto em `script.js`.
3. Adicione traduções no JSON quando houver conteúdo internacionalizado.
4. Confirme se as imagens existem em `assets/`.

### 3. Estilo visual

- Use `base.css` para variáveis, cores, tipografia e regras compartilhadas.
- Use `layout.css` para layout, seções, cards, botões, modais e responsividade.

Evite duplicar tokens visuais entre os dois arquivos.

### 4. Comportamento da interface

Em `script.js`, os comportamentos principais incluem:

- inicialização no `DOMContentLoaded`
- troca de tema com persistência
- troca de idioma com fallback
- expansão/recolhimento de blocos
- troca de avatar
- abertura e fechamento de modais

Ao mexer nessa lógica, valide sempre o estado salvo no `localStorage`.

## Boas práticas para este repositório

- Mantenha os nomes dos arquivos referenciados exatamente como estão no código.
- Não adicione chaves de tradução em apenas um idioma.
- Prefira editar dados centralizados em `script.js` em vez de duplicar conteúdo no HTML.
- Revise links externos antes de publicar.
- Valide no mínimo em desktop e mobile.

## Checklist manual antes de publicar

- Página abre sem erros visuais graves.
- Tema claro e escuro alternam corretamente.
- Idioma muda sem quebrar títulos, botões e modais.
- Cards e modais exibem o conteúdo correto.
- Imagens carregam corretamente.
- Currículo e links de contato abrem como esperado.

## Melhorias futuras recomendadas

- Adicionar testes visuais básicos.
- Adicionar lint para JavaScript e CSS.
- Extrair parte dos dados de `script.js` para arquivos externos, caso o conteúdo continue crescendo.
- Criar uma convenção de versionamento para evolução contínua do portfólio.
