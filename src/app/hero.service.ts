import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HEROES } from './data/mock-heroes';
import { Hero } from './models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpService : HttpClient) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes
  }

  getRandomHero() : Observable<Hero> {
    const hero : Observable<Hero> = this.httpService.get<any[]>("https://akabab.github.io/superhero-api/api/all.json")
      .pipe(
        map(data => {
          console.log(data)
          return data[Math.floor(Math.random() * 563)]
        })
      )
    return hero
  }
}
