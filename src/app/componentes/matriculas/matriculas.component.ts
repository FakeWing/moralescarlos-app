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


  constructor(private apiServicio:ApiserviciosService) { }

  ngOnInit() {
    
    this.getTalleres();

  }

  public getTalleres() {
    this.apiServicio.getTalleres().subscribe((talleres: TalleresInterface) => (this.talleres = talleres));

  }


  onOptionsSelected(event){
    let value = event.target.value;
     this.selected = value;
     alert(this.selected);
     
 }

}
