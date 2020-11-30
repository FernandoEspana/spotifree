import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SeachComponent } from './seach/seach.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [HomeComponent, PlaylistComponent, SeachComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
      HomeComponent
  ]
})
export class PagesModule { }
