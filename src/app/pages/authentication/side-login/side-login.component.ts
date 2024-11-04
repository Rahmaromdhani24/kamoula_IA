import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(private router: Router) { }

  form = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    const username = this.form.get('uname')?.value;
    const password = this.form.get('password')?.value;

    // Vérifier si les identifiants sont corrects
    if (username === 'admin_admin' && password === 'admin') {
      this.router.navigate(['/dashboard']); // Redirection en cas de succès
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect'); // Message d'erreur
    }
  }
}
