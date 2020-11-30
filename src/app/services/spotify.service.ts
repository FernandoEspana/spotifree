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

  getUser() {
    
    const headers = new HttpHeaders({
       'Authorization':'Bearer BQDMluzfKT7mY1zBDgdh6YSde-Yg2sDEvyKq7WbodIdr4DucRN3S7FR_sX-SCJh0TxfDo7c7ptoQAPAOGW6qLTfMw875QRxmJhXX92Gr5k99uJQL5rDSqjIBENJgeECPBAq8sbI2YbHxihcfBTvSS9tM2AbhAwpwCumqKhow06iHaxsZVlPXI1xF6H7m'
      });
     return this.http.get('https://api.spotify.com/v1/me/', { headers });
  }

  getPlaylists() {
    
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDMluzfKT7mY1zBDgdh6YSde-Yg2sDEvyKq7WbodIdr4DucRN3S7FR_sX-SCJh0TxfDo7c7ptoQAPAOGW6qLTfMw875QRxmJhXX92Gr5k99uJQL5rDSqjIBENJgeECPBAq8sbI2YbHxihcfBTvSS9tM2AbhAwpwCumqKhow06iHaxsZVlPXI1xF6H7m'
     });
     return this.http.get('https://api.spotify.com/v1/me/playlists', { headers });
  }

  getPlaylistById( id: string) {
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDMluzfKT7mY1zBDgdh6YSde-Yg2sDEvyKq7WbodIdr4DucRN3S7FR_sX-SCJh0TxfDo7c7ptoQAPAOGW6qLTfMw875QRxmJhXX92Gr5k99uJQL5rDSqjIBENJgeECPBAq8sbI2YbHxihcfBTvSS9tM2AbhAwpwCumqKhow06iHaxsZVlPXI1xF6H7m'
     });
    return this.http.get(`https://api.spotify.com/v1/playlists/${ id }/tracks`, { headers })
            .pipe( map( data => {
              return data[ 'items' ];
            })) ;

  }
}
