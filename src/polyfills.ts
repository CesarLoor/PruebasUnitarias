/***************************************************************************************************
 * APPLICATION IMPORTS
 */

// Zone JS is required by default for Angular itself
import 'zone.js';

// Add global to window, assigning the value of window itself
(window as any)['global'] = window;

// Add global to window, assigning the value of window itself
if (typeof window !== 'undefined') {
  (window as any).global = window;
}

// Load Zone.js and its testing support
import 'zone.js/testing';

// Importa el polyfill de core-js para características de JavaScript moderno
import 'core-js/es/reflect';

// Importa los polyfills necesarios para el navegador
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Importa los polyfills necesarios para pruebas
import '@angular/localize/init';

// Asegúrate de que Zone.js se cargue antes que cualquier otra cosa
if (typeof window !== 'undefined') {
  (window as any).__Zone_disable_requestAnimationFrame = true;  // deshabilitar requestAnimationFrame para pruebas
  (window as any).__Zone_disable_on_property = true;           // deshabilitar onProperty
  (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // eventos que no deberían ser parcheados
}
