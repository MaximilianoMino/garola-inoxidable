# GAROLA INOXIDABLE — Guía de gestión del sitio web

---

## 1. Introducción

Tu sitio web utiliza **Contentful**, una plataforma que te permite editar el contenido de la web sin necesidad de saber programar. Desde Contentful podés:

- **Agregar, editar y eliminar productos** del catálogo
- **Crear y publicar posts** en el blog
- **Subir imágenes y archivos PDF**

Todos los cambios que hagas en Contentful se reflejan automáticamente en la web.

---

## 2. Acceder al panel de Contentful

### URL de acceso

Abrí este enlace en tu navegador:

**https://app.contentful.com/spaces/5ngpn06wt8ts**

### Iniciar sesión

1. Abrí el enlace de arriba
2. Ingresá tu email y contraseña de Contentful
3. Si es tu primera vez, es posible que te pida verificar tu email

### Vista general del dashboard

Una vez dentro, verás:

- **En el menú izquierdo:** "Content" (donde están tus productos y posts)
- **En el centro:** La lista de contenidos existentes
- **Arriba a la derecha:** Botón "Add entry" (para crear nuevo contenido)

---

## 3. Gestionar productos

### 3.1 Crear un producto nuevo

1. Hacé click en **"Content"** en el menú izquierdo
2. Hacé click en **"Add entry"** (arriba a la derecha)
3. Seleccioná **"Garola Productos"**
4. Completá los campos (ver sección 3.2)
5. Cuando termines, hacé click en **"Publish"** (arriba a la derecha)

El producto aparecerá en la web después de unos minutos.

### 3.2 Campos del producto

| Campo | Obligatorio | Qué poner | Ejemplo |
|---|---|---|---|
| **Title** (Título) | ✅ Sí | Nombre del producto | "Pasteurizador para guachera VitalMilk" |
| **Slug** | ✅ Sí | URL del producto, sin espacios, con guiones | "pasteurizador-guachera-vitalmilk" |
| **Category** (Categoría) | ✅ Sí | Categoría del producto (elegir de la lista) | "tambos" |
| **Description** (Descripción) | No | Texto explicando qué es el producto | "Pasteurizador diseñado para tambos..." |
| **Image** (Imagen) | ✅ Sí | Foto del producto (subir archivo) | — |
| **Pdf** (Ficha técnica) | No | Archivo PDF con la ficha técnica | — |
| **Priority** (Prioridad) | ✅ Sí | Número que determina el orden | 1 |

### 3.3 Guía de prioridad

La prioridad determina el orden en que aparecen los productos:

| Prioridad | Dónde aparece |
|---|---|
| 1-10 | En el **slider del home** (los más importantes) |
| 1-27 | En la **página de productos** (catálogo completo) |
| Menor número = primero | El producto con prioridad 1 aparece primero |

**Ejemplo:**
- Pasteurizador VitalMilk → prioridad 1 (aparece primero en el slider)
- Tanques especiales → prioridad 23 (solo aparece en el catálogo)

### 3.4 Categorías disponibles

| Categoría | Qué incluye |
|---|---|
| `tambos` | Productos para tambos y crianza |
| `lacteos` | Equipamiento para industria láctea |
| `alimenticia` | Equipos para industria alimenticia |
| `especiales` | Proyectos especiales y desarrollos a medida |

### 3.5 Subir una imagen

1. En el campo **Image**, hacé click en **"Add media"**
2. Hacé click en **"Upload"** y seleccioná la foto de tu computadora
3. Esperá a que se suba
4. Hacé click en **"Insert"** para adjuntarla

**Tamaño recomendado:** Mínimo 800x600 píxeles. Formato JPG o PNG.

### 3.6 Subir un PDF (ficha técnica)

1. En el campo **Pdf**, hacé click en **"Add media"**
2. Hacé click en **"Upload"** y seleccioná el PDF
3. Esperá a que se suba
4. Hacé click en **"Insert"**

### 3.7 Editar un producto existente

1. En **"Content"**, buscá el producto en la lista
2. Hacé click sobre él
3. Modificá los campos que quieras
4. Hacé click en **"Publish changes"** (arriba a la derecha)

### 3.8 Eliminar un producto

1. En **"Content"**, buscá el producto
2. Hacé click en los **tres puntos (...)** al lado del producto
3. Seleccioná **"Delete"**
4. Confirmá la eliminación

---

## 4. Gestionar el blog

### 4.1 Crear un post nuevo

1. Hacé click en **"Content"** en el menú izquierdo
2. Hacé click en **"Add entry"** (arriba a la derecha)
3. Seleccioná **"Garola Inoxidable"** (es el tipo de contenido del blog)
4. Completá los campos (ver sección 4.2)
5. Cuando termines, hacé click en **"Publish"**

### 4.2 Campos del post

| Campo | Obligatorio | Qué poner | Ejemplo |
|---|---|---|---|
| **Title** (Título) | ✅ Sí | Título del artículo | "Beneficios del acero inoxidable en la industria láctea" |
| **Slug** | ✅ Sí | URL del post, sin espacios, con guiones | "beneficios-acero-inoxidable-lactea" |
| **Description** (Descripción) | ✅ Sí | Resumen breve del artículo (1-2 líneas) | "Descubrí por qué el acero inoxidable es el material ideal..." |
| **Category** (Categoría) | ✅ Sí | Categoría del post | "Industria" |
| **Image** (Imagen) | No* | Imagen principal del artículo | — |
| **Content** (Contenido) | ✅ Sí | Texto completo del artículo | — |
| **Draft** (Borrador) | No | Si está activado, el post NO se muestra en la web | — |

> *La imagen es opcional. Si no se carga imagen, el sitio muestra un cartel "GAROLA" como portada, así que el post se ve bien igual.

### 4.3 Usar el editor de contenido

El campo **Content** es un editor de texto enriquecido. Podés:

- **Escribir texto normal:** Simplemente escribí
- **Negrita:** Seleccioná el texto y hacé click en **B**
- **Cursiva:** Seleccioná el texto y hacé click en *I*
- **Títulos:** Seleccioná el texto y elegí Heading 2, Heading 3, etc.
- **Links:** Seleccioná el texto, hacé click en el ícono de link y pegá la URL
- **Listas:** Hacé click en el ícono de lista (con o sin números)
- **Imágenes:** Hacé click en el ícono de imagen y subí el archivo

### 4.4 Ejemplo completo: entrada "TodoLáctea 2026" (con el contenido listo para copiar)

Podés copiar los valores de abajo y pegarlos directamente en Contentful.

**1.** Content → **Add entry** → **"Garola Inoxidable"**

| Campo | Valor a pegar |
|---|---|
| **Title** | `Garola fue parte de una edición récord de TodoLáctea` |
| **Slug** | `garola-en-todolactea-2026` |
| **Description** | `Más de 23.000 personas participaron de TodoLáctea 2026. Garola estuvo presente durante las tres jornadas compartiendo sus soluciones en acero inoxidable para la industria láctea.` |
| **Category** | `Eventos` |
| **Image** | Dejalo vacío (el sitio muestra una portada automática) |
| **Draft** | Sin activar |

**2.** En el campo **Content**, pegá el texto y después aplicá los títulos. Copiá esto:

```
Más de 23.000 personas participaron de TodoLáctea 2026, uno de los encuentros más importantes de la cadena láctea argentina.

Del 12 al 14 de mayo, la Sociedad Rural de San Francisco, Córdoba, recibió a productores, técnicos, empresarios, estudiantes y profesionales vinculados con la producción y la industria láctea.

Garola estuvo presente durante las tres jornadas, compartiendo sus soluciones en acero inoxidable y acompañando a quienes trabajan diariamente para mejorar sus procesos productivos.

La exposición se convirtió nuevamente en un espacio estratégico para conocer nuevas tecnologías, intercambiar experiencias y generar vínculos entre los diferentes actores de la cadena. Auditorios, capacitaciones, actividades técnicas y espacios comerciales mantuvieron un movimiento permanente durante todo el evento.

Tecnología aplicada a cada proceso

En nuestro espacio recibimos a productores, representantes de industrias lácteas y profesionales interesados en incorporar equipamiento confiable, eficiente y adaptado a las necesidades de cada establecimiento.

Durante la muestra presentamos las distintas soluciones que desarrollamos para tambos, guacheras, queserías e industrias, entre ellas pasteurizadores, tanques y equipos fabricados íntegramente en acero inoxidable.

Cada conversación nos permitió conocer nuevos proyectos, analizar necesidades específicas y continuar fortaleciendo nuestro compromiso con el desarrollo de equipos a medida.

Tres jornadas de intercambio y crecimiento

La edición 2026 reunió a más de 23.000 visitantes y registró una importante participación de asistentes de diferentes puntos del país y del exterior.

Para Garola, formar parte de TodoLáctea representa mucho más que exhibir nuestros productos. Es una oportunidad para encontrarnos con clientes, escuchar a quienes utilizan nuestros equipos y seguir trabajando sobre los desafíos reales de la producción.

Agradecemos a todas las personas que se acercaron a conversar con nuestro equipo, conocer nuestras soluciones y compartir sus proyectos.

Nos llevamos nuevas ideas, contactos y desafíos para continuar haciendo lo que sabemos: fabricar equipamiento de acero inoxidable pensado para mejorar cada etapa del proceso productivo.

Seguimos acompañando el crecimiento de la cadena láctea con experiencia, tecnología y soluciones desarrolladas a medida.
```

**3.** Ahora aplicá los títulos en el editor: seleccioná la línea **"Tecnología aplicada a cada proceso"** y elegí **Heading 2** en el menú de títulos; hacé lo mismo con la línea **"Tres jornadas de intercambio y crecimiento"**.

**4.** La última línea ("Seguimos acompañando el crecimiento...") marcala toda en **negrita** (B) y **cursiva** (I).

**5.** Hacé click en **Publish**. El post aparece en la web en pocos minutos en **/blog** y en la página de inicio.

### 4.5 Publicar un post

1. Cuando termines de escribir, hacé click en **"Publish"** (arriba a la derecha)
2. El post aparecerá en la web en pocos minutos

### 4.6 Despublicar un post (ocultar sin eliminar)

1. Abrí el post en Contentful
2. Hacé click en **"Unpublish"** (arriba a la derecha)
3. El post dejará de verse en la web pero seguirá guardado en Contentful

---

## 5. Consejos y buenas prácticas

### Imágenes

| Aspecto | Recomendación |
|---|---|
| Tamaño mínimo | 800x600 píxeles |
| Formato | JPG o PNG |
| Peso máximo | 5 MB por imagen |
| Orientación | Horizontal (para productos y blog) |

### Slugs

Los slugs son las URLs que aparecen en el navegador. Reglas:

- Solo letras minúsculas
- Sin espacios (usar guiones)
- Sin caracteres especiales (ñ, tildes, etc.)

| Correcto | Incorrecto |
|---|---|
| `pasteurizador-vitalmilk` | `Pasteurizador VitalMilk` |
| `tinas-queseras` | `tinas queseras` |
| `enfriador-de-leche` | `enfriador_de_leche` |

### Prioridad de productos

- **1-3:** Los productos más vendidos o importantes (aparecen primero en el slider)
- **4-7:** Productos importantes pero secundarios
- **8-10:** Productos de menor prioridad (pero aún aparecen en el slider)
- **11-27:** Solo aparecen en el catálogo completo

### Blog

- **Frecuencia recomendada:** 1-2 posts por mes
- **Extensión:** 300-800 palabras por post
- **Imagen:** Opcional. Si no hay imagen, el sitio muestra una portada automática
- **Descripción:** 1-2 líneas que resuman el artículo

---

## 6. Soporte

Si tenés dudas o problemas con la gestión del sitio web, contactanos:

| Medio | Dato |
|---|---|
| Email | garolainoxidable@gmail.com |
| WhatsApp | +54 9 3533 45-7796 |

---

## Resumen rápido

| Acción | Dónde | Pasos |
|---|---|---|
| Agregar producto | Content → Add entry → Garola Productos | Completar campos → Publish |
| Editar producto | Content → buscar producto → click | Modificar → Publish changes |
| Eliminar producto | Content → buscar → (...) → Delete | Confirmar |
| Crear post blog | Content → Add entry → Garola Inoxidable | Completar campos → Publish |
| Editar post | Content → buscar post → click | Modificar → Publish changes |
| Ocultar post | Content → buscar post → click | Unpublish |

---

*Documento generado para Garola Inoxidable*
*Sitio web: www.garolainoxidable.com.ar*
