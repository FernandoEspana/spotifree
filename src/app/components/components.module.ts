import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistcardComponent } from './playlistcard/playlistcard.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [NavbarComponent, PlaylistcardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
