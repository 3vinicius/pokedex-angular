import { Component, OnInit, ChangeDetectorRef, OnChanges, SimpleChanges} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  value:string = '';
  name: string = 'galvantula';
  id: string = '1';
  type: Array<string> = [];
  imgSrc: string =
    'https://www.pngmart.com/files/22/Charmander-Pokemon-PNG-Photos.png';


  /* Primieiro declara no construtor */
  constructor(private services: PokemonService, private cdRef:ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    /* Depois chama o service como uma classe e chama o motodo que voce quer */
    /* Como é retornado um oberver devemos usar o subscribe({}) para se  'escrever'
    no observer retornado
      Dentro dele é possivel passar um objeto que conten dois metdoso
      next -> pra caso seja resolvido
      error -> caso de erro na requesição
    */
    this.search(this.name)
  }


  search(value:string){
    this.services.getPokemon(value.toLocaleLowerCase()).subscribe({
      next: (res) => {
        this.name = res.name.charAt(0).toUpperCase() + res.name.slice(1);
        this.id = res.id;
        this.imgSrc = res.sprites.front_default;
        let myTypes:Array<string>=[]
        res.types.map((v) => myTypes.push(v.type.name))
        this.type = myTypes;
      },
      error: (err) => window.alert('name not found'),
    });
  }

}
