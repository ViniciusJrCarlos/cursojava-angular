import { Component } from '@angular/core';
import { LoggerServiceService } from '../logger.service.service';

@Component({
  selector: 'app-exemplos-servicos1',
  templateUrl: './exemplos-servicos1.component.html',
  styleUrls: ['./exemplos-servicos1.component.css']
})
export class ExemplosServicos1Component {

    nome2 = "";

    constructor(public logger: LoggerServiceService){

    }

    adicionarNome2(){

      //console.log(`O nome 2 ${this.nome2} foi adicionado...`);
      this.logger.logar(`O nome 2 ${this.nome2} foi adicionado`);
    }

}
