import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

/*
  Componente donde añadimos un toolbar para poder ser utilizado en la pagina
*/

export class ToolbarComponent implements OnInit {

  nombre = "CRUD"
  constructor(
    private route: Router,
  ) { }

  ngOnInit() {
  }

  salir(){
    this.route.navigate(['/login'])

  }
}
