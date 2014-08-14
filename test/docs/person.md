# Person

A person.

## prefixes

|   prefix  |  namespace  |
|-----------|-------------|
| "" | http://schema.org/ |
| "org" | http://www.w3.org/TR/vocab-org# |


## properties

### name

- context: name
- description: The name of the person.
- type: string

### bio

- context: description
- description: A short bio of the person

### memberships

- context: org:hasMembership
- description: The membership relationships that the person plays.
- type: array
- items:
  - reverse: member
  - $ref: Membership

### memberOf

- context: memberOf
- description: The groups that the person is a member of.

