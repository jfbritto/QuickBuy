import { Component, OnInit } from "@angular/core"
import { Produto } from "../model/produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

  public produto: Produto;
  private ativar_spinner: boolean;

  constructor(private produtoServico: ProdutoServico) {

  }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  public cadastrar() {
    this.ativar_spinner = true;
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produto_json => {
          console.log(produto_json);
        },
        err => {
          console.log(err.error);
          this.ativar_spinner = false;
        }
      );
  }

}
