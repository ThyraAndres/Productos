import { ServerRoute, RenderMode } from '@angular/ssr'; // Asegúrate de importar ServerRoute y RenderMode

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', // Esto captura todas las rutas que no sean explícitamente definidas.
    renderMode: RenderMode.Prerender // Define cómo se deben renderizar las rutas
  }
];
