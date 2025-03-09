import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  title: string;
  message: string;
  input: boolean;
  disabledButton: boolean;
  cancelButton: boolean;
  cancelLabel: string;
  acceptLabel: string;
}

@Component({
  selector: 'app-custom-dialog',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss',
})
export class CustomDialogComponent {
  readonly dialogRef = inject(MatDialogRef<CustomDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  readonly name = signal('Equipo F');

  onClose(status: boolean): void {
    this.dialogRef.close(status);
  }
}
