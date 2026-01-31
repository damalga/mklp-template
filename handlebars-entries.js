const fs = require('fs');
const path = require('path');

function listPages() {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const files = listFiles(pagesDir);
  return files.map(file => ({
    name: path.parse(file).name,
    path: path.relative(__dirname, file)
  }));
}

function listFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents
    .filter(dirent => dirent.isDirectory() && !['partials', 'helpers'].includes(dirent.name))
    .map(dirent => {
      const res = path.resolve(dir, dirent.name);
      return listFiles(res);
    })
    .reduce((acc, fileArray) => acc.concat(fileArray), []);

  return [...files, ...dirents.filter(dirent => dirent.isFile()).map(dirent => path.resolve(dir, dirent.name))];
}

module.exports = listPages();
