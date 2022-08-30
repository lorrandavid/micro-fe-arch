import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public pokemons = [];

  @Output() selectPokemon = new EventEmitter();

  constructor(private router: Router, private http$: HttpClient) {}

  ngOnInit(): void {
    this.http$.get('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  public handleClick(pokemon: any) {
    this.selectPokemon.emit(pokemon);
  }
}
