import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('teste'),
      password: new FormControl('teste')
    });
  }

  public submit(): void {
    sessionStorage.setItem('userdata', JSON.stringify(this.form.value));
    this.router.navigate(['/']);
  }
}
