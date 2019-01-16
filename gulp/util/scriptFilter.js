const path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
const ScriptFilter = function(name) {

  return /(\.(js)$)/i.test(path.extname(name));

};

module.exports = ScriptFilter;