#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');

function printUsage() {
  console.log(`Usage:
  npx canva-slide-excalidraw-style [--path <skills-directory>]

Examples:
  npx canva-slide-excalidraw-style
  npx github:OWNER/REPOSITORY
  npx canva-slide-excalidraw-style --path C:\\Users\\you\\.codex\\skills`);
}

function parseArgs(args) {
  const options = {};
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === '--help' || args[i] === '-h') {
      options.help = true;
    } else if (args[i] === '--path') {
      options.path = args[i + 1];
      i += 1;
    } else {
      throw new Error(`Unknown argument: ${args[i]}`);
    }
  }
  return options;
}

function getDefaultSkillsDirectory() {
  return path.join(process.env.CODEX_HOME || path.join(os.homedir(), '.codex'), 'skills');
}

function copyDirectory(source, destination) {
  fs.mkdirSync(destination, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    if (entry.name === 'bin' || entry.name === 'package.json' || entry.name === 'README.md' || entry.name === 'LICENSE') {
      continue;
    }
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath);
    } else {
      fs.copyFileSync(sourcePath, destinationPath);
    }
  }
}

try {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printUsage();
    process.exit(0);
  }

  const targetRoot = path.resolve(options.path || getDefaultSkillsDirectory());
  const target = path.join(targetRoot, 'canva-slide-excalidraw-style');
  const source = path.resolve(__dirname, '..');

  copyDirectory(source, target);
  console.log(`Installed canva-slide-excalidraw-style to ${target}`);
} catch (error) {
  console.error(`Installation failed: ${error.message}`);
  process.exit(1);
}
