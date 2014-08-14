# {{ schema.id }}

{{ schema.description }}

## prefixes

|   prefix  |  namespace  |
|-----------|-------------|
{% for key, value in schema.prefixes -%}
| "{{ key }}" | {{ value }} |
{% endfor %}

## properties
{% for key, value in schema.properties %}
### {{ key }}

{{ propertyFn({ schema: value, spacing: 0, propertyFn: propertyFn, range: range }) -}}
{% endfor %}
