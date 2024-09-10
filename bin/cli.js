#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'templates');
const targetDir = path.join(process.cwd(), 'prompt');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir);
}

['Frontend.md', 'Backend.md', 'Main.md'].forEach(file => {
  const sourceFile = path.join(sourceDir, file);
  const targetFile = path.join(targetDir, file);
  fs.copyFileSync(sourceFile, targetFile);
  console.log(`Created ${targetFile}`);
});

console.log('Promptology files have been installed successfully!');