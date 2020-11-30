import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SeachComponent } from './pages/seach/seach.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';


const routes: Routes = [
  { path: '',component: HomeComponent  },
  { path: 'home',component: HomeComponent  },
  { path: 'search',component: SeachComponent  },
  { path: 'playlist/:id', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
