import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { DestinationService } from './destination.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DestinationComponent],
  providers: [DestinationService],
  exports: [DestinationComponent]
})
export class DestinationModule { }
