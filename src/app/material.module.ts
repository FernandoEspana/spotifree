import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
