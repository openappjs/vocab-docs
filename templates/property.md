{%- for key, value in schema -%}
{%- for i in range(0, spacing * 2) %}{{ " " }}{% endfor -%}
{%- if key === "properties" || key === "items" -%}
- {{ key }}:
{{ propertyFn({ schema: value, spacing: spacing + 1, propertyFn: propertyFn, range: range }) -}}
{%- elseif key === "value" -%}
{%- else -%}
- {{ key }}: {{ value }}
{%- endif -%}
{%- endfor -%}
