import { Component } from "@angular/core";
import { Usuario } from "../../model/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  public usuario;
  public usuarioAutenticado = false;
  public usuarioIncorreto = false;

  constructor() {
    this.usuario = new Usuario();
  }
  
  entrar() {
    if (this.usuario.email == "jf.britto@hotmail.com" && this.usuario.senha == "123") {
      this.usuarioAutenticado = true;
      this.usuarioIncorreto = false;
    } else {
      this.usuarioIncorreto = true;
      this.usuarioAutenticado = false;
    }
  }

}
