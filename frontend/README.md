# 🐾 Salvando Patas - Frontend MVP (v1.0)

Bienvenido al repositorio frontend de **Salvando Patas**, una plataforma tecnológica integral diseñada para optimizar el acceso a servicios de cuidado animal, adopción y rescate, enfocada inicialmente en la localidad de Kennedy, Bogotá.

## 🚀 Tecnologías y Arquitectura

Este proyecto ha sido inicializado con un enfoque moderno y escalable, pensado para garantizar un excelente rendimiento (SEO) y una grata experiencia de usuario (UX).

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Librería UI:** [React](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)

## 🎨 Sistema de Diseño (Psicología del Color)

El diseño visual está orientado a transmitir confianza institucional y a fomentar la acción rápida de los usuarios mediante la psicología del color:

- **Fondos (Espacios limpios):** `slate-50` para legibilidad.
- **Primarios (Confianza y Salud):** Tonos Verdes (Emerald) y Azules.
- **Llamados a la Acción (CTAs):** Naranjas y Amarillos cálidos para botones de búsqueda y registro.
- **Tipografías:** `Inter` (Cuerpo de texto) y `Outfit` (Títulos y encabezados).

## 📂 Estructura del Proyecto

La estructura inicial de carpetas está preparada para escalar con flujos de autenticación y dashboards segmentados:

```text
src/
├── app/
│   ├── globals.css         # Configuración del tema Tailwind v4 (@theme inline)
│   ├── layout.tsx          # Estructura principal, fuentes y wrappers (Navbar/Footer)
│   └── page.tsx            # Landing Page
├── components/
│   ├── layout/             # Componentes estructurales (Navbar.tsx, Footer.tsx)
│   └── features/           # Componentes específicos (SearchHero.tsx)
```

## ✨ Características de esta Versión (v1.0)

1. **Navbar Responsivo:** Navegación principal anclada (`sticky`), enlaces corporativos y CTAs de inicio de sesión y registro.
2. **Search Hero:** Buscador central en la Landing Page que permite filtrar por:
   - **Especie:** Perro, Gato, Otro.
   - **Servicio Requerido:** Adopción, Veterinaria, Guardería, Tienda.
   - **Ubicación:** Barrios específicos de la localidad de Kennedy (Castilla, Tintal, Patio Bonito, etc.).
3. **Footer:** Sección de pie de página institucional.

## 🧪 Testing Estratégico (E2E)

Preparando el terreno para el aseguramiento de la calidad automatizado (QA Automations), todos los elementos interactivos desarrollados en esta versión cuentan con identificadores únicos para pruebas con **Cypress, Playwright o Selenium**.

Ejemplo de selectores incluidos:
- `data-testid="search-species-select"`
- `data-testid="nav-login-btn"`
- `data-testid="search-submit-button"`

## 🛠️ Cómo iniciar el proyecto en Local

Para levantar el servidor de desarrollo, sigue estos pasos:

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
2. Abre tu terminal y navega a la carpeta del frontend:
   ```bash
   cd frontend
   ```
3. Instala las dependencias (si no lo has hecho):
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.
