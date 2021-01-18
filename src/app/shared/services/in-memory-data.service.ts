import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const elemntData = [
      {ID: 1 ,name:'Jesus David', lastName: 'alvear', age:21 , address: 'cra 24'},
      {ID: 2 ,name:'Germinton Antonio' , lastName: 'alvear', age:20 , address: 'cra 23'},
      {ID: 3 ,name:'Jose Carlos' , lastName: 'Gutierez', age:22 , address: 'cra 29'},
      {ID: 4 ,name:'Jhonatan Andres' , lastName: 'Lopez', age:20 , address: 'cra 60'}
  ];
    return {elemntData};
  }
  constructor() { }
}
