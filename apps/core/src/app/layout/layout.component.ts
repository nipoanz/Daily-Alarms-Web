import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  public teamSelected = {
    id: 1,
    name: 'Equipo A',
    icon: 'groups',
  };

  public viewSelected = 'Reportes';

  public optionsTeams = [
    {
      id: 1,
      name: 'Equipo A',
      icon: 'groups',
    },
    {
      id: 2,
      name: 'Equipo B',
      icon: 'groups',
    },
    {
      id: 3,
      name: 'Equipo C',
      icon: 'groups',
    },
    {
      id: 4,
      name: 'Equipo D',
      icon: 'groups',
    },
    {
      id: 5,
      name: 'Agregar Equipo',
      icon: 'add_circle',
    },
  ];

  public menuItems = [
    {
      icon: 'assignment',
      route: 'daily',
      title: 'Reportes',
    },
    {
      icon: 'groups',
      route: 'users',
      title: 'Miembros',
    },
    {
      icon: 'settings',
      route: 'settings',
      title: 'Ajustes',
    },
  ];

  constructor(private router: Router, private dialog: MatDialog) {
    this.updateViewSelected();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        title: 'Cerrar Sesión',
        message: '¿Está seguro de finalizar sesión?',
        input: false,
        disabledButton: false,
        cancelButton: true,
        cancelLabel: 'Cancelar',
        acceptLabel: 'Cerrar',
      },
      width: '580px',
      minHeight: '174px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.logout();
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateViewSelected();
      });
    this.teamSelected = this.optionsTeams[0];
  }

  changeTeam(event: any, data: any) {
    if (data.id === 5) {
      this.teamSelected = this.optionsTeams[0];
      const dialogRef = this.dialog.open(CustomDialogComponent, {
        data: {
          title: 'Crear Equipo',
          message: 'Ingrese el nombre del equipo',
          input: true,
          disabledButton: false,
          cancelButton: true,
          cancelLabel: 'Cancelar',
          acceptLabel: 'Agregar',
        },
        width: '580px',
        minHeight: '317px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.dialog.open(CustomDialogComponent, {
            data: {
              title: 'Crear Equipo',
              message: 'Equipo creado con exito',
              input: false,
              disabledButton: false,
              cancelButton: false,
              cancelLabel: 'Cancelar',
              acceptLabel: 'Cerrar',
            },
            width: '580px',
            minHeight: '174px',
          });
        }
      });
    }
  }

  updateViewSelected() {
    const currentRoute = this.router.url.split('/').pop();
    const menuItem = this.menuItems.find((item) => item.route === currentRoute);
    this.viewSelected = menuItem ? menuItem.title : 'Desconocido';
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
