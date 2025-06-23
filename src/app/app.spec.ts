import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { App } from './app';

describe('AppComponent', () => {
  let fixture: ComponentFixture<App>;
  let component: App;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  // Prueba 1: Verificar que el componente se crea correctamente
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Verificar que existe un elemento main con la clase 'main'
  it('debería contener un elemento main con la clase "main"', () => {
    const mainElement = compiled.querySelector('main.main');
    expect(mainElement).toBeTruthy();
  });

  // Prueba 3: Verificar que existe un div con la clase 'content' dentro de main
  it('debería contener un div con la clase "content" dentro de main', () => {
    const contentDiv = compiled.querySelector('main.main .content');
    expect(contentDiv).toBeTruthy();
  });

  // Prueba 4: Verificar que existe un SVG en el documento
  it('debería contener un elemento SVG', () => {
    const svgElement = compiled.querySelector('svg');
    expect(svgElement).toBeTruthy();
  });

  // Prueba 5: Verificar que el SVG tiene un elemento path
  it('el SVG debería contener al menos un elemento path', () => {
    const pathElement = compiled.querySelector('svg path');
    expect(pathElement).toBeTruthy();
  });

  // Prueba 6: Verificar que el SVG tiene un elemento g con clip-path
  it('el SVG debería contener un elemento g con atributo clip-path', () => {
    const gElement = compiled.querySelector('svg g[clip-path]');
    expect(gElement).toBeTruthy();
  });

  // Prueba 7: Verificar que existe un elemento div con la clase 'left-side'
  it('debería contener un div con la clase "left-side"', () => {
    const leftSideDiv = compiled.querySelector('.left-side');
    expect(leftSideDiv).toBeTruthy();
  });
});


