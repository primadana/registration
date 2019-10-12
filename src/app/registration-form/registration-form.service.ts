import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { ResponseApiModel } from '../response-api.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ACTION_SAVE_REGISTRATION = '/registration/save-registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
  ) { }

  public header() {
    return {
      headers: new HttpHeaders()
    };
  }

  public saveRegistration(param): Observable<ResponseApiModel> {
    return this.http.post<ResponseApiModel>(
      this.globalService.apiHost + ACTION_SAVE_REGISTRATION, param, this.header()
    ).pipe(
      map(response => response)
    );
  }
}
