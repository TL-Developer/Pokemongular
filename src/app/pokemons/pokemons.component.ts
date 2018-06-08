import { PokemonsService } from './pokemons.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: string[];

  constructor(private pokemonsService: PokemonsService) {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  ngOnInit() {

  }

}
