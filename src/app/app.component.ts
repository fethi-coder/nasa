import { Component,OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NasaServiceService } from './nasa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title:Data[]=[];


  constructor(private nasa:NasaServiceService){
    
    this.nasa.getNasa().subscribe(data=>{
    this.title.push(data);
    console.log(this.title)
   })
  }


ngOnInit():void{}
    
}
  
  

