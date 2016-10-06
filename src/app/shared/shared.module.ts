import { NgModule } from '@angular/core';
import { PlaceDirective } from './directives';

@NgModule({
    declarations: [
        PlaceDirective
    ],
    exports: [
        PlaceDirective
    ]

})
export class SharedModule {
}
