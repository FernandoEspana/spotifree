import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ExportdataService } from '../../services/exportdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playLists: any = [];
  constructor(  private spotify: SpotifyService, 
                private router: Router,
                private data: ExportdataService ) { 

    this.spotify.getPlaylists().subscribe ( (data: any) => {
          this.playLists = data.items;
          console.log( this.playLists);
    })
  }

  ngOnInit(): void {
  }

  onPlaylistClick( playlist: any ) {
    
    this.data.nombrePlaylist = playlist.name;
    this.data.imageUrl = playlist.images[0].url;
    this.router.navigate(['/playlist', playlist.id]);
    


  }



}
