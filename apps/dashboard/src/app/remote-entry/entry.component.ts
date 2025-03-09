import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

type DailyRegister = {
  name: string;
  date: string;
  yesterday: string;
  today: string;
  blockers: string;
  emotions: 'Feliz' | 'Triste' | 'Enojado' | 'Ansioso' | 'Cansado' | 'Estresado';
}


@Component({
  imports: [CommonModule, MatCardModule, MatIconModule],
  selector: 'app-dashboard-entry',
  styleUrl: './dashboard-entry.component.scss',
  templateUrl: './dashboard-entry.component.html',
})
export class RemoteEntryComponent {

  public dailysRegister: DailyRegister[] = [
    {
      name: 'Juan Perez',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Tengo un bloqueo con el API',
      emotions: 'Feliz'
    },
    {
      name: 'Rosita Rosales',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Ninguno',
      emotions: 'Triste'
    },
    {
      name: 'Sofia Perez',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Tengo un bloqueo con el API',
      emotions: 'Enojado'
    },
    {
      name: 'Santiago Gonzalez',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Tengo un bloqueo con el API',
      emotions: 'Ansioso'
    },
    {
      name: 'Nicolás Perez',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Tengo un bloqueo con el API',
      emotions: 'Cansado'
    },
    {
      name: 'Javier Perez',
      date: '2025-03-09',
      yesterday: 'Yesterday I was working on the new feature of the app',
      today: 'Today I will finish the new feature of the app',
      blockers: 'Ninguno',
      emotions: 'Estresado'
    },
  ]
}
