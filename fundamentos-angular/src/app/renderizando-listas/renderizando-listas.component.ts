import { Celular } from './../types/celular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares : Celular[] = [

    {id: 1, nome: "Celular XL", descricao: "Um celular com tela de led", esgotado: false},
    {id: 2, nome: "Celular XLZ", esgotado: false},
    {id: 3, nome: "Celular XLP", descricao: "Um celular com tela HD", esgotado: true}

  ]

}
