import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  public address: Object;
  @Output() destinationChanged: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  getAddress(place: Object) {
    this.address = place['formatted_address'];
    let location = place['geometry']['location'];
    let lat = location.lat();
    let lng = location.lng();
    this.destinationChanged.emit(place);
    console.log('Address Object', place);
  }
}
