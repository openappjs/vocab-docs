var test = require('tape');
var fs = require('fs');
var Path = require('path');

var vocabDocs;

test("require module", function (t) {
  vocabDocs = require('../');
  t.ok(vocabDocs, "module required");
  t.end();
});

test("test actual against expected", function (t) {
  fs.readdir(__dirname + "/schemas", function (err, dir) {
    t.error(err, "no error");
    t.plan(dir.length + 1);
    dir.forEach(function (fileName) {
      var extName = Path.extname(fileName);
      var baseName = Path.basename(fileName, extName);
      var input = require(__dirname + "/schemas/" + fileName);
      var expected = fs.readFileSync(
        __dirname + "/docs/" + baseName + ".md"
      ).toString();
      var actual = vocabDocs(input);
      t.equal(expected, actual, baseName + " actual matches expected");
    });
  });
});
