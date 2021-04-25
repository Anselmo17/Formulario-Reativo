import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-reativo',
  templateUrl: './formulario-reativo.component.html',
  styleUrls: ['./formulario-reativo.component.css']
})
export class FormularioReativoComponent implements OnInit {

  formData;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fomulario();
  };

  fomulario() {
    // estanciando grupo de propriedades
    this.formData = this.fb.group({
      name: [null, [this.isValidName]],
      email: [null, [Validators.email]]
    })
  }

  // funcao valida name
  isValidName(controle: FormControl): ValidationErrors {
    let result: ValidationErrors = null;
    const isValid = controle.value;
    if (isValid !== null && !isValid) {
      result = { invalidName: true };
      return;
    }
    return result;
  }

}
