import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TalleresInterface, TalleresClase } from 'src/app/modelos/talleres';
import { MatriculasInterface , MatriculasClase } from 'src/app/modelos/matriculas';
import { TalleresComponent } from 'src/app/componentes/talleres/talleres.component';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

selected=null;

public talleres : TalleresInterface;
public matriculas :MatriculasInterface;
public nuevaMatricula : MatriculasClase;
btnM: Boolean=false;

  constructor(private apiServicio:ApiserviciosService) { }

  ngOnInit() {
    
    this.getTalleres();

  }

  public getTalleres() {
    this.apiServicio.getTalleres().subscribe((talleres: TalleresInterface) => (this.talleres = talleres));

  }
  public getMatriculas(id: number) {
    var matriculaObservable = this.apiServicio.getMatriculas(id);
    matriculaObservable.subscribe(
      matriculaObtenida => {
       this.matriculas = matriculaObtenida;
      });
  }

  onOptionsSelected(event){
    let value = event.target.value;
     this.selected = value;
     this.getMatriculas(this.selected);
     this.btnM=true;
   
     
 }

 public matricular(numta:number){
   var matriculaObservable = this.apiServicio.getMatricula(0);
   matriculaObservable.subscribe( matriculaObtenida=>{
     matriculaObtenida.numtaller=numta;
     this.nuevaMatricula=matriculaObtenida;
   
   })

 }
 public postMatricula() {
  var matriculaObservable = this.apiServicio.postMatricula(this.nuevaMatricula);
  matriculaObservable.subscribe(
    matriculaObtenida => {
      this.nuevaMatricula = matriculaObtenida;
      

      
      
     
      
    });
}






}
