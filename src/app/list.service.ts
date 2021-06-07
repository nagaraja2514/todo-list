import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  getData() {
    const listData= [
      { 
        name: 'nagaraja',
      },
      {
       
       name: 'AITS'

      }
    ];
    return listData
       
  }
}
