import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo= "../assets/logo.png";
  imgProfile: string = "../assets/photoPerfil.jpg";
  links: string [] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos']; 
  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu', '../assets/pikachu.png'),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur','../assets/bulbasaur.png'),
    new Pokemon(1, 'Charmander', ['Fogo'], 'Esse é o Ivysaur','../assets/charmander.webp'),
    new Pokemon(2, 'Geodude', ['Pedra'], 'Esse é o Geodude','../assets/Geodude.png'),
  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

  closeModal(){
    this.selectedPokemon = undefined;
  }
 
  filterValue: string = '';
  filteredPokemon(): Pokemon[]{
    if (!this.filterValue) {
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}
 