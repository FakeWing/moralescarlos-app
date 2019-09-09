import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TalleresInterface, TalleresClase } from 'src/app/modelos/talleres';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
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


      });
  }

  public editarTaller(id: number) {
    this.limpiar();
    this.btn2 = true;
    this.btn4 = true;
    this.getTaller(id);

  }

  public deleteTaller(id: number) {
    var estado = this.apiServicio.deleteTaller(id);
    estado.subscribe(
      estado => {
        this.getTalleres();
        this.limpiar();
        this.btn1 = true;
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
    this.limpiar();
    this.btn3 = true;
    this.btn4 = true;
    this.getTaller(id);
  }

  public cancelar() {
    this.limpiar();
    this.btn1 = true;
  }
}
