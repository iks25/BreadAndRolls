import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test1Service {
  isTrue: boolean = false;
  // resutText: boolean = false;
  text = 'text1';

  constructor() {}
  Toggle() {
    this.text = 'text2';
    if (this.text == 'text2') {
    }
  }
}
