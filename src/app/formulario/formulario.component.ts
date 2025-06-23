import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <h2>Formulario de Ejemplo</h2>
      
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <!-- Campo de texto -->
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            [(ngModel)]="usuario.nombre" 
            required 
            minlength="3"
            #nombre="ngModel"
          >
          <div *ngIf="nombre.invalid && (nombre.dirty || nombre.touched)" class="error-message">
            <div *ngIf="nombre.errors?.['required']">El nombre es requerido</div>
            <div *ngIf="nombre.errors?.['minlength']">El nombre debe tener al menos 3 caracteres</div>
          </div>
        </div>

        <!-- Checkbox -->
        <div class="form-group">
          <label>
            <input 
              type="checkbox" 
              name="terminos" 
              [(ngModel)]="usuario.aceptaTerminos" 
              required
              #terminos="ngModel"
            >
            Acepto los términos y condiciones
          </label>
          <div *ngIf="terminos.invalid && (terminos.dirty || terminos.touched)" class="error-message">
            Debes aceptar los términos y condiciones
          </div>
        </div>

        <!-- Select -->
        <div class="form-group">
          <label for="pais">País:</label>
          <select 
            id="pais" 
            name="pais" 
            [(ngModel)]="usuario.pais"
            required
            #pais="ngModel"
          >
            <option value="">Selecciona un país</option>
            <option value="EC">Ecuador</option>
            <option value="CO">Colombia</option>
            <option value="PE">Perú</option>
          </select>
          <div *ngIf="pais.invalid && (pais.dirty || pais.touched)" class="error-message">
            Por favor selecciona un país
          </div>
        </div>

        <!-- Radio buttons -->
        <div class="form-group">
          <div>Género:</div>
          <label>
            <input 
              type="radio" 
              name="genero" 
              value="M" 
              [(ngModel)]="usuario.genero"
              required
              #genero="ngModel"
            >
            Masculino
          </label>
          <label>
            <input 
              type="radio" 
              name="genero" 
              value="F" 
              [(ngModel)]="usuario.genero"
            >
            Femenino
          </label>
          <label>
            <input 
              type="radio" 
              name="genero" 
              value="O" 
              [(ngModel)]="usuario.genero"
            >
            Otro
          </label>
          <div *ngIf="genero.invalid && (genero.dirty || genero.touched)" class="error-message">
            Por favor selecciona un género
          </div>
        </div>

        <!-- Botón de envío -->
        <button type="submit" [disabled]="form.invalid">Enviar</button>
      </form>

      <!-- Área para mostrar los datos del formulario -->
      <div *ngIf="enviado" class="datos-enviados">
        <h3>Datos enviados:</h3>
        <p>Nombre: {{ usuario.nombre }}</p>
        <p>País: {{ usuario.pais }}</p>
        <p>Género: {{ usuario.genero }}</p>
        <p>Acepta términos: {{ usuario.aceptaTerminos ? 'Sí' : 'No' }}</p>
      </div>
    </div>
  `,
  styles: [`
    .form-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="text"],
    select {
      width: 100%;
      padding: 8px;
      margin-bottom: 5px;
    }
    .error-message {
      color: red;
      font-size: 0.8em;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    .datos-enviados {
      margin-top: 20px;
      padding: 15px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  `]
})
export class FormularioComponent {
  usuario = {
    nombre: '',
    aceptaTerminos: false,
    pais: '',
    genero: ''
  };

  enviado = false;

  onSubmit() {
    this.enviado = true;
    console.log('Formulario enviado:', this.usuario);
  }
}
