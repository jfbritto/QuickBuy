import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/produto";

@Injectable({
  providedIn: "root"
})

export class ProdutoServico implements OnInit {

  private baseURL: string;
  public produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseURL = baseUrl;
  }

  ngOnInit(): void {
    this.produtos = [];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseURL + "api/produto/cadastrar", JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseURL + "api/produto/salvar", JSON.stringify(produto), { headers: this.headers });
  }

  public deletar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseURL + "api/produto/deletar", JSON.stringify(produto), { headers: this.headers });
  }

  public obterTodosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseURL + "api/produto");
  }

  public obterProduto(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this.baseURL + "api/produto/obter");
  }

}
