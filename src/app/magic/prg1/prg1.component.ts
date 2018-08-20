import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
@Component({
    selector: 'mga-prg1',
    providers: [...magicProviders],
    styleUrls: ['./prg1.component.css'],
    templateUrl: './prg1.component.html'
}) export class prg1 extends TaskBaseMagicComponent {}