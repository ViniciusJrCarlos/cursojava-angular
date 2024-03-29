import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = "";
  senha = "";

  constructor(

    private auth: AuthService,
    private router: Router

  ) { }



  login() {

      if(this.auth.login(this.email, this.senha)){

        this.router.navigate(["pagina-protegida"]);
        return;

      }

      alert("login está invalido");
      this.email = "";
      this.senha = "";
  }

}
