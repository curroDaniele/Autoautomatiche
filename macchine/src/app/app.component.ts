import { Component } from '@angular/core';
import { Drive } from './drive-list.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'macchine';
  data: Object;
  obs: Observable<Object>;
  obsDrive: Observable<Drive[]>;
  driveData: Drive[];
  constructor(public http: HttpClient) { this.makeTypedRequest(); }

  makeTypedRequest(): void {
    this.obsDrive = this.http.get<Drive[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi');
    this.obsDrive.subscribe(data => { this.driveData = data;  });
  }

  onAddPreno(tipo: HTMLInputElement, descrizione: HTMLInputElement, tariffa: HTMLInputElement, valutazionemedia: HTMLInputElement) : boolean
  {
    let drive: Drive = new Drive();
    drive.tipo = tipo.value;
    drive.descrizione = descrizione.value;
    drive.tariffa = tariffa.value;
    drive.valutazionemedia = valutazionemedia.value;
    this.driveData.push(drive);
    this.makeCompactPost(drive);
    return false;
  }
   makeCompactPost(drive:Drive): void {
   this.http.post('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi',JSON.stringify(drive))
     .subscribe(data => {
       this.data = data;
     });
 }
}
