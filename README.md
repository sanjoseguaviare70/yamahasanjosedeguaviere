# Yamaha San José del Guaviare

Sitio web oficial de **Yamaha San José del Guaviare** (Yamaha San Jose del Guaviare), concesionario de motos Yamaha en San José del Guaviare, Guaviare, Colombia.

- **Dirección:** Cra. 22 #8-43, San José del Guaviare, Guaviare
- **Teléfono / WhatsApp:** 300 316 2824
- **Correo:** sanjoseyamaha@gmail.com

Es un sitio estático (HTML + CSS + JS). No necesita compilarse ni instalar nada.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Página de inicio |
| `motos.html` | Catálogo con filtros por categoría |
| `fichas/` | Una ficha técnica por moto (colores, especificaciones, precio) |
| `motos/` | Fotos de las motos por color |
| `assets/` | Estilos, scripts, logos, íconos, videos e imágenes |
| `sitemap.xml`, `robots.txt` | Archivos para Google y otros buscadores |
| `404.html` | Página de error |
| `cambiar-dominio.ps1` | Cambia la URL del sitio en todos los archivos |

## Publicar en GitHub Pages

1. Crea un repositorio **público** en GitHub, por ejemplo `yamaha-san-jose-del-guaviare`.
2. Sube **todo el contenido** de esta carpeta a la raíz del repositorio (no la carpeta, sino lo que hay adentro).
   - Recomendado: [GitHub Desktop](https://desktop.github.com/) → *Add local repository* → elige esta carpeta → *Publish repository*.
   - La subida desde la web solo permite 100 archivos por vez, y este sitio tiene más de 300.
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En 1 o 2 minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
5. Pon esa URL en todos los archivos (canonical, sitemap, datos estructurados):
   ```powershell
   powershell -ExecutionPolicy Bypass -File .\cambiar-dominio.ps1 -NuevoDominio "https://TU-USUARIO.github.io/NOMBRE-DEL-REPO"
   ```
   Luego vuelve a subir los cambios (*Commit* + *Push* en GitHub Desktop).

> Si compras un dominio propio (por ejemplo `yamahasanjosedelguaviare.com`), configúralo en **Settings → Pages → Custom domain** y ejecuta `cambiar-dominio.ps1` con ese dominio.

## Posicionamiento en Google (SEO)

El sitio ya trae:
- Títulos y descripciones con "Yamaha San José del Guaviare" y "Yamaha San Jose del Guaviare" (con y sin tilde).
- Datos estructurados Schema.org: `MotorcycleDealer` (dirección, horario, teléfono, coordenadas), `FAQPage`, `Product` (cada moto con precio en COP) y `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, etiquetas de geolocalización (Guaviare), canonical y Open Graph.

Para aparecer en los primeros resultados de Google, después de publicar:
1. **Google Search Console** (https://search.google.com/search-console): agrega el sitio, verifícalo y envía `sitemap.xml`. Luego usa *Inspección de URLs → Solicitar indexación* para la página de inicio.
2. **Perfil de Empresa de Google** (https://business.google.com): crea o reclama el negocio "Yamaha San José del Guaviare" con la misma dirección, teléfono y horario que aparecen en la web, y agrega el enlace del sitio. Es lo que más influye en las búsquedas locales y en Google Maps.
3. **Bing Webmaster Tools** (https://www.bing.com/webmasters): importa el sitio desde Search Console.
4. Pon el enlace de la web en Facebook, Instagram, WhatsApp Business y directorios locales.
5. Pide a tus clientes reseñas en Google.
