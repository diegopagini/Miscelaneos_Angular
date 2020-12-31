import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: ` <p>usuario-detalle works!</p> `,
  styles: [],
})
export class UsuarioDetalleComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.parent.params.subscribe((route) => {
      console.log('Ruta hija, Usuario Detalle');
      console.log(route);
    });
  }

  ngOnInit(): void {}
}
