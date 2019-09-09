import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TalleresInterface, TalleresClase } from 'src/app/modelos/talleres';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { $ } from 'protractor';
@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {
  public nuevoTaller = new TalleresClase;
  public taller: TalleresInterface; //singular
  public talleres: TalleresInterface; //plural
  faPencil = faPencilAlt;
  faTrash = faTrash;
  btn1: Boolean = true;
  btn2: Boolean = false;
  btn3: Boolean = false;
  btn4: Boolean = false;

  constructor(private apiServicio: ApiserviciosService) { }

  ngOnInit() {
    this.getTalleres();
    document.getElementById("titulo").innerHTML = "Agregar Taller";

  }

  public getTaller(id: number) {
    var tallerObservable = this.apiServicio.getTaller(id);
    tallerObservable.subscribe(tallerObtenido => this.nuevoTaller = tallerObtenido);
  }

  public getTalleres() {
    this.apiServicio.getTalleres().subscribe((talleres: TalleresInterface) => (this.talleres = talleres));

  }

  public postTaller() {
    var tallerObservable = this.apiServicio.postTaller(this.nuevoTaller);
    tallerObservable.subscribe(tallerObtenido => {
      this.nuevoTaller = tallerObtenido;
      this.getTalleres();
      this.nuevoTaller = new TalleresClase();
    });
  }

  public putTaller(id: number) {
    var tallerObservable = this.apiServicio.putTaller(id, this.nuevoTaller);
    tallerObservable.subscribe(
      tallerObtenido => {
        this.nuevoTaller = tallerObtenido;
        this.limpiar();
        this.getTalleres();
        this.btn1 = true;
        document.getElementById("titulo").innerHTML = "Agregar Taller";


      });
  }

  public editarTaller(id: number) {
    document.getElementById("titulo").innerHTML = "Editar Taller";
    this.limpiar();
    this.btn2 = true;
    this.btn4 = true;
    this.getTaller(id);
    this.removerClase();
   
  }

  public deleteTaller(id: number) {
    var estado = this.apiServicio.deleteTaller(id);
    estado.subscribe(
      estado => {
        this.getTalleres();
        this.limpiar();
        this.btn1 = true;
        this.removerClase();
        document.getElementById("titulo").innerHTML = "Agregar Taller";
        
      });
  }

  public limpiar() {
    this.nuevoTaller = new TalleresClase;
    this.btn1 = false;
    this.btn2 = false;
    this.btn3 = false;
    this.btn4 = false;
  }

  public borrarTaller(id: number) {
    document.getElementById("titulo").innerHTML = "Eliminar Taller";
    this.limpiar();
    this.btn3 = true;
    this.btn4 = true;
    this.getTaller(id);
    this.añadirClase();

  }

  public cancelar() {
    this.limpiar();
    document.getElementById("titulo").innerHTML = "Agregar Taller";
    this.btn1 = true;
    this.removerClase();
  }
public añadirClase(){

  document.getElementById("nombre").classList.add("ff")
  document.getElementById("detalle").classList.add("ff")
  document.getElementById("numhoras").classList.add("ff")
  document.getElementById("cupos").classList.add("ff")
 
}
public removerClase(){
  document.getElementById("nombre").classList.remove("ff")
  document.getElementById("detalle").classList.remove("ff")
  document.getElementById("numhoras").classList.remove("ff")
  document.getElementById("cupos").classList.remove("ff")
}
 
}
