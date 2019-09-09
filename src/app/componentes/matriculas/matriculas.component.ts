import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TalleresInterface, TalleresClase } from 'src/app/modelos/talleres';
import { MatriculasInterface, MatriculasClase } from 'src/app/modelos/matriculas';
import { TalleresComponent } from 'src/app/componentes/talleres/talleres.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {

  selected = null;

  public talleres: TalleresInterface;
  public matriculas: MatriculasInterface;
  public nuevaMatricula = new MatriculasClase;
  matriculado: MatriculasClase;
  btnM: Boolean = false;
  btnA: Boolean = false;
  btnB: Boolean = false;
  faTrash = faTrash;

  constructor(private apiServicio: ApiserviciosService) { }

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

  public getMatricula(id: number) {
    var matriculaObservable = this.apiServicio.getMatricula(id);
    matriculaObservable.subscribe(matriculaObtenida => {

        this.nuevaMatricula = matriculaObtenida;
        this.agregarClase();
        this.btnA=false;
        this.btnB=true;
        
      }
    );
  }

  onOptionsSelected(event) {
    let value = event.target.value;
    this.selected = value;
    this.getMatriculas(this.selected);
    this.btnM = true;


  }

  public matricular(numta: number) {
    var matriculaObservable = this.apiServicio.getMatricula(0);
    matriculaObservable.subscribe(matriculaObtenida => {
      this.removerClase();
      this.btnA=true;
      this.btnB=false;
      matriculaObtenida.numtaller = numta;
      this.nuevaMatricula = matriculaObtenida;
      

    })

  }
  public postMatricula(ta: number) {
    var matriculaObservable = this.apiServicio.postMatricula(this.nuevaMatricula);
    matriculaObservable.subscribe(matriculaObtenida => {
        this.nuevaMatricula = matriculaObtenida;
        this.getMatriculas(ta);

      });
  }



  public deleteMatricula(id: number, ta: number) {
    var confirmacion = confirm("Desea eliminar este alumno?");
    if (confirmacion) {
      var estado = this.apiServicio.deleteMatricula(id);
      estado.subscribe(
        estado => {
          this.getMatriculas(ta);
        });
      }
  }

  public agregarClase(){
    document.getElementById("rut").classList.add("ff")
    document.getElementById("dv").classList.add("ff")
    document.getElementById("paterno").classList.add("ff")
    document.getElementById("materno").classList.add("ff")
    document.getElementById("nombre").classList.add("ff")
    document.getElementById("email").classList.add("ff")
  }

  public removerClase(){
    document.getElementById("rut").classList.remove("ff")
    document.getElementById("dv").classList.remove("ff")
    document.getElementById("paterno").classList.remove("ff")
    document.getElementById("materno").classList.remove("ff")
    document.getElementById("nombre").classList.remove("ff")
    document.getElementById("email").classList.remove("ff")
  }
}
