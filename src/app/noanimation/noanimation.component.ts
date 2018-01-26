

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger, state, style, transition, query, animate, keyframes, stagger } from '@angular/animations';

@Component({
  selector: 'app-noanimation',
  templateUrl: './noanimation.component.html',
  styleUrls: ['./noanimation.component.css'],
  animations: [

    // menu animation
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class NoAnimationComponent {
  menuState: any  = 'out';
  items = [];
  constructor() {
    this.items = ['i am daliya', 'i am seeniya', 'i am viji'];
  }
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  addItem() {
    this.items.push('i am vincy');
  }

  removeItem() {
    this.items.pop();
  }
}