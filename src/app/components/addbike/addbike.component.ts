import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BikerService } from 'src/app/services/biker.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addbike',
  templateUrl: './addbike.component.html',
  styleUrls: ['./addbike.component.css']
})
export class AddbikeComponent implements OnInit {

  formulario:FormGroup;

  constructor(
    private fb:FormBuilder,
    private servicio:BikerService,
    private router:Router,
    private http:HttpClient
  ) 
  {
    this.formulario = this.fb.group({
      codigo:['', [Validators.required, Validators.minLength(8)]],
      nombre:['', [Validators.required, Validators.minLength(8)]],
      descripcion:['', [Validators.required, Validators.minLength(5)]],
      tipo:['', [Validators.required, Validators.minLength(10)]],
      imagen:['', [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  addBike(){
    // const fd=new FormData;
    // fd.append('imagen', this.selectedFile, this.selectedFile?.name);

    if (this.formulario.valid){

      let bike = {
        codigo:this.formulario.get('codigo')?.value,
        nombre:this.formulario.get('nombre')?.value,
        descripcion:this.formulario.get('descripcion')?.value,
        tipo:this.formulario.get('tipo')?.value,
        imagen:"./assets/images/" + this.formulario.get('imagen')?.value
        // imagen:this.selectedFile
      }
      this.servicio.addBike(bike).subscribe(resp=>{
        console.log(resp);
      });

      this.router.navigate(['/bicicleta']);
    }
    else{
      alert('Tienes que llenar todos los campos.');
    }
  }

}
