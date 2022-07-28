import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(h => h.id === id);
    this.messageService.add(hero === undefined ? "HeroService: failed to fetch" : `HeroService: ${hero.name} has been fetched`);
    return of(hero);
  }
}
