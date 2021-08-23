
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigServerService } from '../core/config-server.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, private configService: ConfigServerService) { }

  public register(data: any) {
    return this.httpClient.post<any>(this.configService.getAPI('register/save'), data).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }
}