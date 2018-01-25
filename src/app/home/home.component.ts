

import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items = [];
    constructor(private router: Router) { 
      this.items = ['i am daliya', 'i am seeniya', 'i am viji'];
    }

    btnClick() {
      this.router.navigateByUrl('/animation');
    }
    addItem() {
      this.items.push('i am vincy');
    }
  
    removeItem() {
      this.items.pop();
    }
}
