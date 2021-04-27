import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  private service:HttpClient;

  constructor(param_service:HttpClient) { 
    this.service = param_service;
  }

public getIMageofTheDay():Observable<string>{
const obs1:Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod?api_key=BEjtaKFJMRY562qHWhTM4XsTFXwmL8fZDQsEvmC8");
const treatment = (param_data:any)=>{
  return param_data.msg as string;
   };
   return obs1.pipe(map(treatment));   
  }

}

