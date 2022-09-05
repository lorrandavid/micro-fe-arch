import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step-identification',
  templateUrl: './step-identification.component.html',
  styleUrls: ['./step-identification.component.css']
})
export class StepIdentificationComponent {
  constructor(private loc: Location) {
    console.log('StepIdentificationComponent');
  }

  public goBack(): void {
    this.loc.back();
  }
}
