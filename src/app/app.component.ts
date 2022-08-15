import { Component, OnInit } from '@angular/core';

/* Se importa las clases(service) para usar sus edpoints */
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API-TheRickandMorty';
  personajes: any = {}; // creamos esta variable vacia

  constructor(private serviceCharacters: CharactersService){}

  ngOnInit(): void {
    this.serviceCharacters.getAllCharacters().subscribe(data =>{
      // results nos trae la info de la api
      /* SE MIRA EN EL NAVEGADOR EN LA PARTE DE Network - character - Preview.
        esta dos objetos, uno con la información de la peticion 
        y el otro con los personajes
      */
      this.personajes = data.results;
      console.log(this.personajes);
    },
    error => console.log(error)
    );
  }
}
