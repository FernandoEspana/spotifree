import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor(private http: HttpClient) { 
    console.log('Se ubucia el servicio ');
  }

  getQuery( query: string ) {

    const url= `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDGvQj-EbUDXNDXEshGnIWTwywCJjegiELKQbpyevikLmdjwdwYV4pBSeVvnLJUrpJT0UbJXdB9irFqspKJfRBTG7n4Q-nK-5SZkVESX5vHrRTJzbjS25quw28WTzvAbZ8XMu-Vl3zmu18bJYkTPbO_3GIRXI9nwnhp_dzk-OqmuFqdMn3lWiW0EwpF'
     });

    return this.http.get( url, { headers });     
  }

  getUser() {
    
    return this.getQuery( 'me' );
    
  }

  getPlaylists() {
    
      return this.getQuery( 'me/playlists' )
     
  }

  getPlaylistById( id: string) {

    return this.getQuery( `playlists/${ id }/tracks`)
        .pipe( map( data => {
          return data['items'];
        }));
  }
}
