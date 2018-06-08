import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { PokemonsModule } from './pokemons/pokemons.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    PokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
