import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PlaylistcardComponent } from './playlistcard/playlistcard.component';
import { MaterialModule } from '../material.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [NavbarComponent, PlaylistcardComponent, TableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
