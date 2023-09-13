import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/* É necessario saber o tipo de dado que vai vim para que o tipe script reconheça,
  Assim é necessário tipar tudo.
*/
interface Pokemon {
  height:string,
  weight:string,
  name: string;
  id: string;
  sprites: { front_default: string };
  types: Array<{type:{name:string}}>;
  abilities:[{
    ability:{
      name:string
    }
  }];
  stats: [{
    base_stat:string;
  },
  {
    base_stat:string;
  },
  {
    base_stat:string;
  },
  {
    base_stat:string;
  },
  {
    base_stat:string;
  },
  {
    base_stat:string;
  }
]
}

interface NamesPokemon {
  results: Array<{name:string}>
}

/* Isso é uma construção de injeção de dependencias, assim ele é passado dentro do construtor do component */
@Injectable({
  /* Significa que ele está servindo a arvore inteira */
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = '';
  private pokeData: any | Pokemon = '';
  private listNames: any = '';

  /* Injetando dependencias do httpCliente */
  constructor(private http: HttpClient) {
    this.baseUrl = environment.pokeApi;
  }

  /* Observable -> é um conceito de design pattern que criar um observavel
  Assim possiveis alterações no httpClient é capiturado por ele.
    Ao usar httpClient ele retornar um Observable e por isso é necessário tipas
  O metodo e o get com o tipo de dado que será retornado
  */
  getPokemon(pokemonName: string): Observable<Pokemon> {
    /* Fazendo uma requisição get com o httpClient */
    this.pokeData = this.http.get<Pokemon>(`${this.baseUrl}${pokemonName}`);
    return this.pokeData;
  }

  getPokemonNames():Observable<NamesPokemon> {
    this.listNames = this.http.get<NamesPokemon>(`${this.baseUrl}?limit=1000&offset=0`)
    return this.listNames
  }
}
