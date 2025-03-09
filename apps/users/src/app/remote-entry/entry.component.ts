import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

type Member = {
  name: string;
  mail: string;
};

@Component({
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  selector: 'app-users-entry',
  styleUrl: './users-entry.component.scss',
  templateUrl: './users-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {
  public members: Member[] = [
    {
      name: 'Juan Perez',
      mail: 'juan.perez@gmail.com',
    },
    {
      name: 'Rosita Rosales',
      mail: 'rosita.rosales@gmail.com',
    },
    {
      name: 'Sofia Perez',
      mail: 'sofia.perez@gmail.com',
    },
    {
      name: 'Santiago Gonzalez',
      mail: 'santiago.gonzalez@gmail.com',
    },
    {
      name: 'Nicolás Perez',
      mail: 'nicolas.perez@gmail.com',
    },
    {
      name: 'Sancho Panza',
      mail: 'sancho.panza@gmail.com',
    },
    {
      name: 'Don Quijote',
      mail: 'quijote@gmail.com',
    },
  ];

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        title: 'Invitar Miembro',
        message: 'Ingrese el correo del miembro a invitar al equipo',
        input: true,
        disabledButton: false,
        cancelButton: true,
        cancelLabel: 'Cerrar',
        acceptLabel: 'Invitar',
        inputLabel: 'juan.diego@gmail.com'
      },
      width: '580px',
      minHeight: '174px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialog.open(CustomDialogComponent, {
          data: {
            title: 'Invitar Miembro',
            message: 'Miembro Invitado con éxito',
            input: false,
            disabledButton: false,
            cancelButton: false,
            cancelLabel: 'Cerrar',
            acceptLabel: 'Cerrar',
            inputLabel: ''
          },
          width: '580px',
          minHeight: '174px',
        });
      }
    });
  }
}
