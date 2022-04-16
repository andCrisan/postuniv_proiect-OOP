import { Injectable } from '@angular/core';
import { Carte } from './carte.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  carti: Carte[] = [
    new Carte(1,'Albert Cossery','Proud Beggars','Gallimard','Paris',1981,'Engleza'),
    new Carte(2,'Ion Petru Culianu','Pergamentul diafan','Humanitas','Bucuresti',2013,'Romana'),
    new Carte(3,'Mohamed Choukri','For bread alone','City Lights Books','Washington',1987,'Engleza')

  ]

  constructor() { }
  getAllCarti(){
    return this.carti
  }

  addCarte(carte: Carte){
    this.carti.push(carte)
  }
  
  updateCarte(index: number, updatedCarte: Carte){
    this.carti[index] = updatedCarte
  }

  deleteCarte(index: number){
    this.carti.splice(index, 1)
  }
}
