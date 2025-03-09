import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterModule
  ],
  selector: 'app-login-entry',
  styleUrl: './login-entry.component.scss',
  templateUrl: './login-entry.component.html',
})
export class RemoteEntryComponent {
  readonly email = signal('john.doe@yopmail.com');
  readonly password = signal('***********');
}
