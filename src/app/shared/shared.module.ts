import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule, GALLERY_CONFIG } from 'ng-gallery';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    GalleryModule,
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
    GoogleMapsModule,
    MatTableModule,
    GalleryModule,
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        thumbPosition: 'bottom',
        imageSize: 'cover',
      }
    }
  ]
})
export class SharedModule {}
