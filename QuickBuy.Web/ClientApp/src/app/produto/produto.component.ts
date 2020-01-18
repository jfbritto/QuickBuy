import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template: "<html><body>{{ obterNome() }}</body></html>"
})
export class ProdutoComponent {
  /*camelCase para atributos e nomes de funções*/
  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    /*return this.nome;*/
    return "Samsung";
  }

}
