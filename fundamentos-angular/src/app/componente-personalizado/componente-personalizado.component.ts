import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  templateUrl: './componente-personalizado.component.html',
  styleUrls: ['./componente-personalizado.component.css']
})
export class ComponentePersonalizadoComponent {

  @Input() nome = ""
  @Input() sobrenome = "";

  nome1 = "";

  adicionarNome1(){

    console.log(`O nome ${this.nome1} foi adicionado`);


  }

}
