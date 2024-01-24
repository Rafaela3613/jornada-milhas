import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  @Output() realizarBusca = new EventEmitter()
  constructor(
    public formBuscaService : FormBuscaService) {}

  buscar () {
    console.log(this.formBuscaService.formBusca.value)
    const formBuscaValue = this.formBuscaService.value;
    this.realizarBusca.emit(formBuscaValue);
  }
}
