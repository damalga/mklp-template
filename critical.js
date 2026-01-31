const glob = require('glob');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const templates = glob.sync(path.resolve(__dirname, 'dist', '*.html'));

templates.forEach(async (template) => {
  try {
    const filename = path.basename(template);
    const html = fs.readFileSync(template, { encoding: 'utf-8' });

    const jsdom = new JSDOM(html);
    const { window: { document } } = jsdom;
    const preloads = getPreloadStyles(document);

    preloads.forEach(preload => {
      addNoScriptStyle(document, preload);
    });

    fs.writeFileSync(path.resolve(__dirname, 'dist', filename), jsdom.serialize());
  } catch (err) {
    console.error('[Error]', err);
  }
});

function getPreloadStyles(document) {
  return [...document.querySelectorAll('link[rel="preload"][as="style"]')];
}

function addNoScriptStyle(document, preloadNode) {
  const noscript = document.createElement('noscript');
  const link = document.createElement('link');
  const nextLine = document.createTextNode('\n');

  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', preloadNode.getAttribute('href'));

  preloadNode.parentNode.insertBefore(noscript, preloadNode.nextSibling);

  preloadNode.after(nextLine);
  noscript.appendChild(link);
  noscript.after(nextLine);
}

