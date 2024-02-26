import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
//exportando para  que o Angular possa acessar os métodos e propriedades da nossa classe.
//isso será refletido no html do componente
export class CompAtributosComponent implements OnInit {
  //  propriedades ou atributos de um componente
  estilo:string = "disable"
  corFundo:string = "blue"
  corDaFonte:string = "red"

  constructor() { }

  ngOnInit(): void {
  }

  //Incluindo dinamismo
  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
    } else {
      this.estilo = "disable"
    }
  }

}
