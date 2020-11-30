import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playLists: any = [];
  constructor(private spotify: SpotifyService) { 
    this.spotify.getPlaylist().subscribe ( (data: any) => {
          this.playLists = data.items;
          console.log( this.playLists );
    })
  }

  ngOnInit(): void {
  }

}
