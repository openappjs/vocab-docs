# vocab-docs

returns markdown documentation about a [vocab](https://github.com/openappjs/vocab).

supports

- [~] id
- [x] properties
- [~] description
- [ ] additionalProperties
- [ ] patternProperties
- [ ] allOf
- [ ] anyOf
- [ ] oneOf
- [ ] not
- [ ] definitions
- [x] items schema
- [ ] items array of schemas
- [ ] additionalItems

- [~] context
- [x] prefixes
- [~] value

pull requests welcome!

## install

with [npm](http://npmjs.org), do:

```
npm i --save vocab-docs
```

## example

```
var vocabDocs = require('vocab-docs');

var personVocab = {
  id: "Person",
  description: "A real or imaginary person",
  prefixes: {
    "": "http://schema.org/",
    "foaf": "http://xmlns.com/foaf/0.1/",
  },
  context: "foaf:Person",
  properties: {
    name: {
      description: "Preferred full name",
      context: "name",
      type: "string",
    },
    handle: {
      description: "Commonly-used short name",
      context: "foaf:nick",
      type: "string",
    },
  },
};

var personDocs = vocabDocs(personVocab);

console.log(personDocs);
//# Person
//
//A real or imaginary person
//
//## prefixes
//
//|   prefix  |  namespace  |
//|-----------|-------------|
//| "" | http://schema.org/ |
//| "foaf" | http://xmlns.com/foaf/0.1/ |
//
//
//## properties
//
//### name
//
//- description: Preferred full name
//- context: name
//- type: string
//
//### handle
//
//- description: Commonly-used short name
//- context: foaf:nick
//- type: string
//
//
//
```

## license

AGPLv3
