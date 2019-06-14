import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Name {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  url = 'https://dxfl0gwu0m.execute-api.us-east-2.amazonaws.com/Angular01Stage/helloangular';

  constructor(private http: HttpClient) { }
  
  getMessage(callback: (msg: String) => void): void {
    this.http.get(this.url).subscribe((data: Name) => {
      callback(data['name']);
    });

    // // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    // this.http.get('https://dxfl0gwu0m.execute-api.us-east-2.amazonaws.com/Angular01Stage/helloangular', {  // API GatewayのURL
    //   headers: new HttpHeaders().set('x-api-key', 'FdTcSTUnaw4Hq2z54kb9h1nBUbVSGsXl1SyZYXnO') // APIキー文字列
    // }).subscribe(data => {
    //   callback(data['name']);
    // });
  }
}
