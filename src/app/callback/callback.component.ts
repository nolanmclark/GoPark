import { Component, OnInit} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'callback',
  templateUrl: 'callback.component.html'
})
export class CallbackComponent implements OnInit  {

    constructor(public router: Router){}

    ngOnInit() {
        setTimeout((router: Router) => {
          this.router.navigate(['/dashboard']);
      }, 3000);
    }
 }
