import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ExportdataService } from '../../services/exportdata.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  id:string;
  //private tracks: any = [];
  constructor(  private activateRoute: ActivatedRoute, 
                public data: ExportdataService) { }

  ngOnInit(): void {

    //Obtain playlist id from activetes route from url
     this.id = this.activateRoute.snapshot.params.id;

  }

}
