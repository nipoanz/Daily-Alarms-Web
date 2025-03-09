import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  selector: 'app-settings-entry',
  styleUrl: './settings-entry.component.scss',
  templateUrl: './settings-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {

  readonly team = signal('Equipo A');
  readonly duration = signal('25-01-2024 12-12-2026');
  readonly dateBegin = signal('08:30 am');
  readonly dateEnd = signal('05: 30 pm');

  readonly monday = signal(true);
  readonly tuesday = signal(true);
  readonly wednesday = signal(true);
  readonly thursday = signal(true);
  readonly friday = signal(true);
  readonly saturday = signal(false);
  readonly sunday = signal(false);

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        title: 'Actualizar Ajustes del Equipo',
        message: '¿Está seguro de aplicar cambios?',
        input: false,
        disabledButton: false,
        cancelButton: true,
        cancelLabel: 'Cancelar',
        acceptLabel: 'Guardar',
      },
      width: '580px',
      minHeight: '174px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialog.open(CustomDialogComponent, {
          data: {
            title: 'Éxito',
            message: 'Cambios aplicados con éxito',
            input: false,
            disabledButton: false,
            cancelButton: false,
            cancelLabel: 'Cerrar',
            acceptLabel: 'Cerrar',
          },
          width: '580px',
          minHeight: '174px',
        });
      }
    })
  }
}
