import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  getName(): Observable<string> {
    return of('ovione');
  }
}
