import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {

   songs: any = [];
  constructor(private spotify: SpotifyService) {

   }

  ngOnInit(): void {
  }

  buscar( track: string) {
    if( track != ''){
      this.spotify.getTrack( track )
      .subscribe( data => {
        
        this.songs = data['tracks'].items;
        console.log( this.songs );
      })

    }
        
  }

}
