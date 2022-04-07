import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BikerService } from 'src/app/services/biker.service';

import { Observable, Subscriber } from 'rxjs';

export interface Bici{
  codigo:string,
  nombre:string,
  descripcion:string,
  tipo:string,
  imagen:string
}

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.css']
})
export class BicicletaComponent implements OnInit {
  
  items:Bici[]=[];
  carrito:Bici[]=[];
  localstorage:any=[];

  constructor(private auth:AuthService, private servicio:BikerService) { }

  ngOnInit(): void {
    this.principal();
  }

  principal(){
    this.obtenerbicicletas();

    // esto es solo para manejar el carrito de productos y no se pierdan los valores
    // this.localstorage=localStorage.getItem("carrito");
    // if (this.localstorage?.lenght>0){
    //   this.carrito=JSON.parse(this.localstorage);
    // }


  }

  obtenerbicicletas(){
    
    this.servicio.getBikeAll().subscribe(resp=>{
        let aux:any=resp;
        this.items=aux.mensaje;
        console.log(this.items);
      }
    );
  }

}
