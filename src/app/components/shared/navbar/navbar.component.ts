import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    //buscar heroe, recibiendo el texto de caja
  buscarHeroe( termino : string){
    console.log (termino);
    this.router.navigate(['/buscar', termino])
  }
  constructor (private router:Router){

  }
}
