# Decisões Tomadas

O portfólio usa JavaScript puro para garantir leveza, controle total e ausência de dependências externas. Essa decisão reduz o tamanho dos ativos e evita overhead de build ou bibliotecas.

Não foi usado framework porque o projeto é estático e não exige abstrações adicionais. A escolha favorece simplicidade, menor superfície de manutenção e performance mais previsível.

Os dados dos projetos e conteúdos são organizados em objetos JavaScript dentro de `script.js`, complementados por JSON estático para tradução. Esse modelo funciona como um API mock local.

Essa configuração mantém o fluxo de dados previsível, facilita atualizações manuais e suporta conteúdo dinâmico sem backend.

# Guia de Desenvolvimento

Este guia define fluxo e boas práticas para manutenção do portfólio.

## Fluxo de alteração

1. Atualize textos de interface em `pt.json` e `en.json`.
2. Modifique `Index.html` apenas para mudanças na estrutura ou seções.
3. Ajuste `script.js` para comportamento, tema, idioma e dados de cards/modais.
4. Use `base.css` para tokens e estilos globais.
5. Use `layout.css` para layout, componentes e responsividade.

## Boas práticas

- Garanta paridade entre `pt.json` e `en.json`.
- Não duplique texto entre HTML e JSON.
- Centralize dados de projetos em `script.js`.
- Evite misturar regras de layout em `base.css`.
- Valide a interface em desktop e mobile.

## Validação mínima

- Tema claro/escuro alterna corretamente.
- Idioma muda sem perder conteúdo.
- Modais abrem e fecham sem erro.
- Imagens e links carregam corretamente.

## Regras de documentação

- Atualize `docs/` sempre que a estrutura ou o fluxo de dados mudar.
- Documente alterações técnicas relevantes.
- Mantenha arquivos de documentação claros e concisos.

