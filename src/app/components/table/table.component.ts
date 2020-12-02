import { AfterViewInit, Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit {

  @Input() id: string;

  displayedColumns: string[] = [ 'img', 'name', 'artists[0].name', 'playback' ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private spotify: SpotifyService ) {

  }

  ngOnInit() {
     
     this.spotify.getPlaylistById( this.id )
      .subscribe( trackInfo => {
         this.dataSource.data = trackInfo.map( ( data ) => {
            return data.track;
         } );
         console.log( this.dataSource.data );
      }); 
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}






