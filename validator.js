const fs = require('fs');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');

const FILE_NAME_PATTERN = /^[a-z0-9.-]+$/;
const MANDATORY_TESTS = true;
const nonCompliant = [];
const testsWithoutSource = [];
let filesChecked = 0;
let testFilesChecked = 0;

// Check naming convention on files in src folder
checkDir('src');
// Check naming convention in tests folder only if it exists
if (fs.existsSync(path.join(__dirname, 'tests'))) checkDir('tests');
// Check source file exists for each test file
if (MANDATORY_TESTS) checkTests('tests');

console.log(`\nChecked ${filesChecked} files.`);
if (nonCompliant.length > 0) {
  console.error(chalk.red('❌ ERROR: Non compliant directories and folders names: '));
  console.log(nonCompliant);
} else {
  console.log(chalk.green('✔️ All files and directories comply with naming convention.'));
}

if (MANDATORY_TESTS) console.log(`\nChecked ${testFilesChecked} test files.`);
if (testsWithoutSource.length > 0) {
  console.error(chalk.red('❌ ERROR: There are tests without the correspondent source file: '));
  console.log(testsWithoutSource);
} else if (testFilesChecked > 0) {
  console.log(chalk.green('✔️ All test files have their correspondent source file.'));
}

if (nonCompliant.length > 0 || testsWithoutSource.length > 0) {
  process.exit(1);
}

/**
 * Checks, that directory and file names are compliant with the chosen naming convention.
 * The convention is kebab case that also accepts dots (.)
 * @param dirPath The path to check
 */
function checkDir(dirPath) {
  let entries;
  try {
    entries = glob.sync(path.resolve(__dirname, dirPath, '**', '+(*.js|*.jsx|*.hbs|*.html|*.scss|*.sass)'));
  } catch (error) {
    console.error(`ERROR: Directory "${dirPath}" does not exist`);
    return;
  }

  entries.forEach((entry) => {
    const name = path.basename(entry);

    if (!FILE_NAME_PATTERN.test(name)) {
      // Sass files are allowed to start with an underscore (_)
      if (!(name.startsWith('_') && (name.endsWith('.scss') || name.endsWith('.sass')))) {
        nonCompliant.push(path.join(dirPath, name));
      }
    }

    filesChecked++;
  });
}

/**
 * Checks that each test file (any file inside "tests" directory that ends in "-spec.js") has a correspondent source
 * file, in the same path (replacing "tests" with "src") and the file name is the same, only without the "-spec" part.
 * @param dirPath The path to check
 */
function checkTests(dirPath) {
  let entries;
  try {
    entries = fs.readdirSync(path.join(__dirname, dirPath), { withFileTypes: true });
  } catch (error) {
    console.error('ERROR: There is no "tests" directory and it is MANDATORY');
    return;
  }

  entries.forEach((entry) => {
    const name = entry.name;
    if (entry.isDirectory()) {
      checkTests(path.join(dirPath, name));
    } else if (name.endsWith('-spec.js')) {
      testFilesChecked++;
      const testFilePath = path.join(__dirname, dirPath, name);
      const sourceFilePath = testFilePath
        .replace('tests', 'src')
        .replace('-spec', '');
      if (!fs.existsSync(sourceFilePath)) {
        testsWithoutSource.push(path.join(dirPath, name));
      }
    }
  });
}
