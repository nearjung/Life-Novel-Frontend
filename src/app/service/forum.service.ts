
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigServerService } from '../core/config-server.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  constructor(private httpClient: HttpClient, private configService: ConfigServerService) { }

  public getForum(category: string) {
    let params = '?category=' + category;
    return this.httpClient.get<any>(this.configService.getAPI('forum/getForum') + params).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }

  public getForumById(forumId: any) {
    let params = '?forumId=' + forumId;
    return this.httpClient.get<any>(this.configService.getAPI('forum/getForumById') + params).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }

  public saveForum(data: any) {
    return this.httpClient.post<any>(this.configService.getAPI('forum/save'), data).pipe(
      map(respons => {
        return {
          serviceResult: respons
        }
      }));
  }

}