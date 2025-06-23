// Importaciones de Zone.js
import 'zone.js';
import 'zone.js/testing';

// Importaciones de Angular testing
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Asegurarse de que Zone.js se cargue correctamente
declare const require: any;

// Inicializar el entorno de pruebas de Angular
try {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    { teardown: { destroyAfterEach: true } }
  );
} catch (err) {
  // Ignorar errores de inicialización múltiple
  console.warn('TestBed already initialized', err);
}

// Cargar todos los archivos de prueba
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
