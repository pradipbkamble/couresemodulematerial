import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';










let materialarr=[MatCardModule,MatIconModule,MatButtonModule,
    MatToolbarModule,MatFormFieldModule,MatDialogModule,
    MatSnackBarModule,MatListModule,MatSidenavModule,MatTabsModule,
    MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatInputModule]
@NgModule({
    declarations:[
        

    ],
    exports:[
...materialarr
    ],
    
    imports:[
        ...materialarr
    ],
   
})
export class courcemodul{

}