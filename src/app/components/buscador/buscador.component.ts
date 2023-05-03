import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/servicios/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent  {

  heroes:any [] = [];
  termino!: string;
  constructor( private activadedRoute : ActivatedRoute,
              private _heroesServide : HeroesService,
              private router: Router) {
    this.activadedRoute.params.subscribe( params => {
      this.termino=(params['termino']);
      this.heroes = this._heroesServide.buscarHeroes(params['termino']);
    })
  }
  verHeroe (idx:number){
    //console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }
}
