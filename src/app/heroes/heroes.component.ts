import { Component, OnInit } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero? : Hero

  heroes : Hero[] = []

  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.updateHeroes()
  }

  onSelect(hero : Hero) {
    console.log(hero)
    this.selectedHero = hero
  }

  onRandomSelect() {
    this.heroService.getRandomHero()
      .subscribe(
        data => {
          console.log(data)
          this.selectedHero = data
        }
      )
  }

  updateHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        data => {
          this.heroes = data
        }
      )
  }

}
