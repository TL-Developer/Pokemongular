import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService {

  constructor() { }

  getPokemons() {
    return ['pikachu', 'bulbasaur', 'charizard'];
  }
}
