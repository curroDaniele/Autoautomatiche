import { Component, OnInit, Input } from '@angular/core';
import { Drive } from '../drive-list.model';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {

  @Input() dreive : Drive[];
  selectedP : Drive;
  constructor() { }

  ngOnInit() {
  }

  onClick(p : Drive)
  {
    this.selectedP = p;
  }

}

