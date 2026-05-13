// validate-assets.js - Script de validação automática de assets
import { assets } from './assets.js';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Função para verificar se arquivo existe
function fileExists(filePath) {
  try {
    fs.accessSync(path.resolve(__dirname, filePath), fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

// Função para obter tamanho do arquivo
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(path.resolve(__dirname, filePath));
    return stats.size;
  } catch {
    return 0;
  }
}

// Função para validar nome do arquivo
function validateFileName(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  const regex = /^.*-\d+w$/; // Ex: card-1-420w
  return regex.test(fileName);
}

// Função para validar formato
function validateFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ['.webp', '.svg'].includes(ext);
}

// Função para gerar relatório HTML
function generateReport(results) {
  const reportDir = path.join(__dirname, 'reports');
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
  }

  let html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Assets</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .asset { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
        .status { color: green; }
        .error { color: red; }
        img { max-width: 100px; max-height: 100px; }
    </style>
</head>
<body>
    <h1>Relatório de Validação de Assets</h1>
    <p>Total de assets verificados: ${results.length}</p>
`;

  results.forEach(result => {
    const statusClass = result.errors.length === 0 ? 'status' : 'error';
    const statusText = result.errors.length === 0 ? 'OK' : 'Erros: ' + result.errors.join(', ');
    html += `
    <div class="asset">
        <h3>${result.category}: ${result.name}</h3>
        <p><strong>Status:</strong> <span class="${statusClass}">${statusText}</span></p>
        <p><strong>Caminho:</strong> ${result.path}</p>
        <p><strong>Tamanho:</strong> ${result.size} bytes</p>
        ${result.path.endsWith('.webp') || result.path.endsWith('.svg') ? `<img src="../${result.path}" alt="${result.name}">` : ''}
    </div>
    `;
  });

  html += `
</body>
</html>
`;

  fs.writeFileSync(path.join(reportDir, 'assets-report.html'), html);
  console.log('Relatório gerado em reports/assets-report.html');
}

// Função principal de validação
function validateAssets() {
  const results = [];

  // Validar imagens
  for (const [project, data] of Object.entries(assets.images.projects)) {
    // Card
    for (const [res, filePath] of Object.entries(data.card)) {
      const exists = fileExists(filePath);
      const size = exists ? getFileSize(filePath) : 0;
      const errors = [];
      if (!exists) errors.push('Arquivo não encontrado');
      if (!validateFileName(filePath)) errors.push('Nome inválido');
      if (!validateFormat(filePath)) errors.push('Formato inválido');
      results.push({
        category: `Imagem - ${project} card ${res}`,
        name: `${project}-card-${res}`,
        path: filePath,
        size,
        errors
      });
    }

    // Modals
    if (data.modals) {
      data.modals.forEach(modal => {
        for (const [res, filePath] of Object.entries(modal).filter(([k]) => k !== 'name')) {
          const exists = fileExists(filePath);
          const size = exists ? getFileSize(filePath) : 0;
          const errors = [];
          if (!exists) errors.push('Arquivo não encontrado');
          if (!validateFileName(filePath)) errors.push('Nome inválido');
          if (!validateFormat(filePath)) errors.push('Formato inválido');
          results.push({
            category: `Imagem - ${project} modal ${modal.name} ${res}`,
            name: `${modal.name}-${res}`,
            path: filePath,
            size,
            errors
          });
        }
      });
    }
  }

  // Validar ícones
  assets.icons.forEach(icon => {
    const exists = fileExists(icon.path);
    const size = exists ? getFileSize(icon.path) : 0;
    const errors = [];
    if (!exists) errors.push('Arquivo não encontrado');
    if (!validateFileName(icon.path)) errors.push('Nome inválido');
    if (!validateFormat(icon.path)) errors.push('Formato inválido');
    results.push({
      category: 'Ícone',
      name: icon.name,
      path: icon.path,
      size,
      errors
    });
  });

  // Validar fontes (se houver)
  assets.fonts.forEach(font => {
    // Similar
  });

  // Exibir resultados no console
  results.forEach(result => {
    if (result.errors.length > 0) {
      console.error(`Erro em ${result.category} ${result.name}: ${result.errors.join(', ')}`);
    } else {
      console.log(`OK: ${result.category} ${result.name}`);
    }
  });

  // Gerar relatório
  generateReport(results);

  return results;
}

// Executar validação
validateAssets();