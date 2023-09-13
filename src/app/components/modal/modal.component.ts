import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { pokemonAsides } from "../../interfaces/Pokemon";



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements DoCheck {
  @Input()
  pokemon:pokemonAsides | any = ''

  @Input()
  click:Boolean = false


  constructor(private service:PokemonService) {
    service.getPokemon
  }
  ngDoCheck(): void {
    console.log(this.pokemon)
  }

}
