export interface pokemonAsides {
  types:Array<string>,
  wigth:string,
  height:string,
  stats: {
    hp: string,
    att: string,
    def: string,
    spDef: string,
    spAttack: string,
    speed: string,
    total: string,
  };
  about:{
    height: string,
    weight: string,
    abilities: [],
  };
}
