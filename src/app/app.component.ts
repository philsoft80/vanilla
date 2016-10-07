import { Component } from '@angular/core';

@Component({
  selector: 'pn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  renderAttractions(place: Object) {
    console.log('Render attractions for this', place);
  }
}
