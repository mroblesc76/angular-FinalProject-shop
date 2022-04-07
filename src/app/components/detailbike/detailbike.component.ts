import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BikerService } from 'src/app/services/biker.service';


@Component({
  selector: 'app-detailbike',
  templateUrl: './detailbike.component.html',
  styleUrls: ['./detailbike.component.css']
})
export class DetailbikeComponent implements OnInit {

  bike:any;
  id:any;


  constructor(private router:Router, private activaterouter:ActivatedRoute, private bikeservice:BikerService) { 
    this.activaterouter.params.subscribe(data=>{
      this.id=data['id'];
      
      console.log(this.id);

      this.bikeservice.getBikeById(this.id).subscribe(resp=>{
        
        let data:any=resp;
        this.bike=data.mensaje;
      
      });
    });
  }

  ngOnInit(): void {
  
  }

  deleteBike(id:any){
      console.log('id a borrar: '+id);
      this.bikeservice.deleteBike(id).subscribe(resp=>{
          console.log(resp);
      });
      this.router.navigate(["/bicicleta"]);
  }



}
