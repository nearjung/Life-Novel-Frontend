import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigServerService {
  constructor() { }
  public getAPI(postFix: string, module = 'web'): any {
    if (module === 'web') {
      return environment.endPointWeb + postFix;
    }
  }

}

export const configService = new ConfigServerService();
