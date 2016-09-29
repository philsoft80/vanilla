import { Component, OnInit } from '@angular/core';
import { Destination } from './destination.model';
import { DestinationService } from './destination.service';

@Component({
  selector: 'pn-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  planetsList: Destination[] = [];

  constructor(
    private _planetservice: DestinationService) {}

  ngOnInit() {
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }

}
