import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../model/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
  selector: "cadastro-usuario",
  templateUrl: "./cadastro.usuario.component.html",
  styleUrls: ["./cadastro.usuario.component.css"]
})

export class CadastroUsuarioComponent implements OnInit {
  public usuario: Usuario;
  private ativar_spinner: boolean;

  constructor(private usuarioServico: UsuarioServico) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario(); 
  }

  public cadastrar() {
    this.ativar_spinner = true;

    //this.usuarioServico.cadastrarUsuario(this.usuario)
    //  .subscribe(
    //    usuario_json => { },
    //    err => {
    //      this.ativar_spinner = false;
    //    }
    //  );
  }

}
