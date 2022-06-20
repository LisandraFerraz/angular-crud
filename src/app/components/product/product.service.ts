import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // dados criados no db.json
  baseUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  // criando uma animacao para apresentar mensagens snackbar de confirmacao
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  // funcao para criar produto
  create(product: Product): Observable<Product> {
    // requisicao para o backend
    // o post recebe a url dos dados e o conteudo que sera enviado
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro inesperado!', true)
    return EMPTY
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  // localiza o id do produto
  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  // para atualizar, adiciona um produto
  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
   return this.http.put<Product>(url, product) 
  }

  delete(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  } 

}
