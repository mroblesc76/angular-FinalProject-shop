import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikerService } from 'src/app/services/biker.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editbike',
  templateUrl: './editbike.component.html',
  styleUrls: ['./editbike.component.css']
})
export class EditbikeComponent implements OnInit {

  formulario:FormGroup;
  id:any;

  constructor(private fb:FormBuilder, private router:ActivatedRoute, private servicio:BikerService, private rutear:Router) { 
    this.formulario=this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(8)]],
      nombre: ['', [Validators.required, Validators.minLength(8)]],
      descripcion: ['', [Validators.required, Validators.minLength(5)]],
      tipo: ['', [Validators.required, Validators.minLength(10)]],
      imagen: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.router.params.subscribe(resp=>{
      this.id=resp['id'];
    });

    console.log('id en edit: '+this.id);

    this.servicio.getBikeById(this.id).subscribe(resp=>{
      // console.log(resp);

      this.cargarFormulario(resp);
    });

  }

  cargarFormulario(data:any){
    let midata=data.mensaje;
    this.formulario=this.fb.group({
      codigo:[midata.codigo],
      nombre:[midata.nombre],
      descripcion:[midata.descripcion],
      tipo:[midata.tipo],
      imagen:[midata.imagen]
    });

  }

  updateBike(){
    if (this.formulario.valid){
      let bike = {
        codigo:this.formulario.get('codigo')?.value,
        nombre:this.formulario.get('nombre')?.value,
        descripcion:this.formulario.get('descripcion')?.value,
        tipo:this.formulario.get('tipo')?.value,
        imagen:this.formulario.get('imagen')?.value
        // imagen:"../../../assets/" + this.formulario.get('imagen')?.value
      }
      this.servicio.updateBike(bike).subscribe(resp=>{
        console.log(resp);
      });

      this.rutear.navigate(['/bicicleta']);
    }
    else{
      alert('Tienes que llenar todos los campos.');
    }

  }

}
