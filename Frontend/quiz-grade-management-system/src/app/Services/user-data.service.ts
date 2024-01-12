import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor() {
    const storedUserData = sessionStorage.getItem('userData');
    if (storedUserData) {
      this.userDataSubject.next(JSON.parse(storedUserData));
    }
  }

  setUserData(data: any): void {
    this.userDataSubject.next(data);
    sessionStorage.setItem('userData', JSON.stringify(data));
  }

  getUserData(): any {
    return this.userDataSubject.value;
  }

  logout(): void {
    this.userDataSubject.next(null);
    sessionStorage.removeItem('userData');
}
}
