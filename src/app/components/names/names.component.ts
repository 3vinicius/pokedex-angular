import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  listNames:string =''

  constructor(private pokemonService:PokemonService) {
    pokemonService.getPokemonNames().subscribe({
      next: (value) => value.results.map(v => {this.listNames += `${v.name} - `}),
      error: (err) => console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
