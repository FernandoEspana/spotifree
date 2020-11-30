import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) { 
    console.log('Se ubucia el servicio ');
  }

  getUser() {
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCBlfd283k6Fxpxwk4xDAeFQh7W0zwc5Yyl_RYwtc6bw5sWHid1yZmv4d-i1Hu-sP6B_d8kFxM-relgGGLR9fVxGewznR3Pez9no-r0zX9RS2DAZiFLNeBsEnbkhFj6AJtCni2b-CDiMfVOFHGnCk4IqMdaEtYKrYgft1aP1Qegfog-g71d05exyhdR'
     });
     return this.http.get('https://api.spotify.com/v1/me/', { headers });
  }

  getPlaylist() {
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCBlfd283k6Fxpxwk4xDAeFQh7W0zwc5Yyl_RYwtc6bw5sWHid1yZmv4d-i1Hu-sP6B_d8kFxM-relgGGLR9fVxGewznR3Pez9no-r0zX9RS2DAZiFLNeBsEnbkhFj6AJtCni2b-CDiMfVOFHGnCk4IqMdaEtYKrYgft1aP1Qegfog-g71d05exyhdR'
     });
     return this.http.get('https://api.spotify.com/v1/me/playlists', { headers });
  }
}
