import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  mensagem: string[] = [];
  logar(mensagem: string) {

    console.log(mensagem);
    this.mensagem.push(mensagem);
   }

   exibeTodosOsLogs(){

    console.log(this.mensagem);

   }

}
