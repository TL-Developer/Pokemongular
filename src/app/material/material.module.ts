import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule } from '@angular/material';

// import { MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule
]

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ],
  declarations: []
})
export class MaterialModule { }
