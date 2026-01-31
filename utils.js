const fs = require('fs');
const path = require('path');

module.exports = {
  getDirectoriesPaths(pathToDirectory) {
    const directoriesInDirectory = fs.readdirSync(pathToDirectory, { withFileTypes: true })
      .filter((item) => item.isDirectory())
      .map((item) => path.join(pathToDirectory, item.name));

    return [pathToDirectory, ...directoriesInDirectory];
  }
};
