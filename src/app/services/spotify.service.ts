import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor(private http: HttpClient) { 
    
  }

  getQuery( query: string ) {

    const url= `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBeDXKtgC_1D3Q3m1DIp88Rd0Fr963NvmVqjFHeV0ugeudT07BqDkI3inF3pAvoNuoF8o60KeXjLyY9jSKNVoYNRZtgJkUU3JPk-gGqEAm6Ew3nA7nHM2sW4dEAX3sY9HIIfGTDsHXokt-mQgPjx5mqYszfC1ibValExh2aK3z_oZA4LYGKVNp0Btrm'
     });

    return this.http.get( url, { headers });     
  }

  getUser() {
    
    return this.getQuery( 'me' );
    
  }

  getPlaylists() {
    
      return this.getQuery( 'me/playlists' );
     
  }

  getPlaylistById( id: string) {

    return this.getQuery( `playlists/${ id }/tracks`)
        .pipe( map( data => {
          return data['items'];
        }));
  }


  //https://api.spotify.com/v1/search?q=new%20divide&type=track
  getTrack( search: string ) {

    return this.getQuery( `search?q=${ search }&type=track&limit=5` );
     
     

  }
}
