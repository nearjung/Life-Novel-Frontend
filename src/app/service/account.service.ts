
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigServerService } from '../core/config-server.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient, private configService: ConfigServerService) { }

  public login(data: any) {
    return this.httpClient.post<any>(this.configService.getAPI('login/save'), data).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }

  public loginWeb(data: any) {
    return this.httpClient.post<any>(this.configService.getAPI('login/get'), data).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }

  // public login(obj: any) {
  //   let params = '?member=' + memberId;
  //   return this.httpClient.get<any>(this.configService.getAPI('Scan/getVisit') + params).pipe(
  //     map(respons => {
  //       return {
  //         serviceResult: respons
  //       }
  //     }));
  // }


}