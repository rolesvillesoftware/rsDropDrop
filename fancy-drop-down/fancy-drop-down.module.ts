import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropDownComponent} from './drop-down/drop-down.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [DropDownComponent],
    exports: [DropDownComponent]
})
export class FancyDropDownModule {
}
