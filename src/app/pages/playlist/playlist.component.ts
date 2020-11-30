import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ExportdataService } from '../../services/exportdata.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  private tracks: any = [];
  constructor(  private activateRoute: ActivatedRoute, 
                private spotify: SpotifyService,
                public data: ExportdataService) { }

  ngOnInit(): void {

    //Obtain playlist id from activetes route from url
    const id = this.activateRoute.snapshot.params.id;

    console.log(id);

    this.spotify.getPlaylistById( id ).subscribe( (data: any) => {
      
      this.tracks = data;
      console.log( this.tracks );
    })
    

  }

}
