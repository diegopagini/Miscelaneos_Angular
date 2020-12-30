import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  alerta: string = 'alert-danger';

  propiedades: any = {
    danger: false,
  };

  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ejecutar() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }
}
