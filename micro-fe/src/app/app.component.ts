import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'micro-fe';

  constructor(private router: Router, private http$: HttpClient) {
    this.http$.get('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe((data) => {
      console.log(data);
    });
  }
}
