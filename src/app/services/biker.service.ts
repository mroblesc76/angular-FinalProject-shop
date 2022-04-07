import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikerService {


  private urlService="http://localhost:4001";

  private items:any = [
    {
        codigo:"Chicago292Se2",
        nombre:"bike-Chicago292Se2",
        descripcion: "Bicicleta rigida básica",
        tipo : "Rigida",
        img : "../../../assets/bike-Chicago292Se2.jpg"
    },
    {
        codigo:"Lycan27Prime",
        nombre:"bike-Lycan27Prime",
        descripcion: "Bicicleta doble suspención básica",
        tipo : "Doble Suspención",
        img : "../../../assets/bike-Lycan27Prime.jpg"
    }
  ];

  constructor(private http:HttpClient) { 

  }

  // obtiene todas las bicicletas existentes
  getBikeAll(){
    // console.log(this.urlService + "/products");
    return this.http.get(this.urlService+'/products');
  }

  // obtiene bicicleta por id
  getBikeById(id:any){
    return this.http.get(`${this.urlService}/product/${id}`);
  }

  // agrega bicicleta
  addBike(bike:any){
    console.log(bike);
    return this.http.post(this.urlService + '/product', bike);
  }

  updateBike(bike:any){
    console.log(bike);
    return this.http.put(`${this.urlService}/product/${bike.codigo}`, bike);
  }

  deleteBike(id:any){
    console.log('delete: '+ id)
    console.log('url: '+ id)
    return this.http.delete(`${this.urlService}/product/${id}`);
  }


}
