const path = require('path');
const projectName = __dirname;
const configPath = path.resolve(projectName, 'package.json');
const { promisify } = require('util');
let { readFile, writeFile } = require('fs');

readFile = promisify(readFile);
writeFile = promisify(writeFile);

const normalizePath = path => {
  if (path.includes('/') || path.includes('\\')) {
    path = path.slice(
      (path.indexOf('/') > -1
        ? path.lastIndexOf('/') + 1
        : path.lastIndexOf('\\')) + 1
    )
  }
  return path;
}

const defineProjectName = async name => {
  try {
    const config = JSON.parse(await readFile(configPath, 'utf-8'));
    config.name = normalizePath(name);
    await writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8');
    console.log(`Package.json name property was successfully renamed with ${config.name}`);
  } catch (e) {
    console.error('Something was wrong during the renaming package.json name property', e);
  }
}

defineProjectName(__dirname);
