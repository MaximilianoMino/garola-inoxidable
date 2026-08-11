# Documentación — Garola Inoxidable

Carpeta central de documentación del proyecto. **No se publica al sitio web**: Astro solo sirve `public/` y `src/`, por lo que estos archivos son de uso interno (repo).

## Estructura

```
docs/
  README.md                  ← este índice
  proyecto/
    README_GAROLA.md         ← documentación del proyecto (briefing, diseño, estructura, deploy)
    GUIA_CLIENTE.md          ← guía de gestión del sitio para el cliente (Contentful)
  disenos/
    diseno_1.png             ← wireframes/diseños propuestos (opciones presentadas al cliente)
    diseno_2.png
    diseno_3.png
  fichas-tecnicas/           ← copias de referencia de los PDFs de productos
    *.pdf
  referencias/               ← material del cliente (pendiente de recibir)
    README.md
```

## Notas

- `public/fichas_tecnicas/` es la fuente servida al sitio (las URLs de las fichas en Contentful apuntan ahí). Las copias en `docs/fichas-tecnicas/` son solo referencia y no deben usarse para enlazar.
- Los PDFs del cliente (manual de identidad, briefing) todavía no están en el repo; ver `referencias/README.md`.
