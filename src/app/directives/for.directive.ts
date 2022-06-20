import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// aplicando structural directive
@Directive({
  selector: '[testeW]'
})
export class ForDirective implements OnInit{

  // criando variaveis que vao armazenar o conteudo do *myFor
  @Input('testeWTw') words: string[]

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    for (let wordsV of this.words){
      this.container.createEmbeddedView(
        
        // armazena os valores do array numbers em um template no html
        this.template,
        // faz ser possivel a visualizacao dos valores de n no html
        { $implicit: wordsV })
    }
  }
}
