import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bici } from '../bicicleta/bicicleta.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() dataInput:Bici = {codigo:"",nombre:"",descripcion:"",tipo:"",imagen:""};
  @Output() seleccionabicicleta: EventEmitter<any>;
  @Input() indexInput: number=0;

  constructor(private router:Router) {
    this.seleccionabicicleta=new EventEmitter();
   }

  ngOnInit(): void {

  }

  buyBike(){
    console.log(this.indexInput);
    this.seleccionabicicleta.emit(this.indexInput);
  }

  detailBike(index:any){
    // console.log('card: '+index);
    // 29.03.2022
    // este bike corresponde a como se declara en el app.routing
    // {path: 'bike/:id', component: DetailbikeComponent},
    this.router.navigate(['/bike', index]);
  }
}
