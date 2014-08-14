var fs = require('fs');
var swig = require('swig');

//var isSchema = require('schema-is-schema');

module.exports = function schemaLdDocs (schema) {
  // ensure schema
  //isSchema(schema, { throw: true });

  return schemaToDocs(schema);
};

function schemaToDocs (schema) {

  var schemaFn = swig.compileFile('./templates/schema.md');

  var propertyFn = swig.compileFile('./templates/property.md');

  var result = schemaFn({
    schema: schema,
    propertyFn: propertyFn,
    range: require('range'),
  });

  return result;
}
