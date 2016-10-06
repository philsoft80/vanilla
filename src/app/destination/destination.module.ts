import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { DestinationService } from './destination.service';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TypeaheadModule,
    SharedModule
  ],
  declarations: [DestinationComponent],
  providers: [DestinationService],
  exports: [DestinationComponent]
})
export class DestinationModule { }
