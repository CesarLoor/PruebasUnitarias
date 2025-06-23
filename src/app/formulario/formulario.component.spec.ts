import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;
  let form: NgForm;
  let nombreInput: HTMLInputElement;
  let terminosCheckbox: HTMLInputElement;
  let paisSelect: HTMLSelectElement;
  let radioMasculino: HTMLInputElement;
  let radioFemenino: HTMLInputElement;
  let radioOtro: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, FormularioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Obtener referencias a los elementos del formulario
    nombreInput = fixture.debugElement.query(By.css('input[name="nombre"]')).nativeElement;
    terminosCheckbox = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    paisSelect = fixture.debugElement.query(By.css('select')).nativeElement;
    // Obtener referencias a los radio buttons individuales
    const radioDebugElements = fixture.debugElement.queryAll(By.css('input[type="radio"]'));
    radioMasculino = radioDebugElements[0].nativeElement;
    radioFemenino = radioDebugElements[1].nativeElement;
    radioOtro = radioDebugElements[2].nativeElement;
    submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    
    // Obtener la instancia del formulario
    const formDebugElement = fixture.debugElement.query(By.directive(NgForm));
    form = formDebugElement.injector.get(NgForm);
  });

  // Prueba 1: Verificar que el componente se crea correctamente
  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  // Prueba 2: Validar que el formulario es inválido cuando está vacío
  it('debería tener un formulario inválido cuando está vacío', () => {
    // Forzar la validación del formulario
    fixture.detectChanges();
    
    // Verificar que el formulario es inválido
    expect(form.valid).toBeFalsy();
    
    // Verificar que los controles individuales son inválidos
    expect(form.controls['nombre'].valid).toBeFalsy();
    expect(form.controls['terminos'].valid).toBeFalsy();
    
    // Verificar que el botón de envío esté deshabilitado
    expect(submitButton.disabled).toBeTruthy();
  });

  // Prueba 3: Validar el campo de nombre
  it('debería validar el campo de nombre correctamente', () => {
    // Caso 1: Nombre vacío (inválido)
    nombreInput.value = '';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    expect(form.controls['nombre'].valid).toBeFalsy();
    expect(form.controls['nombre'].errors?.['required']).toBeTruthy();
    
    // Caso 2: Nombre con menos de 3 caracteres (inválido)
    nombreInput.value = 'ab';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    expect(form.controls['nombre'].valid).toBeFalsy();
    expect(form.controls['nombre'].errors?.['minlength']).toBeTruthy();
    
    // Caso 3: Nombre válido
    nombreInput.value = 'Juan';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    expect(form.controls['nombre'].valid).toBeTruthy();
    expect(form.controls['nombre'].errors).toBeNull();
  });

  // Prueba 4: Validar el envío del formulario
  it('debería enviar el formulario correctamente cuando es válido', fakeAsync(() => {
    // Configurar valores directamente en el modelo del componente
    component.usuario = {
      nombre: 'María',
      aceptaTerminos: true,
      pais: 'EC',
      genero: 'M'
    };
    
    // Disparar eventos de cambio para actualizar el formulario
    nombreInput.value = 'María';
    nombreInput.dispatchEvent(new Event('input'));
    
    terminosCheckbox.checked = true;
    terminosCheckbox.dispatchEvent(new Event('change'));
    
    paisSelect.value = 'EC';
    paisSelect.dispatchEvent(new Event('change'));
    
    // Seleccionar el radio button de Masculino
    radioMasculino.checked = true;
    radioMasculino.dispatchEvent(new Event('change'));
    
    // Forzar detección de cambios
    fixture.detectChanges();
    tick();
    
    // Verificar que el formulario es válido
    expect(form.valid).toBeTruthy();
    
    // Verificar que el botón de envío está habilitado
    expect(submitButton.disabled).toBeFalsy();
    
    // Espiar el método onSubmit
    spyOn(component, 'onSubmit').and.callThrough();
    
    // Disparar el evento de envío del formulario
    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('ngSubmit', null);
    
    // Verificar que se llamó al método onSubmit
    expect(component.onSubmit).toHaveBeenCalled();
    
    // Verificar que se marcó como enviado
    expect(component.enviado).toBeTruthy();
    
    // Forzar detección de cambios para actualizar la vista
    fixture.detectChanges();
    
    // Verificar que se muestra el área de datos enviados
    const datosEnviados = fixture.debugElement.query(By.css('.datos-enviados'));
    expect(datosEnviados).toBeTruthy('No se encontró el elemento .datos-enviados en el DOM');
    
    // Verificar los datos mostrados
    const datosTexto = datosEnviados.nativeElement.textContent;
    expect(datosTexto).toContain('María');
    expect(datosTexto).toContain('EC');
    expect(datosTexto).toContain('M');
    expect(datosTexto).toContain('Sí');
  }));

  // Prueba 5: Validar la visualización de mensajes de error
  it('debería mostrar mensajes de error cuando los campos son inválidos', () => {
    // Tocar el campo de nombre sin ingresar valor
    nombreInput.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    
    // Verificar que se muestra el mensaje de error de campo requerido
    let errorMessage = fixture.debugElement.query(By.css('.error-message'));
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.nativeElement.textContent).toContain('El nombre es requerido');
    
    // Ingresar un nombre muy corto
    nombreInput.value = 'ab';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    // Verificar que se muestra el mensaje de error de longitud mínima
    errorMessage = fixture.debugElement.query(By.css('.error-message'));
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.nativeElement.textContent).toContain('El nombre debe tener al menos 3 caracteres');
    
    // Tocar el checkbox de términos sin marcar
    terminosCheckbox.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    
    // Verificar que se muestra el mensaje de error de términos requeridos
    const terminosErrorMessage = fixture.debugElement.queryAll(By.css('.error-message'))[1];
    expect(terminosErrorMessage).toBeTruthy();
    expect(terminosErrorMessage.nativeElement.textContent).toContain('Debes aceptar los términos y condiciones');
  });
});
