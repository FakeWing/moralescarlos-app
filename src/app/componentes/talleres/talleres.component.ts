import { Component, OnInit } from '@angular/core';
import { ApiserviciosService } from 'src/app/servicios/apiservicios.service';
import { TalleresInterface, TalleresClase} from 'src/app/modelos/talleres';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  public taller: TalleresInterface; //singular
  public talleres: TalleresInterface; //plural
  faPencil=faPencilAlt;
  faTrash=faTrash;

  constructor(private apiServicio: ApiserviciosService) { }

  ngOnInit() {
    this.getTalleres();
    this.getTaller(0);
  }

  public getTaller(id: number) {
    var tallerObservable = this.apiServicio.getTaller(id);
    tallerObservable.subscribe(tallerObtenido => this.taller = tallerObtenido);
  }

  public getTalleres() {
    this.apiServicio.getTalleres().subscribe((talleres: TalleresInterface) => (this.talleres = talleres));

  }

}
