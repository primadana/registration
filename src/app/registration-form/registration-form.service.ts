import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import { ResponseApiModel } from '../response-api.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ACTION_SAVE_REGISTRATION = '';

@Injectable({
  providedIn: 'root'
})
export class RegistrationFormService {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
  ) { }

  public saveRegistration(param): Observable<ResponseApiModel> {
    return this.http.post<ResponseApiModel>(
      this.globalService.apiHost + ACTION_SAVE_REGISTRATION, param
    ).pipe(
      map(response => response)
    );
  }
}
