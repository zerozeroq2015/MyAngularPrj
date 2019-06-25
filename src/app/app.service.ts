import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  withCredentials: true
};
httpOptions['headers'] = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
});

export interface Name {
  emp_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
   
  url = 'https://dxfl0gwu0m.execute-api.us-east-2.amazonaws.com/Angular01Stage/helloangular';

  constructor(private http: HttpClient) { }
  

  getMessage(callback: (msg: String) => void): void {

    let body = new HttpParams({
        fromObject: {
          'emp_id': '10000'
        }
    });
    this.http.post(this.url, body, httpOptions).subscribe((data: Name) => {
      callback(data['name']);
    });
    // this.http.get(this.url).subscribe((data: Name) => {
    //   callback(data['name']);
    // });
    // // API GatewayとHTTP通信して、取得成功時にコールバックを行なう
    // this.http.get('https://dxfl0gwu0m.execute-api.us-east-2.amazonaws.com/Angular01Stage/helloangular', {  // API GatewayのURL
    //   headers: new HttpHeaders().set('x-api-key', 'FdTcSTUnaw4Hq2z54kb9h1nBUbVSGsXl1SyZYXnO') // APIキー文字列
    // }).subscribe(data => {
    //   callback(data['name']);
    // });
  }
}
