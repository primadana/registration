import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class GlobalService {

    public apiHost: string;
    // public apiVersion: string;
    // public apiVersionHost: string;

    public setting: any = {};

    constructor() {
        if (environment.production == true) {
            this.apiHost = environment.host;
            // this.apiVersion = environment.apiVersion;
            // this.apiVersionHost = this.apiHost + '/' + this.apiVersion;
        } else {
            this.apiHost = environment.host;
            // this.apiVersion = environment.apiVersion;
            // this.apiVersionHost = this.apiHost+'/'+this.apiVersion;
        }
    }

    loadGlobalSettingsFromLocalStorage(): void {
        if (localStorage.getItem('access-setting') != null) {
            this.setting = JSON.parse(localStorage.getItem('access-setting'));
        }
    }

}
