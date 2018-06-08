import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PokemonsService } from './pokemons.service';

import { PokemonsComponent } from './pokemons.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PokemonsComponent,
    DetailsComponent
  ],
  exports: [
    PokemonsComponent
  ],
  providers: [ PokemonsService ]
})
export class PokemonsModule { }
