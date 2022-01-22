import { Injectable } from '@angular/core';
import { User } from '@demo-app/shared/data-access/models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApisService {
  getUsersList(): Observable<User[]> {
    return of([
      {
        id: new Date().getTime(),
        name: 'Ramu',
        phone: '8341682265',
        email: 'rambabu.padimi@appitventures.com',
        message: 'Hello, Good morning everyone!!',
      },
    ]);
  }

  createUser(user: User): Observable<User> {
    return of(user);
  }

  editUser(user: User): Observable<User> {
    return of(user);
  }

  deleteUser(userId: number): Observable<string> {
    return of('User deleted sucess..!!');
  }
}
