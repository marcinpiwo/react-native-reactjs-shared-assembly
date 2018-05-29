const path = require('path');

module.exports = {
  getProjectRoots() {
    return [
      // root of the (rn) project
      __dirname,

      // getting access to `shared` 
      path.join(__dirname, "../frontend/src/shared"),


    ];
  }
};

