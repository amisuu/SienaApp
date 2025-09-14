import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material modules
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    GoogleMapsModule,
    MatTableModule
  ]
})
export class SharedModule {}
