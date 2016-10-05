import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { DestinationService } from './destination.service';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TypeaheadModule
  ],
  declarations: [DestinationComponent],
  providers: [DestinationService],
  exports: [DestinationComponent]
})
export class DestinationModule { }
