import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GeneticData } from '../interface/genetic-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data = [
      { id: 1, case_id: 'abc123', reference: 'test1'},
      { id: 2, case_id: 'def456', reference: 'test2'},
      { id: 3, case_id: 'ghi789', reference: 'test3'}
    ];
    return {data};
  }

  constructor() { }
}