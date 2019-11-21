import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Frederique' },
      { id: 12, name: 'Myrle', color: '#6f1010'},
      { id: 13, name: 'Cody' },
      { id: 14, name: 'Federica' },
      { id: 15, name: 'Jerome' },
      { id: 16, name: 'Carolina' },
      { id: 17, name: 'Sakiko' },
      { id: 18, name: 'Patrick' },
      { id: 19, name: 'Xingbo' },
      { id: 20, name: 'Yaqi' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
