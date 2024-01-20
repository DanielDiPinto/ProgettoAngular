import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | undefined>(undefined);
  userNamePull$ = this.userNameSource.asObservable();

  setUserName(userName: string) {
    this.userNameSource.next(userName);
  }
}