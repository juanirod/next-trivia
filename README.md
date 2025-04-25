# Next Trivia

Este es un proyecto desarrollado con [Next.js](https://nextjs.org), diseñado para crear una aplicación de trivia interactiva.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd next-trivia
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta:
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

La estructura principal del proyecto es la siguiente:

```
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
    quiz/
      layout.tsx
      page.tsx
      components/
        Score.tsx
        SectionQuestions.tsx
  components/
    Button.tsx
  context/
    QuizContext.tsx
  hooks/
    useQuiz.ts
  lib/
    api.ts
  services/
    quiz.service.ts
    quiz.type.ts
```

### Archivos Clave
- **`app/page.tsx`**: Página principal de la aplicación.
- **`context/QuizContext.tsx`**: Contexto global para manejar el estado del quiz.
- **`services/quiz.service.ts`**: Lógica para interactuar con la API del quiz.

## Puntos Clave del Proyecto

1. **Gestión de Estado con Context API**: El proyecto utiliza `QuizContext` para manejar el estado global del quiz, lo que permite compartir datos entre componentes sin necesidad de prop drilling.
2. **Componentización Modular**: Los componentes como `Button`, `Score`, y `SectionQuestions` están diseñados para ser reutilizables y fáciles de mantener.
3. **Custom Hooks**: Se utiliza el hook personalizado `useQuiz` para encapsular la lógica del estado del quiz, mejorando la separación de responsabilidades.
4. **Servicios Centralizados**: La lógica para interactuar con la API del quiz está centralizada en `quiz.service.ts`, lo que facilita el mantenimiento y las pruebas.
5. **Estructura de Carpetas Escalable**: La estructura del proyecto está organizada en carpetas como `context`, `hooks`, `lib`, y `services`, lo que permite escalar el proyecto de manera ordenada.
6. **Estilos Globales**: Los estilos globales se manejan en `globals.css`, asegurando consistencia en toda la aplicación.
7. **Rutas Anidadas**: La funcionalidad del quiz está encapsulada en la ruta `quiz/`, lo que facilita la navegación y el mantenimiento.
8. **Optimización de Recursos**: Los íconos y recursos SVG están organizados en la carpeta `public/`, lo que permite un acceso eficiente y optimizado.
9. **Tipado con TypeScript**: Todo el proyecto está desarrollado con TypeScript, lo que garantiza un código más seguro y menos propenso a errores.
10. **Separación de Lógica y Presentación**: La lógica del quiz está separada de los componentes de presentación, siguiendo buenas prácticas de desarrollo.
