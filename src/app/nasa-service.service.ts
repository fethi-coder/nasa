import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaServiceService {

  private service:HttpClient;

  constructor(private http:HttpClient) {}

getNasa(){
  let url='https://api.nasa.gov/planetary/apod?api_key=vA3p0pvcyeXxGanWLU4JXUszVVAimkkxOGPO9hai';
  return this.http.get(url);
  }}

