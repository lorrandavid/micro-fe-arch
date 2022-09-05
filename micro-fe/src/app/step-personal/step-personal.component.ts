import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-personal',
  templateUrl: './step-personal.component.html',
  styleUrls: ['./step-personal.component.css']
})
export class StepPersonalComponent {
  constructor(private router: Router) {
    console.log('StepPersonalComponent');
  }

  public goToAuto(): void {
    this.router.navigate(['/auto']);
  }

  public goToStepIdentification(): void {
    this.router.navigate(['/insurance/step-identification']);
  }
}
