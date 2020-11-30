import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
   email: string;
   followers: number;
   urlImgProfile: string;
  constructor(private spotifyService: SpotifyService) { 
    
    this.spotifyService.getUser().subscribe( (data: any) => {
      this.email = data.email;
      this.followers = data.followers.total;
      this.urlImgProfile = data.images[0].url;

     
    });
  }

  ngOnInit(): void {
  }

}
