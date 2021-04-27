import { Component,OnInit } from '@angular/core';
import { NasaServiceService } from './nasa-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title:string[] =[];
  private service:NasaServiceService;

  constructor(param_service:NasaServiceService){
    this.service = param_service;
  }


ngOnInit():void{
  this.service.getIMageofTheDay().subscribe(
    (param_msg:string)=>{
      this.title[""] = param_msg;
    }
  );
}
  
  
}
