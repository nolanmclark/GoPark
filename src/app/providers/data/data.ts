import { Injectable } from '@angular/core';

@Injectable()
export class Data {
  public storage: any;
  constructor() {
    this.storage = 'none';
  }
}
